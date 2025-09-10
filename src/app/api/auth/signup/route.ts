import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log('SIGNUP req.body:', body);

  const { email, password } = body;

  // Demo: Accept any non-empty email/password
  if (email && password) {
    // In production, create user in database and send confirmation email
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ error: 'Invalid signup data' }), {
    status: 400,
    headers: { 'Content-Type': 'application/json' },
  });
}
