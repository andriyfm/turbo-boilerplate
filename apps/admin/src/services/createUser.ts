import { doc, setDoc } from 'firebase/firestore'
import { db } from 'lib/firebase-client'

interface ICreateUserPayload {
  uid: string
  name: string
  email: string
}

const createUser = async (payload: ICreateUserPayload) => {
  const { uid, name, email } = payload
  const docRef = doc(db, 'users', uid)
  return setDoc(docRef, { uid, name, email })
}

export default createUser
