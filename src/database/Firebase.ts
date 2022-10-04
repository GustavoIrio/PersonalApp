import admin from 'firebase-admin';

import * as serviceAccount from '../../apppersonal_firebase_admin.json'

const firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
});

export { firebaseAdmin }