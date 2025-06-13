# AnimeLens - AI-Powered Anime Recognition Research Platform

## Project Overview

**AnimeLens** is a modern web application that uses artificial intelligence to identify anime series, characters, and episodes from uploaded screenshots. Built with cutting-edge technologies for optimal performance and user experience.

## Features

- 🤖 **AI-Powered Anime Recognition Research Platform**: Advanced machine learning algorithms for accurate anime identification
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI/UX**: Beautiful interface with smooth animations and intuitive navigation
- 📊 **Detailed Results**: Comprehensive anime information including synopsis, characters, and external links
- 🔒 **Privacy-Focused**: Automatic image deletion within 24 hours

## How to run this project locally?

### Prerequisites

Make sure you have Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation Steps

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd AnimeLens

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`

### Available Scripts

```sh
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Build for development (with source maps)
npm run build:dev

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Technology Stack

This project is built with modern web technologies:

- **⚡ Vite** - Fast build tool and development server
- **🔷 TypeScript** - Type-safe JavaScript development
- **⚛️ React 18** - Modern React with hooks and functional components
- **🎨 Tailwind CSS** - Utility-first CSS framework
- **🧩 shadcn-ui** - High-quality, accessible UI components
- **🛣️ React Router** - Client-side routing
- **🔄 TanStack Query** - Data fetching and state management
- **📝 React Hook Form** - Form handling with validation
- **🎯 Zod** - Schema validation
- **🎭 Lucide React** - Beautiful icons

## Project Structure

```
AnimeLens/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # shadcn-ui components
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── pages/            # Application pages
│   │   ├── Homepage.tsx
│   │   ├── DetectPage.tsx
│   │   ├── ResultPage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── PrivacyPage.tsx
│   │   └── NotFound.tsx
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   └── App.tsx           # Main application component
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind configuration
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript configuration
```

## Deployment

### Option 1: Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on every push

### Option 2: Vercel
1. Import your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### Option 3: Manual Deployment
```sh
# Build the project
npm run build

# The dist/ folder contains the production build
# Upload the contents to your web server
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact us through the [Contact Page](src/pages/ContactPage.tsx)

---

**AnimeLens** - Discover anime instantly with AI-powered recognition technology! 🚀

