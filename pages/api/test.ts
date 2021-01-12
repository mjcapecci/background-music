import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.query);
  res.json({ test: 'test' });
};

export default handler;
