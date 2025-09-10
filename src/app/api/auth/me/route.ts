
export async function GET() {
  // Demo: Always return not authenticated
  // In production, check session/cookie/token
  return new Response(JSON.stringify({ isSignedIn: false }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
