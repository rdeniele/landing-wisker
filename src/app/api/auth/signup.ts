import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, password } = req.body;

  // Demo: Accept any non-empty email/password
  if (email && password) {
    // In production, create user in database and send confirmation email
    return res.status(200).json({ success: true });
  }

  return res.status(400).json({ error: 'Invalid signup data' });
}
