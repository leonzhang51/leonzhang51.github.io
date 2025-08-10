# GitHub Pages Deployment Checklist

## Prerequisites for GitHub Pages Deployment

### 1. Repository Settings
- [ ] Repository is public (or GitHub Pro/Team for private repos)
- [ ] GitHub Pages is enabled in repository settings
- [ ] Source is set to "GitHub Actions" (not "Deploy from a branch")

### 2. GitHub Actions Permissions
- [ ] Actions have write permissions to repository
- [ ] Pages deployment permissions are enabled

### 3. Environment Setup
- [ ] `github-pages` environment exists (auto-created on first deployment)
- [ ] Environment protection rules are configured if needed

## How to Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Save the settings

## Troubleshooting Common Issues

### Error: "Missing environment"
- Ensure the workflow has the `environment` section configured
- Check that GitHub Pages is enabled in repository settings

### Error: "Permission denied"
- Verify repository permissions for GitHub Actions
- Check if the repository is public or has proper GitHub plan

### Build Failures
- Check Node.js version compatibility (using Node.js 20)
- Verify all dependencies are properly installed
- Ensure PostCSS and Tailwind configurations are correct

## Deployment URL
Once deployed successfully, your site will be available at:
`https://leonzhang51.github.io`

## Manual Deployment (Alternative)
If GitHub Actions deployment fails, you can deploy manually:
```bash
npm run build
npm run deploy
```
