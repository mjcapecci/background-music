import { NextApiRequest } from 'next';

export interface ExtendedReq extends NextApiRequest {
  firebase: any;
  user: any;
  uid: string | boolean;
}
