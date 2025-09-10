import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Demo: Always return not authenticated
  // In production, check session/cookie/token
  return res.status(200).json({ isSignedIn: false });
}
