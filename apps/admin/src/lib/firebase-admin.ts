import { FIREBASE_CONFIG, SERVICE_ACCOUNT } from 'configs/app.config'
import admin from 'firebase-admin'

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(SERVICE_ACCOUNT),
      databaseURL: FIREBASE_CONFIG.databaseURL,
      storageBucket: FIREBASE_CONFIG.storageBucket,
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Firebase admin initialization error')
  }
}

export const db = admin.firestore()
export const bucket = admin.storage().bucket()
export const auth = admin.auth()

export default admin
