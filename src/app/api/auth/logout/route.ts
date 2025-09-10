import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  // In production, clear session/cookie/token
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}