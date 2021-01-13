import { NextApiResponse } from 'next';
import { ExtendedReq } from '../../types';
import { initFirebaseOnReq } from '../../middleware/initFirebaseOnReq';
import { validateFirebaseToken } from '../../middleware/validateFirebaseToken';

const handler = async (req: ExtendedReq, res: NextApiResponse) => {
  await initFirebaseOnReq(req);
  await validateFirebaseToken(req, res);

  const { firebase, uid } = req;

  if (!uid) {
    res.status(401).json({ msg: 'You do not have permission to do that' });
    return;
  }

  try {
    const items = [];
    const collection = await firebase.firestore().collection('test');
    const query = await collection.get();

    query.forEach((result) => items.push(result.data()));

    console.log(items);
    res.json({ msg: 'Success' });
  } catch (err) {
    res.json({ err });
  }
};

export default handler;
