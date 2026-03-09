const JSONBIN_API_KEY = '$2a$10$qpE1gELCWzk4/LXkIGNJCewBVtVQAUBVONhY5TXPLc7AHKCMtqFcK';
const BIN_ID = '69af00d9ae596e708f718b3e';

export async function onRequest(context) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PUT, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (context.request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get current data
    const current = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
      headers: { 'X-Master-Key': JSONBIN_API_KEY }
    }).then(r => r.json());

    // Update categories
    const newCategories = await context.request.json();
    current.record.tourismCategories = newCategories;

    // Save back
    await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': JSONBIN_API_KEY
      },
      body: JSON.stringify(current.record)
    });

    return new Response(JSON.stringify({ success: true, data: newCategories }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
}
