# 🚀 Vibrant Tourism - Deployment Guide

## Quick Deploy to Cloudflare Pages

### Option 1: GitHub (Recommended)
1. Push to GitHub
2. Connect to Cloudflare Pages
3. Settings:
   - Build command: `npm run build`
   - Build output: `dist`
4. Deploy!

### Option 2: Direct Deploy
```bash
npm install -g wrangler
wrangler login
npm run build
wrangler pages deploy dist --project-name=vibrant-tourism
```

## Admin Access
- URL: `https://your-site.pages.dev/admin`
- Username: `admin`
- Password: `admin@123`

## Database
Using JSONBin.io for data storage
- API calls in `functions/api/` folder
- Data stored at JSONBin.io

## Local Development
```bash
npm install
npm run dev
```

Frontend: http://localhost:5173
Admin: http://localhost:5173/admin
