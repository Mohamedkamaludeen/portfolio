import { NavConfig } from "@/types/navbar";
import { Project } from "@/types/project";
import { Experience } from "@/types/experience";
import { SkillCategory, SocialLink, SiteConfig } from "@/types";

// ==========================================
// SITE CONFIGURATION
// ==========================================
export const siteConfig: SiteConfig = {
  name: "Mohamed Kamaludeen",
  title: "Full Stack Software Developer",
  description:
    "A passionate full-stack developer specializing in building exceptional digital experiences. Currently focused on React, Next.js, TypeScript and Java Spring boot.",
  url: "https://yourportfolio.com",
  ogImage: "https://yourportfolio.com/og-image.png",
  links: {
    twitter: "https://twitter.com/yourusername",
    github: "https://github.com/Mohamedkamaludeen",
    linkedin: "https://www.linkedin.com/in/mohamed-kamaludeen-b171b820a/",
    email: "mohamedkamaludeen48@gmail.com",
  },
};

// ==========================================
// NAVIGATION CONFIG
// ==========================================
export const navConfig: NavConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Experience",
      href: "/experience",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
};

// ==========================================
// SOCIAL LINKS
// ==========================================
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Mohamedkamaludeen",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mohamed-kamaludeen-b171b820a/",
    icon: "Linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: "Twitter",
  },
  {
    name: "Email",
    url: "mailto:mohamedkamaludeen48@gmail.com",
    icon: "Mail",
  },
];

// ==========================================
// HERO SECTION
// ==========================================
export const heroConfig = {
  title: "Hi, I'm Mohamed Kamaludeen",
  subtitle: "Full Stack Software Developer",
  description:
    "I build exceptional digital experiences that live on the internet. Currently, I'm focused on building accessible, human-centered products using modern web technologies.",
  typingTexts: [
    "Full Stack Developer",
    "UI/UX Designer",
    "Problem Solver",
    "Open Source Contributor",
    "Aws Certified Developer",
  ],
  resumeUrl: "/kamaludeen_resume.pdf",
};

// ==========================================
// ABOUT SECTION
// ==========================================
export const aboutConfig = {
  title: "About Me",
  bio: `I'm a passionate full-stack developer with 4 + years of experience in creating beautiful, performant, and accessible web applications. I love turning complex problems into simple, intuitive designs.

When I'm not coding, you can find me exploring new technologies, contributing to open source, or sharing my knowledge through blog posts and tutorials.

I believe in continuous learning and staying up-to-date with the latest industry trends. My goal is to create products that not only look great but also provide exceptional user experiences.`,
  image: "/profile.jpg",
  stats: [
    { label: "Years Experience", value: "4+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "30+" },
    { label: "Code Commits", value: "10k+" },
  ],
};

// ==========================================
// SKILLS
// ==========================================
export const skillsConfig: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "MUI", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "Vue.js", level: 75 },
      { name: "Redux", level: 80 },
      { name: "SASS", level: 80 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Java", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "Python", level: 78 },
      { name: "Django", level: 70 },
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "MongoDB", level: 85 },
      { name: "Microservices", level: 80 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "GitHub Actions", level: 78 },
      { name: "Azure", level: 70 },
      { name: "Linux", level: 80 },
      { name: "Nginx", level: 70 },
    ],
  },
  {
    category: "Design & Other",
    skills: [
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 75 },
      { name: "UI/UX Design", level: 80 },
      { name: "Responsive Design", level: 95 },
      { name: "Accessibility", level: 85 },
    ],
  },
];

// ==========================================
// PROJECTS
// ==========================================
export const projectsConfig: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with payment integration, inventory management, and real-time analytics.",
    longDescription: `A comprehensive e-commerce solution built with modern web technologies. Features include:
    
- User authentication and authorization
- Product catalog with advanced filtering
- Shopping cart and wishlist functionality
- Secure payment processing with Stripe
- Order tracking and management
- Admin dashboard with analytics
- Real-time inventory updates
- Email notifications
- Responsive design for all devices

The platform handles thousands of products and processes hundreds of orders daily, providing a seamless shopping experience for users.`,
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
    github: "https://github.com/yourusername/ecommerce-platform",
    demo: "https://ecommerce-demo.com",
    featured: true,
    startDate: "2023-01-15",
    endDate: "2023-06-30",
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration, and productivity analytics.",
    longDescription: `A powerful task management tool designed for teams and individuals. Key features include:

- Real-time collaboration with WebSockets
- Drag-and-drop task organization
- Project timelines and Gantt charts
- Team member assignments and notifications
- File attachments and comments
- Custom workflows and automation
- Time tracking and reporting
- Mobile-responsive design
- Dark mode support

Built with performance and user experience in mind, this app helps teams stay organized and productive.`,
    image: "/projects/task-app.jpg",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    github: "https://github.com/yourusername/task-app",
    demo: "https://task-app-demo.com",
    featured: true,
    startDate: "2023-07-01",
    endDate: "2023-10-15",
  },
  {
    slug: "ai-content-generator",
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool using GPT-4 API for creating blog posts, social media content, and marketing copy.",
    longDescription: `An innovative AI content generation platform that leverages cutting-edge AI technology:

- Multiple content types (blogs, social media, emails)
- SEO optimization suggestions
- Tone and style customization
- Multi-language support
- Content templates library
- Plagiarism detection
- Export in various formats
- Usage analytics and insights
- API integration options

This tool has helped content creators and marketers save hours of work while maintaining high-quality output.`,
    image: "/projects/ai-generator.jpg",
    tags: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL", "shadcn/ui"],
    github: "https://github.com/yourusername/ai-content-generator",
    demo: "https://ai-content-demo.com",
    featured: true,
    startDate: "2023-11-01",
  },
  {
    slug: "portfolio-builder",
    title: "Portfolio Builder",
    description:
      "A drag-and-drop portfolio website builder for developers and designers with customizable templates.",
    longDescription: `A no-code portfolio builder that empowers users to create stunning portfolios:

- Drag-and-drop interface
- Pre-built professional templates
- Custom domain support
- SEO optimization built-in
- Analytics integration
- Contact form management
- Blog integration
- Dark/light mode
- Export to static files
- Mobile-first design

Perfect for developers, designers, and creatives who want a professional online presence without coding.`,
    image: "/projects/portfolio-builder.jpg",
    tags: ["Vue.js", "Firebase", "Tailwind CSS", "Vercel"],
    github: "https://github.com/yourusername/portfolio-builder",
    demo: "https://portfolio-builder-demo.com",
    featured: false,
    startDate: "2022-08-01",
    endDate: "2022-12-20",
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard with forecasts, maps, and severe weather alerts using real-time weather APIs.",
    longDescription: `A comprehensive weather application providing accurate forecasts and insights:

- Current weather conditions
- 7-day forecast
- Hourly predictions
- Interactive weather maps
- Severe weather alerts
- Multiple location tracking
- Weather history and trends
- Air quality index
- UV index and sunrise/sunset times
- Customizable widgets

Built with performance in mind, the app provides instant weather updates with beautiful visualizations.`,
    image: "/projects/weather-dashboard.jpg",
    tags: ["React", "TypeScript", "Weather API", "Chart.js", "CSS3"],
    github: "https://github.com/yourusername/weather-dashboard",
    demo: "https://weather-demo.com",
    featured: false,
    startDate: "2022-03-10",
    endDate: "2022-05-30",
  },
  {
    slug: "fitness-tracker",
    title: "Fitness Tracker",
    description:
      "A mobile-responsive fitness tracking app with workout plans, nutrition tracking, and progress analytics.",
    longDescription: `A complete fitness companion for achieving health goals:

- Workout logging and planning
- Exercise library with videos
- Nutrition and calorie tracking
- Progress photos and measurements
- Goal setting and achievements
- Social features and challenges
- Wearable device integration
- Custom workout creation
- Meal planning and recipes
- Data visualization and insights

Designed to motivate and guide users on their fitness journey with comprehensive tracking and analysis.`,
    image: "/projects/fitness-tracker.jpg",
    tags: ["React Native", "Node.js", "MongoDB", "Express", "JWT"],
    github: "https://github.com/yourusername/fitness-tracker",
    featured: false,
    startDate: "2021-09-01",
    endDate: "2022-02-15",
  },
];

// ==========================================
// EXPERIENCE
// ==========================================
export const experienceConfig: Experience[] = [
  {
    id: "1",
    company: "Tech Innovations Inc.",
    position: "Senior Full Stack Developer",
    location: "San Francisco, CA (Remote)",
    startDate: "2022-06",
    current: true,
    description:
      "Leading development of enterprise-level web applications and mentoring junior developers.",
    responsibilities: [
      "Architected and implemented scalable microservices using Node.js and Docker",
      "Led a team of 5 developers in building a customer-facing dashboard with React and TypeScript",
      "Improved application performance by 40% through code optimization and caching strategies",
      "Conducted code reviews and established best practices for the development team",
      "Collaborated with product managers and designers to deliver features on schedule",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "AWS",
    ],
    logo: "/companies/tech-innovations.png",
  },
  {
    id: "2",
    company: "StartUp Solutions",
    position: "Full Stack Developer",
    location: "New York, NY",
    startDate: "2020-03",
    endDate: "2022-05",
    current: false,
    description:
      "Developed and maintained multiple client projects, focusing on modern web technologies and best practices.",
    responsibilities: [
      "Built responsive web applications using React, Vue.js, and Angular",
      "Developed RESTful APIs and GraphQL endpoints with Node.js and Express",
      "Integrated third-party services including Stripe, SendGrid, and AWS S3",
      "Implemented CI/CD pipelines using GitHub Actions and Docker",
      "Participated in agile ceremonies and sprint planning",
    ],
    technologies: [
      "React",
      "Vue.js",
      "Node.js",
      "MongoDB",
      "GraphQL",
      "Tailwind CSS",
    ],
    logo: "/companies/startup-solutions.png",
  },
  {
    id: "3",
    company: "Digital Agency Co.",
    position: "Frontend Developer",
    location: "Los Angeles, CA",
    startDate: "2018-07",
    endDate: "2020-02",
    current: false,
    description:
      "Created engaging user interfaces and collaborated with designers to bring creative visions to life.",
    responsibilities: [
      "Developed pixel-perfect, responsive websites from Figma designs",
      "Implemented interactive features using JavaScript and jQuery",
      "Optimized website performance and SEO",
      "Maintained and updated existing client websites",
      "Worked closely with UX/UI designers to ensure design consistency",
    ],
    technologies: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "SASS",
      "jQuery",
      "WordPress",
      "Bootstrap",
    ],
    logo: "/companies/digital-agency.png",
  },
  {
    id: "4",
    company: "Freelance",
    position: "Web Developer",
    location: "Remote",
    startDate: "2017-01",
    endDate: "2018-06",
    current: false,
    description:
      "Provided web development services to small businesses and startups, building custom websites and applications.",
    responsibilities: [
      "Consulted with clients to understand requirements and propose solutions",
      "Built custom WordPress themes and plugins",
      "Developed landing pages and marketing websites",
      "Provided ongoing maintenance and support",
      "Managed hosting and domain services for clients",
    ],
    technologies: [
      "WordPress",
      "PHP",
      "JavaScript",
      "HTML/CSS",
      "MySQL",
      "cPanel",
    ],
    logo: "/companies/freelance.png",
  },
];

// ==========================================
// CONTACT INFO
// ==========================================
export const contactConfig = {
  title: "Let's Work Together",
  description:
    "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
  email: "hello@yourportfolio.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  availability: "Available for freelance work",
};
