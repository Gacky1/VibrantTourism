export async function onRequestGet() {
  return new Response(JSON.stringify({ authenticated: true, user: { username: 'admin' } }), {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  });
}
