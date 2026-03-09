# 🗄️ DATABASE OPTIONS FOR QUICK DEMO

## ⚡ FASTEST: JSONBin.io (2 minutes)

### Setup:
1. Go to https://jsonbin.io
2. Sign up (free)
3. Create a bin with your data
4. Copy API key and Bin ID

### Implementation:
```bash
# Add to .env
JSONBIN_API_KEY=your_api_key
JSONBIN_BIN_ID=your_bin_id
```

Update `backend/routes/content.js`:
```javascript
import fetch from 'node-fetch';

const JSONBIN_API = 'https://api.jsonbin.io/v3/b';
const API_KEY = process.env.JSONBIN_API_KEY;
const BIN_ID = process.env.JSONBIN_BIN_ID;

router.get('/all', async (req, res) => {
  const response = await fetch(`${JSONBIN_API}/${BIN_ID}/latest`, {
    headers: { 'X-Master-Key': API_KEY }
  });
  const data = await response.json();
  res.json(data.record);
});

router.put('/categories', async (req, res) => {
  // Get current data
  const current = await fetch(`${JSONBIN_API}/${BIN_ID}/latest`, {
    headers: { 'X-Master-Key': API_KEY }
  }).then(r => r.json());
  
  // Update categories
  current.record.tourismCategories = req.body;
  
  // Save back
  await fetch(`${JSONBIN_API}/${BIN_ID}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key': API_KEY
    },
    body: JSON.stringify(current.record)
  });
  
  res.json({ success: true });
});
```

**Pros:**
✅ 2 minutes setup
✅ No code changes needed
✅ Free tier: 10k requests/month
✅ Works everywhere

**Cons:**
❌ Rate limits on free tier

---

## 📊 EASIEST: Google Sheets (5 minutes)

### Setup:
1. Create Google Sheet
2. Extensions > Apps Script
3. Paste this code:

```javascript
function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('data');
  const data = sheet.getRange('A1').getValue();
  return ContentService.createTextOutput(data)
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('data');
  sheet.getRange('A1').setValue(e.postData.contents);
  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Deploy > New deployment > Web app
5. Copy URL

### Use in backend:
```javascript
const SHEET_URL = 'your_deployed_url';

router.get('/all', async (req, res) => {
  const response = await fetch(SHEET_URL);
  const data = await response.json();
  res.json(data);
});

router.put('/categories', async (req, res) => {
  const current = await fetch(SHEET_URL).then(r => r.json());
  current.tourismCategories = req.body;
  
  await fetch(SHEET_URL, {
    method: 'POST',
    body: JSON.stringify(current)
  });
  
  res.json({ success: true });
});
```

**Pros:**
✅ Free forever
✅ Easy to view/edit data
✅ No rate limits
✅ Client can see data in sheets

**Cons:**
❌ Slower than other options
❌ Requires Google account

---

## 🚀 BEST FOR CLOUDFLARE: Cloudflare KV (10 minutes)

### Setup:
```bash
# Create KV namespace
wrangler kv:namespace create "CONTENT"

# Add to wrangler.toml
[[kv_namespaces]]
binding = "CONTENT"
id = "your_namespace_id"
```

### Update functions:
```javascript
// functions/api/content/all.js
export async function onRequest(context) {
  const data = await context.env.CONTENT.get('siteData', 'json');
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' }
  });
}

// functions/api/content/categories.js
export async function onRequest(context) {
  if (context.request.method === 'PUT') {
    const newData = await context.request.json();
    const current = await context.env.CONTENT.get('siteData', 'json');
    current.tourismCategories = newData;
    await context.env.CONTENT.put('siteData', JSON.stringify(current));
    return new Response(JSON.stringify({ success: true }));
  }
}
```

**Pros:**
✅ Built into Cloudflare
✅ Super fast (edge storage)
✅ Free tier: 100k reads/day
✅ No external dependencies

**Cons:**
❌ Cloudflare-specific
❌ Requires wrangler setup

---

## 🎯 RECOMMENDATION FOR TOMORROW'S DEMO

### Use JSONBin.io:

**Why:**
- Setup in 2 minutes
- Works with any hosting
- No code changes
- Free tier sufficient for demo

**Steps:**
1. Sign up at jsonbin.io
2. Create bin with initial data
3. Add API key to `.env`
4. Update 3 lines in `content.js`
5. Deploy!

**After Demo:**
- Migrate to Cloudflare KV (if using Cloudflare)
- Or use MongoDB (if using Vercel/Railway)

---

## 💾 QUICK JSONBIN SETUP

```bash
# 1. Install node-fetch
npm install node-fetch

# 2. Add to .env
echo "JSONBIN_API_KEY=your_key" >> backend/.env
echo "JSONBIN_BIN_ID=your_bin_id" >> backend/.env

# 3. Update backend/routes/content.js (see above)

# 4. Test
npm start
```

**Total time: 5 minutes** ⚡

Which option do you want to use?
