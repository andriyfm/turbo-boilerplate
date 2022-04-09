import { FIREBASE_CONFIG } from 'configs/app.config'
import admin, { ServiceAccount } from 'firebase-admin'
import serviceAccount from './firebase-service-account.json'

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as ServiceAccount),
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
