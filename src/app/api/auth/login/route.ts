import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log('LOGIN req.body:', body);

  const { email, password } = body;

  // Demo: Accept any non-empty email/password
  if (email && password) {
    // In production, verify credentials and set a secure cookie or return a JWT
    return new Response(JSON.stringify({ success: true, token: 'demo-token' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
    status: 401,
    headers: { 'Content-Type': 'application/json' },
  });
}
