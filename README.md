# 🚀 Modern Portfolio Website

A fully responsive, production-ready portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **ShadCN UI**. Perfect for developers, designers, and creatives who want a professional online presence.

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- ⚡ **Next.js 14 App Router** - Latest React framework with server components
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧱 **ShadCN UI** - Beautiful, accessible component library
- 🎭 **Framer Motion** - Smooth animations and transitions
- 🌗 **Dark Mode** - Automatic theme switching with next-themes
- 📱 **Fully Responsive** - Mobile-first design
- 🔍 **SEO Optimized** - Meta tags, sitemap, and robots.txt
- 📝 **MDX Blog** - Write blog posts in Markdown with React components
- 🎯 **TypeScript** - Full type safety
- 📦 **Static Export** - Deploy anywhere (GitHub Pages, Netlify, Vercel)
- 🎉 **No Backend Required** - Runs completely client/static-side
- ⚙️ **Fully Customizable** - Easy configuration through config files

## 📁 Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── about/               # About page
│   ├── blog/                # Blog listing & posts
│   ├── contact/             # Contact page
│   ├── experience/          # Experience page
│   ├── projects/            # Projects listing & details
│   ├── sitemap.ts           # Dynamic sitemap
│   └── robots.txt           # SEO robots file
├── components/              # React components
│   ├── ui/                  # ShadCN UI components
│   ├── layout/              # Layout components (Navbar, Footer)
│   ├── sections/            # Page sections
│   ├── animations/          # Framer Motion wrappers
│   └── shared/              # Shared components
├── config/                  # Configuration files
│   └── siteConfig.ts        # Main site configuration
├── content/                 # Content files
│   └── blogs/               # MDX blog posts
├── lib/                     # Utility functions
│   ├── utils.ts             # General utilities
│   ├── seo.ts               # SEO helpers
│   └── mdx.ts               # MDX processing
├── styles/                  # Global styles
│   └── globals.css          # Tailwind & custom CSS
└── types/                   # TypeScript types
    ├── project.ts
    ├── blog.ts
    ├── experience.ts
    └── index.ts
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization Guide

### 1. Update Site Information

Edit `src/config/siteConfig.ts`:

```typescript
export const siteConfig: SiteConfig = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description",
  url: "https://yourwebsite.com",
  ogImage: "https://yourwebsite.com/og-image.png",
  links: {
    twitter: "https://twitter.com/yourusername",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "your.email@example.com",
  },
};
```

### 2. Update Navigation

Modify the navigation items in `src/config/siteConfig.ts`:

```typescript
export const navConfig: NavConfig = {
  mainNav: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    // Add or remove items as needed
  ],
};
```

### 3. Add Your Projects

Update projects in `src/config/siteConfig.ts`:

```typescript
export const projectsConfig: Project[] = [
  {
    slug: "project-slug",
    title: "Project Title",
    description: "Short description",
    longDescription: "Detailed description...",
    image: "/projects/image.jpg",
    tags: ["React", "TypeScript", "Next.js"],
    github: "https://github.com/yourusername/project",
    demo: "https://project-demo.com",
    featured: true,
    startDate: "2024-01-15",
    endDate: "2024-06-30",
  },
  // Add more projects...
];
```

### 4. Update Work Experience

Modify experience data in `src/config/siteConfig.ts`:

```typescript
export const experienceConfig: Experience[] = [
  {
    id: "1",
    company: "Company Name",
    position: "Your Position",
    location: "Location",
    startDate: "2022-06",
    endDate: "2024-01",
    current: false,
    description: "Brief description",
    responsibilities: [
      "Responsibility 1",
      "Responsibility 2",
    ],
    technologies: ["Tech1", "Tech2"],
  },
  // Add more experiences...
];
```

### 5. Update Skills

Edit skills in `src/config/siteConfig.ts`:

```typescript
export const skillsConfig: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      // Add more skills...
    ],
  },
  // Add more categories...
];
```

### 6. Add Blog Posts

Create MDX files in `src/content/blogs/`:

```markdown
---
title: "Your Blog Post Title"
description: "Brief description"
date: "2024-01-15"
author: "Your Name"
tags: ["Tag1", "Tag2"]
published: true
---

# Your Blog Post

Your content here...
```

### 7. Customize Theme Colors

Edit `src/styles/globals.css` to change theme colors:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96.1%;
  /* Modify HSL values for your brand colors */
}
```

### 8. Update Images

Replace placeholder images:
- `/public/profile.jpg` - Your profile picture
- `/public/og-image.png` - OpenGraph image (1200x630px)
- `/public/favicon.ico` - Favicon
- `/public/projects/` - Project images

## 📝 Adding Content

### Adding a New Project

1. Add project data to `src/config/siteConfig.ts`
2. Add project image to `/public/projects/`
3. The project will automatically appear on the projects page

### Adding a New Blog Post

1. Create a new `.mdx` file in `src/content/blogs/`
2. Add frontmatter with title, description, date, author, tags
3. Write your content in Markdown
4. Set `published: true` when ready

Example:

```mdx
---
title: "My New Post"
description: "Post description"
date: "2024-01-15"
author: "Your Name"
tags: ["Next.js", "React"]
published: true
---

# My New Post

Content goes here...
```

## 🌐 Deployment

### Deploy to GitHub Pages

1. **Update `next.config.js`**:

```javascript
const nextConfig = {
  output: 'export',
  basePath: '/your-repo-name',
  assetPrefix: '/your-repo-name/',
  images: {
    unoptimized: true,
  },
};
```

2. **Build the project**:

```bash
npm run build
```

3. **Deploy**:

The `out` folder contains your static site. Push it to GitHub Pages or use GitHub Actions.

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy (no configuration needed!)

### Deploy to Netlify

1. Push your code to GitHub
2. Connect the repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `out`

## 🎯 SEO Optimization

This portfolio is SEO-optimized with:

- ✅ Semantic HTML
- ✅ Meta tags (title, description)
- ✅ OpenGraph tags for social media
- ✅ Twitter Card tags
- ✅ Dynamic sitemap generation
- ✅ Robots.txt file
- ✅ Structured data (JSON-LD)
- ✅ Optimized images with next/image
- ✅ Fast page loads

### Update SEO Settings

Edit URLs and meta information in:
- `src/config/siteConfig.ts` - Base URL and site info
- `src/app/layout.tsx` - Global metadata
- `src/app/sitemap.ts` - Update base URL

## 🎨 Customizing Styles

### Tailwind Configuration

Modify `tailwind.config.ts` to customize:
- Colors
- Fonts
- Spacing
- Breakpoints
- Animations

### Component Styles

All components use Tailwind CSS classes. Edit component files directly to customize styling.

### Global Styles

Edit `src/styles/globals.css` for:
- CSS variables
- Custom utilities
- Global overrides

## 🔧 Advanced Customization

### Adding a New Page

1. Create a new folder in `src/app/`
2. Add `page.tsx` in that folder
3. Export a React component
4. Add to navigation in `src/config/siteConfig.ts`

Example:

```typescript
// src/app/services/page.tsx
export default function ServicesPage() {
  return <div>Services content</div>;
}
```

### Adding a New Section

1. Create component in `src/components/sections/`
2. Import and use in page files
3. Style with Tailwind CSS

### Custom Animations

Use Framer Motion wrappers in `src/components/animations/`:

```typescript
import { SlideUp } from "@/components/animations/slide-up";

<SlideUp delay={0.2}>
  <YourComponent />
</SlideUp>
```

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Content**: MDX
- **Theme**: next-themes

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💬 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Email: your.email@example.com
- Twitter: [@yourusername](https://twitter.com/yourusername)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN UI](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

Built with ❤️ using Next.js and TypeScript

**[View Demo](https://yourportfolio.com)** • **[Report Bug](https://github.com/yourusername/portfolio/issues)** • **[Request Feature](https://github.com/yourusername/portfolio/issues)**
