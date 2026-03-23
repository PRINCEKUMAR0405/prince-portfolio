# Prince Kumar - Professional Portfolio Website

> Building at the intersection of Economics, Technology, and Sustainability

[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-success)](https://princekumar0405.github.io/prince-portfolio/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## 🌟 Overview

This is a modern, professional portfolio website showcasing Prince Kumar's journey, projects, research, and achievements. The website features a clean dark + green + white theme, smooth animations, responsive design, and integrated analytics.

## ✨ Features

### 🎨 Design & UI
- **Modern Dark Theme**: Professional dark + green + white color scheme
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Scroll-triggered animations and transitions
- **Interactive Navigation**: Active link highlighting and smooth scrolling
- **Accessibility**: Keyboard navigation and semantic HTML

### 📊 Analytics
- **Google Analytics Integration**: Track visitors, page views, and user behavior
- **Custom Dashboard**: Real-time analytics dashboard with charts and graphs
- **Local Storage Tracking**: Client-side visitor tracking (last 100 visitors)
- **Export Functionality**: Download analytics data as JSON

### 📝 Content Sections
1. **Hero Section**: Compelling introduction with call-to-action buttons
2. **About Me**: Comprehensive background and vision
3. **Journey Timeline**: Year-wise progression from 2021 to present
4. **Leadership & Impact**: Key leadership roles and measurable impact
5. **Projects & Research**: Detailed project cards with methodology and impact
6. **Experience**: Community work and programs
7. **Achievements**: Awards and recognitions
8. **Skills**: Technical, analytical, research, and soft skills
9. **Future Vision**: Career goals and aspirations
10. **Contact**: Contact form and social links

### 🛠️ Technical Features
- **Clean Code**: Well-structured HTML, CSS, and JavaScript
- **SEO Optimized**: Meta tags, semantic HTML, and proper heading structure
- **Performance**: Lazy loading, optimized assets, minimal dependencies
- **Cross-Browser**: Compatible with all modern browsers
- **No Framework Dependencies**: Pure HTML/CSS/JS (except Chart.js for dashboard)

## 🚀 Quick Start

### Prerequisites
- Git installed on your machine
- A GitHub account
- Basic knowledge of HTML/CSS/JS (optional for customization)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PRINCEKUMAR0405/prince-portfolio.git
   cd prince-portfolio
   ```

2. **Open locally**
   - Simply open `index.html` in your browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000

     # Using Node.js
     npx http-server
     ```

3. **View the website**
   - Open `http://localhost:8000` in your browser
   - Navigate to `/dashboard.html` for analytics

## 📦 Project Structure

```
prince-portfolio/
├── index.html              # Main portfolio page
├── dashboard.html          # Analytics dashboard
├── css/
│   ├── style.css          # Main stylesheet
│   └── dashboard.css      # Dashboard-specific styles
├── js/
│   ├── main.js           # Main JavaScript
│   └── dashboard.js      # Dashboard JavaScript
└── README.md             # This file
```

## ⚙️ Configuration

### 1. Google Analytics Setup

1. Create a Google Analytics 4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Replace the placeholder in both files:
   - `index.html` (line 17)
   - `dashboard.html` (line 14)
   ```javascript
   gtag('config', 'G-XXXXXXXXXX'); // Replace with your actual ID
   ```

### 2. Contact Form Setup

The contact form uses Formspree. To set it up:

1. Go to [formspree.io](https://formspree.io) and create an account
2. Create a new form and get your form ID
3. Update `index.html` (line 1013):
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### 3. Personal Information

Update the following in `index.html`:
- **Email**: Line 1024 (replace `prince.kumar@example.com`)
- **LinkedIn**: Line 1030 (replace with your LinkedIn URL)
- **GitHub**: Line 1036 (already set to `PRINCEKUMAR0405`)

## 🌐 Deployment

### Option 1: GitHub Pages (Recommended)

1. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Source: Select "Deploy from a branch"
   - Branch: Select `main` or your deployment branch
   - Folder: Select `/ (root)`
   - Click "Save"

2. **Access your website**
   - Your site will be available at: `https://PRINCEKUMAR0405.github.io/prince-portfolio/`
   - Wait 2-3 minutes for the first deployment

3. **Custom Domain (Optional)**
   - Add a `CNAME` file with your domain
   - Configure DNS settings with your domain provider
   - Update GitHub Pages settings with your custom domain

### Option 2: Netlify

1. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Build settings: Leave empty (static site)
   - Click "Deploy"

2. **Configure**
   - Your site will be live at a Netlify subdomain
   - You can add a custom domain in site settings

### Option 3: Vercel

1. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect settings
   - Click "Deploy"

## 📊 Analytics Dashboard

The portfolio includes a custom analytics dashboard at `/dashboard.html`:

### Features:
- **Overview Stats**: Total page views, unique visitors, last visit, referrers
- **Charts**:
  - Visitors over time (line chart)
  - Device types (doughnut chart)
  - Traffic sources (bar chart)
  - Browser distribution (pie chart)
- **Visitor Table**: Detailed information about recent visitors
- **Data Export**: Download analytics data as JSON
- **Data Management**: Clear analytics data

### Usage:
1. Visit your deployed site
2. Navigate to `/dashboard.html`
3. View real-time analytics from localStorage
4. For comprehensive analytics, check Google Analytics

**Note**: The dashboard uses localStorage, so data is browser-specific and limited to the last 100 visitors. For production analytics, use Google Analytics.

## 🎨 Customization

### Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --color-primary: #00ff88;        /* Main green color */
    --color-primary-dark: #00cc6f;   /* Darker green */
    --color-primary-light: #66ffbb;  /* Lighter green */
    --color-secondary: #0a0e27;      /* Dark blue */
    --color-dark: #0d1117;           /* Background */
}
```

### Fonts

Current fonts: Inter (body) and Poppins (headings)

To change fonts, update Google Fonts import in `index.html` and CSS variables:
```css
--font-primary: 'Your Font', sans-serif;
--font-heading: 'Your Heading Font', sans-serif;
```

### Content

All content is in `index.html`. Simply search for the section you want to edit and update the HTML.

## 🐛 Troubleshooting

### Analytics not working?
- Ensure you've replaced `G-XXXXXXXXXX` with your actual Google Analytics ID
- Check browser console for errors
- Wait 24-48 hours for Google Analytics data to appear

### Contact form not working?
- Verify you've set up Formspree and updated the form action URL
- Check that the form method is `POST`
- Ensure JavaScript is enabled in the browser

### Charts not displaying?
- Ensure Chart.js is loading properly (check console)
- Visit the main portfolio page first to generate visitor data
- Try refreshing the dashboard

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)
- ⚠️ Internet Explorer (not supported)

## 🔒 Privacy

This website respects user privacy:
- **Google Analytics**: Tracks anonymous usage data
- **LocalStorage**: Stores visitor data only in your browser
- **No Cookies**: No authentication or tracking cookies
- **No Backend**: Pure frontend, no server-side data collection

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 👤 Author

**Prince Kumar**

- GitHub: [@PRINCEKUMAR0405](https://github.com/PRINCEKUMAR0405)
- LinkedIn: [Prince Kumar](https://linkedin.com/in/princekumar)
- Email: prince.kumar@example.com

## 🙏 Acknowledgments

- **Google Fonts**: Inter and Poppins fonts
- **Font Awesome**: Icons
- **Chart.js**: Analytics charts
- **Formspree**: Contact form handling
- **GitHub Pages**: Hosting

## 📈 Future Enhancements

Planned features:
- [ ] Blog section with markdown support
- [ ] Project filtering and search
- [ ] Dark/light theme toggle
- [ ] Multiple language support
- [ ] Resume download functionality
- [ ] Testimonials section
- [ ] Integration with LinkedIn API

## 📞 Support

If you encounter any issues or have questions:
1. Check the [Troubleshooting](#-troubleshooting) section
2. Search [existing issues](https://github.com/PRINCEKUMAR0405/prince-portfolio/issues)
3. Create a [new issue](https://github.com/PRINCEKUMAR0405/prince-portfolio/issues/new)

---

**Made with ❤️ by Prince Kumar**

*Building at the intersection of Economics, Technology, and Sustainability*
