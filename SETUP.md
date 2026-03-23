# Quick Setup Guide

This guide will help you get your portfolio website up and running in 5 minutes!

## ✅ Step 1: Enable GitHub Pages

1. Go to your repository: https://github.com/PRINCEKUMAR0405/prince-portfolio
2. Click on **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under "Source", select:
   - Branch: `main` (or `claude/add-experience-summary` if you want to deploy this branch)
   - Folder: `/ (root)`
5. Click **Save**

Your website will be live at: `https://PRINCEKUMAR0405.github.io/prince-portfolio/`

⏱️ **Wait 2-3 minutes** for the first deployment to complete.

## ✅ Step 2: Set Up Google Analytics (Optional but Recommended)

1. Go to [Google Analytics](https://analytics.google.com)
2. Create a new GA4 property
3. Get your Measurement ID (looks like `G-XXXXXXXXXX`)
4. Replace `G-XXXXXXXXXX` in these files:
   - `index.html` (line 17)
   - `dashboard.html` (line 14)
5. Commit and push the changes

## ✅ Step 3: Set Up Contact Form

1. Go to [Formspree](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Copy your form endpoint (looks like `https://formspree.io/f/xyzabc123`)
5. Update `index.html` line 1013:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
6. Commit and push the changes

## ✅ Step 4: Update Personal Information

Update these details in `index.html`:

### Email Address
**Line 1024 and 1091:**
```html
<a href="mailto:YOUR_EMAIL@example.com">YOUR_EMAIL@example.com</a>
```

### LinkedIn Profile
**Line 1030 and 1097:**
```html
<a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank">linkedin.com/in/YOUR_PROFILE</a>
```

### Social Links (Footer)
**Lines 1108-1110:**
```html
<a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank">...</a>
<a href="https://github.com/PRINCEKUMAR0405" target="_blank">...</a>
<a href="mailto:YOUR_EMAIL@example.com">...</a>
```

## ✅ Step 5: Test Your Website

1. Visit your live website
2. Test all sections:
   - [ ] Navigation works smoothly
   - [ ] All links work correctly
   - [ ] Contact form submits successfully
   - [ ] Responsive on mobile devices
   - [ ] Analytics dashboard at `/dashboard.html`

## 🎨 Customization Tips

### Change Colors
Edit `css/style.css` lines 9-17 (CSS variables)

### Change Content
Edit `index.html` - all content is clearly structured by section

### Add Custom Domain
1. Create a file named `CNAME` in the root directory
2. Add your domain (e.g., `princekumar.com`)
3. Configure DNS with your domain provider
4. Update GitHub Pages settings

## 🐛 Common Issues

### Website not loading?
- Check GitHub Actions tab for deployment status
- Ensure GitHub Pages is enabled in repository settings
- Wait a few minutes after enabling Pages

### Analytics not working?
- Verify you replaced `G-XXXXXXXXXX` with actual ID
- Wait 24-48 hours for data to appear in Google Analytics
- Check browser console for errors

### Contact form not sending?
- Verify Formspree form ID is correct
- Check that form method is `POST`
- Test with your email to verify

## 📚 Next Steps

1. **Customize Content**: Update all text to match your preferences
2. **Add Images**: Add profile photo or project screenshots
3. **Share**: Share your portfolio on LinkedIn, Twitter, etc.
4. **Monitor**: Check Google Analytics weekly
5. **Update**: Keep adding new projects and achievements

## 🆘 Need Help?

- Read the full [README.md](README.md)
- Check [GitHub Issues](https://github.com/PRINCEKUMAR0405/prince-portfolio/issues)
- Contact: prince.kumar@example.com

---

**Ready to Deploy?** Follow Step 1 above and your website will be live in minutes! 🚀
