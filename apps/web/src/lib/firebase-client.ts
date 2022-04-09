/* eslint-disable import/no-extraneous-dependencies */
import { FIREBASE_CONFIG } from 'configs/app.config'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const app = initializeApp(FIREBASE_CONFIG)
const auth = getAuth(app)
const db = getFirestore(app)

export { app, auth, db }
