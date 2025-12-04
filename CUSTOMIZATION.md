# Customization Guide

## Table of Contents
1. [Changing Personal Information](#changing-personal-information)
2. [Adding Projects](#adding-projects)
3. [Adding Blog Posts](#adding-blog-posts)
4. [Updating Experience](#updating-experience)
5. [Customizing Skills](#customizing-skills)
6. [Changing Theme Colors](#changing-theme-colors)
7. [Modifying Navigation](#modifying-navigation)
8. [Adding New Pages](#adding-new-pages)

## Changing Personal Information

Edit `src/config/siteConfig.ts`:

```typescript
export const siteConfig = {
  name: "Your Name Here",
  title: "Your Professional Title",
  description: "Your bio/description",
  url: "https://yourwebsite.com",
  links: {
    twitter: "https://twitter.com/you",
    github: "https://github.com/you",
    linkedin: "https://linkedin.com/in/you",
    email: "you@example.com",
  },
};
```

Update hero section:
```typescript
export const heroConfig = {
  title: "Hi, I'm Your Name",
  subtitle: "Your Title",
  description: "Your description",
  typingTexts: [
    "Developer",
    "Designer",
    "Your Skills",
  ],
  resumeUrl: "/your-resume.pdf",
};
```

## Adding Projects

Add to `projectsConfig` array in `src/config/siteConfig.ts`:

```typescript
{
  slug: "unique-project-slug",
  title: "Project Name",
  description: "Short description (1-2 sentences)",
  longDescription: `Detailed description with multiple paragraphs...`,
  image: "/projects/project-image.jpg",
  tags: ["React", "TypeScript", "Tailwind"],
  github: "https://github.com/you/project",
  demo: "https://project-demo.com",
  featured: true, // Show on homepage
  startDate: "2024-01-01",
  endDate: "2024-06-30", // Optional
}
```

**Tips:**
- Use descriptive slugs (lowercase, hyphens)
- Mark 2-3 projects as `featured: true`
- Add project images to `/public/projects/`
- Use tags for technologies used

## Adding Blog Posts

Create a new file in `src/content/blogs/`:

**Filename:** `your-post-slug.mdx`

```mdx
---
title: "Your Post Title"
description: "Brief description for SEO"
date: "2024-01-15"
author: "Your Name"
tags: ["Tag1", "Tag2", "Tag3"]
published: true
---

# Your Post Title

Your content here in Markdown format...

## Subheading

More content...

```code
Your code blocks
```
```

**Tips:**
- Use descriptive filenames (becomes URL slug)
- Set `published: false` for drafts
- Include relevant tags for filtering
- Use proper Markdown formatting

## Updating Experience

Edit `experienceConfig` in `src/config/siteConfig.ts`:

```typescript
{
  id: "unique-id",
  company: "Company Name",
  position: "Your Position",
  location: "City, State/Country",
  startDate: "2022-01",
  endDate: "2024-01", // Omit if current
  current: false, // Set true if currently working
  description: "Brief role description",
  responsibilities: [
    "Key achievement or responsibility",
    "Another important point",
    "Quantify results when possible",
  ],
  technologies: ["Tech1", "Tech2", "Tech3"],
  logo: "/companies/logo.png", // Optional
}
```

**Tips:**
- List experiences in reverse chronological order
- Use action verbs in responsibilities
- Quantify achievements (improved by X%, built Y features)
- Include relevant technologies

## Customizing Skills

Update `skillsConfig` in `src/config/siteConfig.ts`:

```typescript
{
  category: "Category Name",
  skills: [
    { name: "Skill Name", level: 90 }, // Level 0-100 (optional)
    { name: "Another Skill", level: 85 },
  ],
}
```

**Suggested Categories:**
- Frontend
- Backend
- DevOps & Tools
- Design & Other
- Languages
- Frameworks

## Changing Theme Colors

Edit `src/styles/globals.css`:

### Light Theme
```css
:root {
  --primary: 221.2 83.2% 53.3%; /* Main brand color */
  --secondary: 210 40% 96.1%;   /* Secondary elements */
  --accent: 210 40% 96.1%;      /* Accents */
  /* Other colors... */
}
```

### Dark Theme
```css
.dark {
  --primary: 217.2 91.2% 59.8%;
  /* Other colors... */
}
```

**Format:** `H S L` (Hue Saturation Lightness)

**Tools:**
- [HSL Color Picker](https://hslpicker.com/)
- [Coolors](https://coolors.co/)

## Modifying Navigation

Edit `navConfig` in `src/config/siteConfig.ts`:

```typescript
export const navConfig = {
  mainNav: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Custom Page", href: "/custom" },
    { 
      title: "External Link", 
      href: "https://example.com",
      external: true 
    },
  ],
};
```

## Adding New Pages

1. **Create page file:**
```
src/app/your-page/page.tsx
```

2. **Basic page structure:**
```typescript
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Page Title",
  description: "Your page description",
};

export default function YourPage() {
  return (
    <div className="container py-20">
      <h1>Your Page Content</h1>
    </div>
  );
}
```

3. **Add to navigation:**
```typescript
{ title: "Your Page", href: "/your-page" }
```

## Quick Customization Checklist

- [ ] Update site name and description
- [ ] Change social media links
- [ ] Add your profile photo
- [ ] Update hero section text
- [ ] Add your projects
- [ ] Update work experience
- [ ] Customize skills
- [ ] Write first blog post
- [ ] Update contact information
- [ ] Replace favicon and og-image
- [ ] Customize theme colors
- [ ] Update resume link
- [ ] Test all links
- [ ] Deploy to hosting platform

## Need Help?

- Check the main [README.md](README.md)
- Review [DEPLOYMENT.md](DEPLOYMENT.md) for deployment help
- Open an issue on GitHub
- Email support
