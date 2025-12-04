# Deployment Guide

## Prerequisites
- Node.js 18+ installed
- Git repository
- GitHub account

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

## Deploy to GitHub Pages - Complete Step-by-Step Guide

### Step 1: Prepare Your Repository

1. **Create a GitHub repository** (if not already created):
   - Go to https://github.com/new
   - Name your repository (e.g., `kamal-portfolio`)
   - Choose Public or Private
   - Click "Create repository"

2. **Push your code to GitHub** (if not already pushed):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```

### Step 2: Configure Next.js for GitHub Pages

1. **Update `next.config.js`**:
   - Open `next.config.js`
   - Change `basePath` and `assetPrefix` to match your repository name:
   ```javascript
   basePath: '/YOUR-REPO-NAME',
   assetPrefix: '/YOUR-REPO-NAME/',
   ```
   - For example, if your repo is `kamal-portfolio`:
   ```javascript
   basePath: '/kamal-portfolio',
   assetPrefix: '/kamal-portfolio/',
   ```

2. **Commit the changes**:
   ```bash
   git add next.config.js
   git commit -m "Configure for GitHub Pages"
   git push
   ```

### Step 3: Set Up GitHub Actions (Automated Deployment - RECOMMENDED)

1. **Create workflow directory**:
   ```bash
   mkdir -p .github/workflows
   ```

2. **Create deployment workflow file**:
   - Create `.github/workflows/deploy.yml` with the following content:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches:
         - main
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: "pages"
     cancel-in-progress: false

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4

         - name: Setup Node
           uses: actions/setup-node@v4
           with:
             node-version: "20"
             cache: npm

         - name: Install dependencies
           run: npm ci

         - name: Build with Next.js
           run: npm run build

         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: ./out

     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

3. **Commit and push the workflow**:
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Actions workflow"
   git push
   ```

### Step 4: Enable GitHub Pages

1. **Go to your repository on GitHub**:
   - Navigate to `https://github.com/YOUR-USERNAME/YOUR-REPO-NAME`

2. **Open Settings**:
   - Click the "Settings" tab at the top of the repository

3. **Navigate to Pages**:
   - In the left sidebar, click "Pages" (under "Code and automation")

4. **Configure GitHub Pages**:
   - Under "Source", select **"GitHub Actions"** from the dropdown
   - Click "Save" (if available)

### Step 5: Deploy Your Site

1. **Trigger the deployment**:
   - The workflow will run automatically when you push to the `main` branch
   - Or go to "Actions" tab and click "Run workflow" to trigger manually

2. **Monitor the deployment**:
   - Go to the "Actions" tab in your repository
   - You'll see the "Deploy to GitHub Pages" workflow running
   - Wait for it to complete (usually 2-3 minutes)

3. **Access your deployed site**:
   - After successful deployment, your site will be available at:
   - `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
   - For example: `https://Mohamedkamaludeen.github.io/kamal-portfolio/`

### Step 6: Verify Deployment

1. **Check the Actions tab**:
   - Ensure the workflow completed successfully (green checkmark)
   
2. **Visit your site**:
   - Open `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
   - Verify all pages load correctly
   - Check that images and assets are displaying properly

### Alternative: Manual Deployment (NOT RECOMMENDED)

If you prefer to deploy manually without GitHub Actions:

1. **Build locally**:
   ```bash
   npm run build
   ```

2. **Install gh-pages package**:
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy script to `package.json`**:
   ```json
   "scripts": {
     "deploy": "gh-pages -d out"
   }
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**:
   - Go to Settings → Pages
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch and `/ (root)` folder
   - Click Save

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
