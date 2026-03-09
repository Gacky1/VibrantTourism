export async function onRequest(context) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Credentials': 'true'
  };

  if (context.request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const { username, password } = await context.request.json();

  if (username === 'admin' && password === 'admin@123') {
    return new Response(JSON.stringify({ success: true, message: 'Login successful' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  return new Response(JSON.stringify({ success: false, message: 'Invalid credentials' }), {
    status: 401,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
  });
}
