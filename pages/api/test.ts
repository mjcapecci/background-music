import { NextApiResponse } from 'next';
import { ExtendedReq } from '../../types';
import { initFirebaseOnReq } from '../../middleware/initFirebaseOnReq';

const handler = async (req: ExtendedReq, res: NextApiResponse) => {
  initFirebaseOnReq(req);

  const { firebase } = req;

  try {
    const user = await firebase.auth().verifyIdToken(req.body.token);
    const collection = await firebase.firestore().collection('test');
    const query = await collection.get();
    const results = query.forEach((result) => console.log(result.data()));

    res.json({ msg: 'Success' });
  } catch (err) {
    res.json({ err });
  }
};

export default handler;
