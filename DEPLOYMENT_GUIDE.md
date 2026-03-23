# 🚀 Website Deployment Guide

## Your Website URL
Once deployed, your portfolio will be live at:

### **https://princekumar0405.github.io/prince-portfolio/**

---

## Quick Deployment Steps (5 minutes)

### Step 1: Merge Your Branch to Main

Your portfolio is currently on the `claude/add-experience-summary` branch. You need to merge it to `main` to trigger deployment.

**Option A: Via GitHub Web Interface (Easiest)**
1. Go to: https://github.com/PRINCEKUMAR0405/prince-portfolio
2. Click on "Pull requests" tab
3. Click "New pull request"
4. Set base: `main` and compare: `claude/add-experience-summary`
5. Click "Create pull request"
6. Add title: "Deploy portfolio website"
7. Click "Create pull request" again
8. Click "Merge pull request"
9. Click "Confirm merge"

**Option B: Via Command Line**
```bash
# Switch to main branch (create if doesn't exist)
git checkout -b main || git checkout main

# Merge your branch
git merge claude/add-experience-summary

# Push to GitHub
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository: https://github.com/PRINCEKUMAR0405/prince-portfolio
2. Click **Settings** tab (top right)
3. Scroll down to **Pages** in the left sidebar
4. Under "Source":
   - Select **Deploy from a branch**
   - Branch: **main** (or master)
   - Folder: **/ (root)**
5. Click **Save**

### Step 3: Wait for Deployment (2-3 minutes)

1. Go to the **Actions** tab in your repository
2. You'll see a workflow running called "Deploy to GitHub Pages"
3. Wait for the green checkmark ✅
4. Your site will be live!

### Step 4: Visit Your Website

Open: **https://princekumar0405.github.io/prince-portfolio/**

---

## Verification Checklist

After deployment, verify:
- [ ] Website loads correctly
- [ ] All sections are visible
- [ ] Contact information is correct
- [ ] Links work (LinkedIn, GitHub, Email)
- [ ] Phone number is clickable
- [ ] Navigation menu works
- [ ] Mobile responsive design works

---

## Troubleshooting

### Site Not Loading?
1. Check Actions tab for deployment errors
2. Ensure GitHub Pages is enabled in Settings → Pages
3. Wait 5-10 minutes after first deployment

### 404 Error?
1. Verify the URL is: https://princekumar0405.github.io/prince-portfolio/
2. Check that files are on the `main` branch
3. Ensure GitHub Pages is set to deploy from `main` branch

### Changes Not Showing?
1. Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)
2. Clear browser cache
3. Check Actions tab to confirm latest deployment succeeded

---

## What Happens Next?

Once deployed:
1. ✅ Your website is live at the URL above
2. ✅ Every push to `main` branch auto-deploys updates
3. ✅ GitHub Actions handles deployment automatically
4. ✅ HTTPS is automatically enabled

---

## Current Status

- ✅ Portfolio code is ready
- ✅ Contact information updated
- ✅ GitHub Actions workflow configured
- ⏳ Waiting for merge to main branch
- ⏳ Waiting for GitHub Pages to be enabled

---

## Need Help?

If you encounter any issues:
1. Check the [README.md](README.md) for full documentation
2. Review [SETUP.md](SETUP.md) for configuration details
3. Open an issue on GitHub

---

**Last Updated:** 2026-03-22
