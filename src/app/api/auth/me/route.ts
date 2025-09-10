import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  // Demo: Always return not authenticated
  // In production, check session/cookie/token
  return new Response(JSON.stringify({ isSignedIn: false }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
