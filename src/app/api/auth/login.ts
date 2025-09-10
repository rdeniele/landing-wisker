import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, password } = req.body;

  // Demo: Accept any non-empty email/password
  if (email && password) {
    // In production, verify credentials and set a secure cookie or return a JWT
    return res.status(200).json({ success: true, token: 'demo-token' });
  }

  return res.status(401).json({ error: 'Invalid credentials' });
}
