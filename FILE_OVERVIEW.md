# 📋 Project Files Overview

This document explains every file in your portfolio project.

## 📦 Configuration Files

### `package.json`
- Lists all dependencies (React, Next.js, TypeScript, etc.)
- Defines npm scripts (dev, build, start, lint)
- Project metadata

### `tsconfig.json`
- TypeScript configuration
- Path aliases (@/* points to src/*)
- Compiler options

### `next.config.js`
- Next.js configuration
- Static export settings for GitHub Pages
- Image optimization settings
- basePath for deployment

### `tailwind.config.ts`
- Tailwind CSS configuration
- Custom colors and theme system
- Dark mode settings
- Animation definitions

### `postcss.config.js`
- CSS processing configuration
- Enables Tailwind CSS

### `.eslintrc.json`
- ESLint configuration
- Code quality rules

## 🎨 Styles

### `src/styles/globals.css`
- Global styles
- Tailwind CSS imports
- CSS variables for themes
- Light/dark color schemes
- Custom scrollbar styles

## 🔧 Configuration

### `src/config/siteConfig.ts`
**THE MOST IMPORTANT FILE TO CUSTOMIZE**
Contains:
- Site metadata (name, title, description)
- Social links
- Navigation menu
- Hero section content
- About section content
- All projects data
- Work experience data
- Skills categories
- Contact information

## 📘 Type Definitions

### `src/types/index.ts`
- SiteConfig type
- SkillCategory type
- SocialLink type

### `src/types/project.ts`
- Project interface
- Defines project structure

### `src/types/blog.ts`
- BlogPost interface
- BlogFrontmatter interface

### `src/types/experience.ts`
- Experience interface
- Job history structure

### `src/types/navbar.ts`
- NavItem interface
- Navigation configuration

## 🛠 Utility Functions

### `src/lib/utils.ts`
- `cn()` - Combines class names
- `formatDate()` - Formats dates
- `readingTime()` - Calculates read time
- `slugify()` - Creates URL slugs

### `src/lib/seo.ts`
- `generateSEO()` - Creates metadata
- OpenGraph configuration
- Twitter card setup

### `src/lib/mdx.ts`
- `getAllBlogPosts()` - Gets all blog posts
- `getBlogPostBySlug()` - Gets single post
- `getAllBlogSlugs()` - Gets all slugs
- MDX file processing

## 🎨 UI Components

### `src/components/ui/button.tsx`
- Button component with variants
- Supports different sizes and styles

### `src/components/ui/card.tsx`
- Card component and subcomponents
- CardHeader, CardContent, CardFooter

### `src/components/ui/input.tsx`
- Input field component
- Form-ready with validation support

### `src/components/ui/textarea.tsx`
- Textarea component
- For multi-line text input

### `src/components/ui/badge.tsx`
- Badge component
- For tags and labels

### `src/components/ui/sheet.tsx`
- Slide-out panel component
- Used for mobile menu

### `src/components/ui/theme-provider.tsx`
- Theme provider component
- Manages dark/light mode

## 🎬 Animation Components

### `src/components/animations/fade-in.tsx`
- Fade-in animation wrapper
- Uses Framer Motion

### `src/components/animations/slide-up.tsx`
- Slide-up animation wrapper
- Configurable delay and duration

### `src/components/animations/stagger.tsx`
- Stagger animation container
- Animates children in sequence

## 🏗 Layout Components

### `src/components/layout/navbar.tsx`
- Navigation bar
- Mobile menu with hamburger
- Active route highlighting

### `src/components/layout/footer.tsx`
- Footer component
- Social links
- Site information

### `src/components/layout/theme-toggle.tsx`
- Dark/light mode toggle button
- Theme switcher

## 📄 Section Components

### `src/components/sections/hero-section.tsx`
- Homepage hero section
- Typing animation effect
- CTA buttons

### `src/components/sections/about-section.tsx`
- About me section
- Profile image
- Statistics

### `src/components/sections/skills-section.tsx`
- Skills grid
- Categorized skills
- Skill levels

### `src/components/sections/projects-section.tsx`
- Featured projects grid
- Project cards with tags
- Links to project details

### `src/components/sections/experience-section.tsx`
- Work experience timeline
- Job cards with details
- Technologies used

### `src/components/sections/contact-form.tsx`
- Contact form with validation
- Form fields (name, email, subject, message)
- Submit handling

## 📱 App Pages

### `src/app/layout.tsx`
- Root layout component
- Wraps all pages
- Includes Navbar and Footer
- Theme provider setup

### `src/app/page.tsx`
- Homepage
- Combines all main sections

### `src/app/about/page.tsx`
- About page
- Extended bio and stats

### `src/app/projects/page.tsx`
- All projects listing
- Project grid

### `src/app/projects/[slug]/page.tsx`
- Individual project page
- Dynamic route
- Project details

### `src/app/experience/page.tsx`
- Experience page
- Full work history

### `src/app/blog/page.tsx`
- Blog listing page
- All blog posts grid

### `src/app/blog/[slug]/page.tsx`
- Individual blog post
- MDX rendering
- Dynamic route

### `src/app/contact/page.tsx`
- Contact page
- Contact form

### `src/app/sitemap.ts`
- Dynamic sitemap generation
- SEO optimization

## 📝 Blog Content

### `src/content/blogs/*.mdx`
Example blog posts:
- `getting-started-nextjs-14.mdx`
- `building-accessible-web-apps.mdx`
- `mastering-typescript.mdx`

Each has:
- Frontmatter (title, date, tags)
- Markdown content
- Code examples

## 📄 Public Files

### `public/robots.txt`
- SEO configuration
- Search engine instructions

### `public/.nojekyll`
- GitHub Pages configuration
- Prevents Jekyll processing

## 📚 Documentation

### `README.md`
- Main project documentation
- Feature list
- Setup instructions
- Deployment guide

### `GETTING_STARTED.md`
- Quick start guide
- First steps
- Common tasks

### `CUSTOMIZATION.md`
- Detailed customization guide
- How to modify everything
- Code examples

### `DEPLOYMENT.md`
- Deployment instructions
- GitHub Pages setup
- Vercel and Netlify guides

### `LICENSE`
- MIT License
- Usage terms

## 🔄 CI/CD

### `.github/workflows/deploy.yml`
- GitHub Actions workflow
- Automatic deployment
- Builds and deploys to GitHub Pages

## 🗂 Ignored Files

### `.gitignore`
- Files to ignore in git
- node_modules, .next, etc.

## 📊 File Count Summary

```
Total Files: 60+
Components: 20+
Pages: 10+
Configuration: 8+
Documentation: 5+
Type Definitions: 5+
Utilities: 3+
Blog Posts: 3+
```

## 🎯 Files You'll Edit Most

1. **`src/config/siteConfig.ts`** - Your content
2. **`src/content/blogs/*.mdx`** - Blog posts
3. **`src/styles/globals.css`** - Theme colors
4. **`public/*`** - Images and assets
5. **`next.config.js`** - Deployment settings

## 🚫 Files NOT to Edit (Usually)

- `src/lib/*` - Utility functions
- `src/components/ui/*` - UI primitives
- `src/types/*` - Type definitions
- `tsconfig.json` - TypeScript config
- `postcss.config.js` - CSS processing

## 💡 Quick Tips

- **Want to add content?** → Edit `siteConfig.ts`
- **Want to change colors?** → Edit `globals.css`
- **Want to add a blog post?** → Create `.mdx` file
- **Want to change layout?** → Edit section components
- **Want to deploy?** → See `DEPLOYMENT.md`

This overview should help you understand where everything is and what each file does!
