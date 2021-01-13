import { ExtendedReq } from '../types';

export const validateFirebaseToken = async (req: ExtendedReq) => {
  try {
    const user = await req.firebase.auth().verifyIdToken(req.body.token);
    req.uid = user.uid;
  } catch (err) {
    req.uid = false;
  }
};
