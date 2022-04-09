/* eslint-disable import/no-cycle */
import { User } from 'firebase/auth'
import useAuthProvider, {
  ISignInPayload,
  ISignUpPayload,
} from 'hooks/useAuthProvider'
import React from 'react'
import { IUser } from 'services/getUser'

export interface IDefaultValue {
  errMessage: string
  authUser: User | null
  userProfile: IUser | null
  signUp: (payload: ISignUpPayload) => Promise<User | string | null>
  signIn: (payload: ISignInPayload) => Promise<User | string | null>
  signInWithGoogle: () => Promise<User | string | null>
  signOut: () => Promise<string | null>
}

const defaultValue: IDefaultValue = {
  errMessage: '',
  authUser: null,
  userProfile: null,
  signUp: async () => null,
  signIn: async () => null,
  signInWithGoogle: async () => null,
  signOut: async () => null,
}

const AuthContext = React.createContext(defaultValue)

export const useAuth = () => React.useContext(AuthContext)

export const AuthProvider: React.FC = ({ children }) => (
  <AuthContext.Provider value={useAuthProvider()}>
    {children}
  </AuthContext.Provider>
)
