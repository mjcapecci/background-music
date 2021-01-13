import { ExtendedReq } from '../types';
const firebaseConfig = require('../lib/firebaseConfig');
const admin = require('firebase-admin');
const serviceAccount = require('../lib/serviceAccountKey.json');

export const initFirebaseOnReq = async (req: ExtendedReq) => {
  if (!admin.apps.length) {
    req.firebase = admin.initializeApp(
      {
        credential: admin.credential.cert(serviceAccount),
        databaseURL: firebaseConfig.default.databaseURL,
        storageBucket: firebaseConfig.default.storageBucket,
        projectId: firebaseConfig.default.projectId,
      },
      'nextjs-api'
    );
  } else {
    req.firebase = admin.app('nextjs-api');
  }
};
