export async function onRequestPost() {
  return new Response(JSON.stringify({ success: true, message: 'Logged out' }), {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  });
}
