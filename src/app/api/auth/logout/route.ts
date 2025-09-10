
export async function POST() {
  // In production, clear session/cookie/token
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}