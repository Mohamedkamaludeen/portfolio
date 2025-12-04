# Deployment Guide

## Prerequisites
- Node.js 18+ installed
- Git repository

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open http://localhost:3000

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `out` folder.

## Deploy to GitHub Pages

### Option 1: Manual Deployment

1. Update `next.config.js`:
```javascript
basePath: '/your-repo-name',
assetPrefix: '/your-repo-name/',
```

2. Build:
```bash
npm run build
```

3. Push the `out` folder to `gh-pages` branch

### Option 2: GitHub Actions (Recommended)

1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. The workflow will automatically deploy on push to main

## Deploy to Vercel

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

## Deploy to Netlify

1. Push code to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `out`

## Environment Variables

No environment variables needed for basic setup. If you add API integrations:

1. Create `.env.local`:
```
NEXT_PUBLIC_API_URL=your_api_url
```

2. Add to `.gitignore`
3. Configure in hosting platform

## Custom Domain

### GitHub Pages
1. Add CNAME file to `public/` folder
2. Configure DNS settings

### Vercel/Netlify
1. Add domain in dashboard
2. Update DNS records
3. SSL is automatic

## Troubleshooting

### Build Fails
- Clear cache: `rm -rf .next node_modules package-lock.json`
- Reinstall: `npm install`
- Rebuild: `npm run build`

### Images Not Loading
- Ensure images are in `public/` folder
- Check paths are correct (start with `/`)
- Verify `next.config.js` image settings

### 404 on Refresh
- Ensure `trailingSlash: true` in `next.config.js`
- Check hosting platform settings
