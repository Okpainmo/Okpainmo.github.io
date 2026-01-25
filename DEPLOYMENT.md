# GitHub Pages Deployment Setup

## ✅ What Has Been Configured

### 1. **GitHub Actions Workflow** (`.github/workflows/publish.yaml`)

Your workflow is now set up to:

- **Trigger**: Automatically on pushes to `main` branch, or manually via workflow_dispatch
- **Build Tool**: Uses Bun (latest version) for faster builds
- **Caching**: Implements Next.js cache for faster subsequent builds
- **Deployment**: Uploads the static `out/` directory to GitHub Pages

### 2. **Next.js Configuration** (`next.config.ts`)

```typescript
{
  output: 'export',  // Static export mode for GitHub Pages
  // No basePath or assetPrefix - configured for User Pages (root domain)
}
```

### 3. **Jekyll Prevention** (`public/.nojekyll`)

- Empty file created to prevent GitHub Pages from processing with Jekyll
- This ensures Next.js assets load correctly

## 🌐 GitHub Pages Setup Type: **User Pages**

This project is configured as a **User/Organization Pages site**, which means:

- ✅ Your site deploys to the **root domain**: `https://okpainmo.github.io/`
- ✅ No subdirectory paths needed
- ⚠️ **IMPORTANT**: Your repository **MUST** be named `Okpainmo.github.io` (matching your GitHub username exactly)

### Repository Naming Requirement

For your site to work at `https://okpainmo.github.io/`, the repository name must be:

```
Okpainmo.github.io
```

If your repository has a different name, you have two options:

1. **Rename the repository** to `Okpainmo.github.io` (recommended for root domain)
2. **Use Project Pages** instead (site will be at `https://okpainmo.github.io/repository-name/`)

## 🚀 How to Deploy

### First-Time Setup

#### Step 1: Ensure Repository Name is Correct

Your repository must be named `Okpainmo.github.io`. To rename:

1. Go to your repository on GitHub
2. Click **Settings**
3. Under "Repository name", rename to `Okpainmo.github.io`
4. Click **Rename**

#### Step 2: Enable GitHub Pages

1. In your repository, go to **Settings** → **Pages**
2. Under "Build and deployment":
   - **Source**: Select **"GitHub Actions"**
   - (Do NOT select "Deploy from a branch")

### Deploying Changes

Simply push to the `main` branch:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

The workflow will automatically:

1. Install dependencies with Bun
2. Build your Next.js app
3. Deploy to GitHub Pages

## 📋 Workflow Details

### Build Job

- **OS**: Ubuntu Latest
- **Package Manager**: Bun (latest)
- **Build Command**: `bun run build`
- **Output Directory**: `./out`

### Deploy Job

- Runs after successful build
- Uses official GitHub Pages deployment action
- Deploys to `github-pages` environment

## 🔍 Monitoring Deployments

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. You'll see all workflow runs
4. Click on any run to see detailed logs

## 🌐 Your Site URL

Once deployed, your site will be available at:

```
https://okpainmo.github.io/
```

**Note**: First deployment may take 5-10 minutes to propagate.

## ⚙️ Local Testing

Test the production build locally:

```bash
# Build the static site
bun run build

# The output will be in the ./out directory
# You can serve it locally with any static server, e.g.:
npx serve out
```

## 📝 Important Notes

1. **Repository Name**: MUST be `Okpainmo.github.io` for root domain deployment
   - Case-sensitive: Use exact capitalization as shown

2. **Branch**: The workflow triggers on `main` branch
   - If you use a different default branch (e.g., `master`), update line 6 in `publish.yaml`

3. **Build Time**: First build may take 2-3 minutes
   - Subsequent builds will be faster due to caching

4. **Image Optimization**: Next.js image optimization is disabled for static export
   - Use `unoptimized` prop on `<Image>` components or standard `<img>` tags

5. **One User Pages Site Per Account**: You can only have one `username.github.io` repository
   - Other projects will use Project Pages (with subdirectories)

## 🐛 Troubleshooting

### If site shows 404:

1. Verify repository name is exactly `Okpainmo.github.io`
2. Check that GitHub Pages is enabled in Settings → Pages
3. Ensure "Source" is set to "GitHub Actions"
4. Wait 5-10 minutes for DNS propagation

### If deployment fails:

1. Check the Actions tab for error logs
2. Verify the `main` branch exists and has commits
3. Ensure `bun.lock` file is committed to the repository

### If assets don't load:

1. Check that `.nojekyll` file exists in `public/` directory
2. Verify all asset paths are relative (no hardcoded domains)
3. Use Next.js `<Image>` component with `unoptimized` prop

### If build fails locally:

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules bun.lock
bun install

# Try building again
bun run build
```

## 📦 Project Structure

```
Okpainmo.github.io/              # Repository name (important!)
├── .github/
│   └── workflows/
│       └── publish.yaml         # GitHub Actions workflow
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   └── globals.css             # Global styles
├── public/
│   ├── .nojekyll               # Prevents Jekyll processing
│   └── ...                     # Static assets
├── next.config.ts              # Next.js configuration
├── package.json                # Dependencies
└── tsconfig.json               # TypeScript configuration
```

## ✨ Next Steps

1. **Verify Repository Name**: Ensure it's `Okpainmo.github.io`
2. **Customize Content**: Edit `app/page.tsx` to create your portfolio
3. **Update Metadata**: Modify `app/layout.tsx` for SEO (title, description)
4. **Add Pages**: Create new routes in the `app/` directory
5. **Style**: Update `app/globals.css` or add Tailwind utilities
6. **Deploy**: Push to `main` branch and watch it deploy automatically!

---

**Status**: ✅ Ready to deploy to GitHub Pages (User Pages)
**Build Test**: ✅ Passed (local build successful)
**Workflow**: ✅ Configured and ready
**Site URL**: `https://okpainmo.github.io/`
