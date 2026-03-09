# 🚀 QUICK DEPLOY FOR CLIENT DEMO (30 Minutes)

## Step 1: Deploy Backend to Vercel (10 min)

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Deploy Backend:**
```bash
cd backend
vercel
```

3. **Follow prompts:**
   - Login to Vercel
   - Set up project: YES
   - Link to existing project: NO
   - Project name: vibrant-tourism-backend
   - Directory: ./
   - Override settings: NO

4. **Copy the deployment URL** (e.g., `https://vibrant-tourism-backend.vercel.app`)

5. **Set environment variables in Vercel:**
```bash
vercel env add SESSION_SECRET
# Enter: vibrant-tourism-2024-secret

vercel env add NODE_ENV
# Enter: production
```

6. **Redeploy with env vars:**
```bash
vercel --prod
```

## Step 2: Update Frontend Config (5 min)

1. **Edit `.env.production`:**
```
VITE_API_URL=https://your-backend-url.vercel.app
```
(Replace with your actual backend URL from Step 1)

2. **Update all API calls to use config:**

Run this to update files automatically:
```bash
# This will be done manually in next step
```

## Step 3: Deploy Frontend to Vercel (10 min)

1. **From root directory:**
```bash
vercel
```

2. **Follow prompts:**
   - Login to Vercel
   - Set up project: YES
   - Link to existing project: NO
   - Project name: vibrant-tourism
   - Directory: ./
   - Override settings: YES
   - Build command: `npm run build`
   - Output directory: `dist`

3. **Deploy to production:**
```bash
vercel --prod
```

4. **Copy frontend URL** (e.g., `https://vibrant-tourism.vercel.app`)

## Step 4: Update Backend CORS (5 min)

1. **Add frontend URL to Vercel backend env:**
```bash
cd backend
vercel env add FRONTEND_URL
# Enter your frontend URL: https://vibrant-tourism.vercel.app
```

2. **Redeploy backend:**
```bash
vercel --prod
```

## ✅ DONE! Test Your App

1. **Visit:** `https://vibrant-tourism.vercel.app`
2. **Admin Login:** `https://vibrant-tourism.vercel.app/admin`
   - Username: `admin`
   - Password: `admin@123`

## ⚠️ Important Notes for Client Demo

**What Works:**
✅ Full website with all pages
✅ Admin login and dashboard
✅ Content editing (Categories, Board, Education, Media)
✅ Changes persist during demo session

**Limitations (Explain to Client):**
⚠️ Data resets on backend restart (Vercel serverless)
⚠️ Not suitable for production without database
⚠️ Session may expire after inactivity

**For Production (After Demo):**
- Add MongoDB database
- Implement proper authentication
- Set up automated backups
- Add SSL certificates (Vercel provides free)

## Alternative: Netlify (If Vercel Fails)

### Backend: Railway.app
```bash
# 1. Go to railway.app
# 2. New Project > Deploy from GitHub
# 3. Select backend folder
# 4. Add env vars in Railway dashboard
```

### Frontend: Netlify
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod
```

## Troubleshooting

**CORS Error:**
- Make sure FRONTEND_URL is set in backend
- Redeploy backend after setting env vars

**Session Not Working:**
- Check cookie settings in browser
- Try incognito mode

**Data Not Saving:**
- This is expected with file-based storage
- Data persists during session only

## Quick Fixes Before Demo

**If backend URL changes:**
```bash
# Update .env.production
VITE_API_URL=new-backend-url

# Rebuild and redeploy
npm run build
vercel --prod
```

**If you need to reset data:**
- Just redeploy backend: `cd backend && vercel --prod`

## Demo Script for Client

1. Show main website (all pages)
2. Login to admin panel
3. Edit a category or article
4. Show changes reflected on frontend
5. Explain: "This is demo version, production will have database"

Good luck with your demo! 🎉
