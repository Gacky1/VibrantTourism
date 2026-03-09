export async function onRequest(context) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (context.request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  return new Response(JSON.stringify({ authenticated: true, user: { username: 'admin' } }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
  });
}
