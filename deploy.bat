@echo off
echo Building project...
call npm run build

echo.
echo Deploying to Cloudflare Pages...
echo NOTE: Functions folder must be at project root, not in dist
echo.

wrangler pages deploy dist --project-name=vibrant-tourism

echo.
echo Done! Your site should be live at:
echo https://vibrant-tourism.pages.dev
