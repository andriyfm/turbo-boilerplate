/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-cycle */

import { IDefaultValue } from 'contexts/AuthContext'
import {
  AuthError,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onIdTokenChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  getIdToken,
} from 'firebase/auth'
import { doc, onSnapshot } from 'firebase/firestore'
import { auth, db } from 'lib/firebase-client'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import createUser from 'services/createUser'
import getUser, { IUser } from 'services/getUser'
import nookies from 'nookies'

export interface ISignUpPayload {
  name: string
  email: string
  password: string
}

export interface ISignInPayload {
  email: string
  password: string
}

const useAuthProvider = (): IDefaultValue => {
  const [authUser, setAuthUser] = useState<IDefaultValue['authUser']>(null)
  const [userProfile, setUserProfile] = useState<IUser | null>(null)
  const [errMessage, setErrMessage] = useState('')

  const signUp = async (payload: ISignUpPayload) => {
    try {
      const { name, email, password } = payload
      const res = await createUserWithEmailAndPassword(auth, email, password)

      const { uid } = res.user
      await createUser({ uid, email, name })

      setAuthUser(res.user)

      return res.user
    } catch (error) {
      setAuthUser(null)
      const { message } = error as AuthError
      setErrMessage(message)
      return message
    }
  }

  const signIn = async (payload: ISignInPayload) => {
    try {
      const { email, password } = payload
      const res = await signInWithEmailAndPassword(auth, email, password)
      const profile = await getUser(res.user.uid)
      const token = await getIdToken(res.user)

      nookies.set(null, 'token', token)
      setUserProfile(profile)
      setAuthUser(res.user)

      return res.user
    } catch (error) {
      const { message } = error as AuthError
      setErrMessage(message)
      return message
    }
  }

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const res = await signInWithPopup(auth, provider)
      const profile = await getUser(res.user.uid)

      if (!profile) {
        await createUser({
          uid: res.user.uid,
          email: res.user.email as string,
          name: res.user.displayName as string,
        })
      }

      setUserProfile(profile)
      setAuthUser(res.user)

      return res.user
    } catch (error) {
      const { message } = error as AuthError
      setErrMessage(message)
      return message
    }
  }

  const signOut = async () => {
    try {
      await auth.signOut()
      nookies.destroy(null, 'token')
      setAuthUser(null)
      setUserProfile(null)
      Router.replace('/login')

      return null
    } catch (error) {
      const { message } = error as AuthError
      setErrMessage(message)
      return message
    }
  }

  useEffect(() => {
    if (errMessage) toast.error(errMessage)
  }, [errMessage])

  // Set auth user & profile when the id token is changed
  useEffect(
    () =>
      onIdTokenChanged(auth, async user => {
        if (!user) {
          setAuthUser(null)
          return
        }
        setAuthUser(user)
        setUserProfile(await getUser(user.uid))
      }),
    [],
  )

  // Update user profile when the is updated on firestore
  useEffect(() => {
    if (authUser) {
      const docRef = doc(db, 'users', authUser.uid)
      const unsubscribe = onSnapshot(docRef, res => {
        setUserProfile(res.data() as IUser)
      })
      return () => unsubscribe()
    }
    return () => {}
  }, [])

  return {
    errMessage,
    authUser,
    userProfile,
    signUp,
    signIn,
    signInWithGoogle,
    signOut,
  }
}

export default useAuthProvider
