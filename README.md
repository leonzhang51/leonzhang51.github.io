# Leon Zhang Portfolio

A modern, responsive portfolio website built with React 19, Tailwind CSS, and React Router. This portfolio showcases UX design projects, skills, and professional experience.

## 🚀 Features

- **Modern Tech Stack**: Built with React 19, Tailwind CSS, and React Router
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Intersection Observer API for scroll-triggered animations
- **Interactive Components**: Hover effects, transitions, and micro-interactions
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Optimized images and code splitting
- **GitHub Pages Ready**: Automated deployment with GitHub Actions

## 🛠️ Technologies Used

- **Frontend**: React 19, JavaScript (ES6+)
- **Styling**: Tailwind CSS, Custom CSS
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Deployment**: GitHub Pages with GitHub Actions
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Playfair Display, Raleway, Inter)

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/leonzhang51/leonzhang51.github.io.git
cd leonzhang51.github.io
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 🏗️ Build

To build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. The site will be available at `https://leonzhang51.github.io`

### Manual Deployment

You can also deploy manually using:

```bash
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Footer with social links
│   ├── HeroSection.jsx # Landing page hero
│   ├── AboutSection.jsx # About me section
│   ├── ProjectsSection.jsx # Projects grid
│   ├── OtherUISection.jsx # UI gallery
│   ├── ProgressBar.jsx # Scroll progress indicator
│   └── ScrollToTop.jsx # Back to top button
├── pages/              # Page components
│   ├── Home.jsx        # Home page
│   └── ProjectDetail.jsx # Project detail pages
├── utils/              # Utility functions and data
│   └── projectsData.js # Project information
├── assets/             # Static assets
│   ├── images/         # Images and photos
│   └── icons/          # SVG icons
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Design System

The portfolio uses a consistent design system with:

- **Primary Color**: #3586ff (Blue)
- **Typography**: Playfair Display (headings), Raleway (body), Inter (UI)
- **Spacing**: Consistent spacing scale using Tailwind CSS
- **Animations**: Smooth transitions and hover effects
- **Responsive Breakpoints**: Mobile-first approach

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Large Desktop: > 1200px

## 🔧 Configuration

### Tailwind CSS

The project uses a custom Tailwind configuration with:

- Custom color palette
- Extended font families
- Custom animations and keyframes
- Responsive design utilities

### Vite Configuration

Optimized for GitHub Pages deployment with proper base path configuration.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Leon Zhang**

- Portfolio: [https://leonzhang51.github.io](https://leonzhang51.github.io)
- LinkedIn: [https://www.linkedin.com/in/leon-zhang-design/](https://www.linkedin.com/in/leon-zhang-design/)
- GitHub: [https://github.com/leonzhang51](https://github.com/leonzhang51)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/leonzhang51/leonzhang51.github.io/issues).

## ⭐ Show your support

Give a ⭐️ if this project helped you!
