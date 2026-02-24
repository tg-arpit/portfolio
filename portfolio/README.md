# 🚀 Arpit Babu's Portfolio

A professional, modern portfolio website showcasing AI/ML projects, data analytics skills, and expertise in Python, SQL, Power BI, and Tableau.

## 📸 Features

✨ **Modern Design**
- Custom animated cursor with smooth interactions
- Smooth scroll animations and reveal effects
- Professional dark/light color scheme
- Fully responsive on all devices

🎯 **Interactive Elements**
- Preloader animation
- Parallax hero section
- Smooth navigation with active link indicators
- Interactive skill sliders
- Contact form with validation

📊 **Project Showcase**
- Featured Financial Analytics Dashboard project
- Multiple project cards with descriptions
- Technology tags and links to GitHub
- Client testimonials section

🎨 **Design System**
- CSS variables for easy customization
- Organized component structure
- Semantic HTML5 markup
- Accessible form controls

## 📁 Project Structure

```
portfolio-repo/
├── index.html                          # Main portfolio homepage
├── assets/
│   ├── css/
│   │   └── style.css                  # Complete stylesheet
│   ├── js/
│   │   └── main.js                    # Interactive features
│   └── fonts/                          # (Optional font files)
├── projects/
│   └── financial-dashboard.html       # Featured project showcase
├── README.md                           # This file
├── .gitignore                          # Git ignore rules
├── LICENSE                             # MIT License
└── DEPLOYMENT_GUIDE.md                 # Deployment instructions
```

## 🛠️ Tech Stack

**Frontend:**
- HTML5 (Semantic markup)
- CSS3 (Custom properties, Grid, Flexbox)
- JavaScript (Vanilla - no dependencies)
- Font Awesome 6.5.0 (Icons)
- Google Fonts (Fraunces, Syne, DM Mono)

**No Build Tools Required:**
- Fully static website
- Works with any web server
- Can be deployed anywhere (GitHub Pages, Netlify, Vercel, etc.)

## 🚀 Quick Start

### 1. **Local Development**

Clone the repository:
```bash
git clone https://github.com/tg-arpit/portfolio.git
cd portfolio
```

Open in browser:
```bash
# Simply open index.html in your web browser
open index.html  # macOS
start index.html # Windows
```

Or use a local server:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (http-server)
npx http-server
```

Then visit: `http://localhost:8000`

### 2. **Customization**

Edit `index.html` to:
- Change your name and title
- Update project descriptions
- Modify email and social links
- Customize testimonials

Edit `assets/css/style.css` to:
- Change color scheme (CSS variables at top)
- Adjust typography
- Modify spacing and layouts
- Add custom animations

### 3. **Deployment**

#### GitHub Pages (FREE)
```bash
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

Then enable GitHub Pages in Settings → Pages

#### Netlify (FREE)
1. Go to [netlify.com](https://netlify.com)
2. Click "Deploy" → "Deploy manually"
3. Drag your `portfolio-repo` folder
4. Done! Your site is live

#### Vercel (FREE)
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New..." → "Project"
3. Upload your repository
4. Click Deploy

## 📝 Content Sections

### Hero Section
- Main headline and description
- Call-to-action buttons
- Animated background elements
- Scroll indicator

### About Section
- Profile portrait (SVG)
- Education timeline
- Key qualifications
- Professional bio

### Skills Section
- 6 skill categories with proficiency levels
- Organized in grid layout
- Dark themed background

### Projects Section
- **Featured Project**: Financial Analytics Dashboard
- 3 major project cards with descriptions
- 4 additional small project cards
- Links to GitHub repositories

### Testimonials Section
- 3 client testimonials with ratings
- Avatar and role information
- Dark themed cards

### Contact Section
- Contact information (email, location)
- Social media links
- Contact form with validation
- Responsive layout

### Footer
- Copyright information
- Quick links

## 🎨 Customization Guide

### Change Color Scheme

Edit `:root` in `assets/css/style.css`:

```css
:root {
  --ink: #0e0e0e;           /* Dark background */
  --paper: #f2ede6;         /* Light background */
  --accent: #e8572a;        /* Primary accent color */
  --green: #2d6a4f;         /* Success color */
  /* ... more variables ... */
}
```

### Update Your Name

Search for "Arpit Babu" in `index.html` and replace with your name.

### Change Social Links

Update these in the contact section:
```html
<a href="https://linkedin.com/in/your-profile" target="_blank">
<a href="https://github.com/your-username" target="_blank">
<a href="https://instagram.com/your-profile" target="_blank">
```

### Customize Testimonials

Edit the testimonial cards in the section:
```html
<div class="testi-card reveal">
  <div class="testi-quote-text">"Your testimonial here..."</div>
  <div class="testi-person">
    <div class="testi-av av1">YOUR INITIALS</div>
    <div>
      <div class="testi-name">Person Name</div>
      <div class="testi-role">Title · Company</div>
    </div>
  </div>
</div>
```

## 📱 Responsive Design

- **Mobile**: < 480px
- **Tablet**: 480px - 1100px
- **Desktop**: > 1100px

All sections adapt automatically with CSS media queries.

## ⚡ Performance

- **Page Load Time**: < 300ms (on modern networks)
- **Image Optimization**: All graphics are SVG (scalable)
- **No External Dependencies**: Everything loads from CDN
- **Minified CSS & JS**: Ready for production

## 🔒 SEO & Accessibility

- Semantic HTML5 structure
- Meta tags for social sharing
- Alt text for all visual elements
- Keyboard navigation support
- WCAG 2.1 compliant color contrasts

## 📦 File Sizes

- `index.html`: ~45 KB
- `assets/css/style.css`: ~38 KB
- `assets/js/main.js`: ~8 KB
- **Total**: ~91 KB (gzipped: ~25 KB)

## 🐛 Troubleshooting

### Issue: Links not working
**Solution**: Ensure all files are in the correct folder structure

### Issue: Styles not loading
**Solution**: Clear browser cache (Ctrl+Shift+Delete) and refresh

### Issue: Custom cursor not working
**Solution**: Use a modern browser (Chrome, Firefox, Safari, Edge)

## 📜 License

MIT License - Feel free to use this portfolio for your own projects!

## 🤝 Contributing

Want to improve this portfolio template?
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Contact

- **Email**: [your-email@example.com]
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]

## 🎯 Future Enhancements

- [ ] Blog section
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] CMS integration
- [ ] Email notification for form submissions
- [ ] Analytics integration

## 📚 Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Font Awesome Icons](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)

---

**Built with ❤️ by Arpit Babu**  
*Last Updated: February 24, 2025*
