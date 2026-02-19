# DWEBPIXEL - Professional IT Company Website

A modern, premium IT company website built with Vue 3, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional IT company aesthetic
- **Responsive**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Theme toggle with smooth transitions
- **Animated Components**: Hover effects and smooth animations
- **SEO Optimized**: Proper meta tags and structured content
- **Fast Performance**: Optimized build with Vite

## 🛠️ Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Vue Router** - Official router for Vue.js
- **Netlify** - Hosting and deployment platform

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd dweb
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🚀 Deployment to Netlify

### Option 1: Git Integration (Recommended)

1. **Connect Repository**:
   - Go to [Netlify](https://netlify.com)
   - Sign up/Login to your account
   - Click "New site from Git"
   - Connect your Git repository (GitHub, GitLab, or Bitbucket)

2. **Configure Build Settings**:
   - **Branch**: `main` (or your default branch)
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

3. **Environment Variables** (if needed):
   - Add any required environment variables in Netlify dashboard

4. **Deploy**:
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site

### Option 2: Manual Deploy

1. **Build locally**:
```bash
npm run build
```

2. **Upload to Netlify**:
   - Go to [Netlify](https://netlify.com)
   - Drag and drop the `dist` folder to the deployment area
   - Your site will be live instantly

## 🎨 Customization

### Colors
- Primary: `#ec5b13` (Orange)
- Background Dark: `#0a0a0a`
- Background Light: `#f8f6f6`

### Fonts
- Primary: 'Public Sans' (Google Fonts)
- Icons: 'Material Symbols Outlined'

## 📱 Components

- **Navbar**: Sticky navigation with logo and menu
- **HeroSection**: Main landing area with CTA buttons
- **Services**: Animated service cards with hover effects
- **About**: Company information and stats
- **Portfolio**: Project showcase
- **Footer**: Contact info and social links

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Project Structure

```
src/
├── components/
│   ├── layout/
│   │   └── Navbar.vue
│   ├── sections/
│   │   ├── HeroSection.vue
│   │   └── ...
│   └── ...
├── views/
│   └── Home.vue
├── router/
│   └── index.js
├── composables/
│   └── useTheme.js
└── assets/
    └── css/
        └── main.css
```

## 📄 License

This project is private and proprietary to DWEBPIXEL.

## 🤝 Support

For support or questions, contact the development team.