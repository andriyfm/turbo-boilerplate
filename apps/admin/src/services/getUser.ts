import { doc, getDoc } from 'firebase/firestore'
import { db } from 'lib/firebase-client'

export interface IUser {
  uid: string
  name: string
  email: string
  createdAt: Date
}

const getUser = async (uid: string) => {
  const docRef = doc(db, 'users', uid)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) return docSnap.data() as IUser
  return null
}

export default getUser
