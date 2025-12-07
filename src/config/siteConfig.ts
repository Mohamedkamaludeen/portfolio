import { NavConfig } from "@/types/navbar";
import { Project } from "@/types/project";
import { Experience } from "@/types/experience";
import { SkillCategory, SocialLink, SiteConfig } from "@/types";
import { OpenSourceContribution } from "@/types/opensource";
import { Certification } from "@/types/certification";

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
      title: "Open Source",
      href: "/opensource",
    },
    {
      title: "Certifications",
      href: "/certifications",
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
  // {
  //   name: "Twitter",
  //   url: "https://twitter.com/yourusername",
  //   icon: "Twitter",
  // },
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
  resumeUrl: "https://mohamedkamaludeen.github.io/portfolio/kamaludeen_resume.pdf",
};

// ==========================================
// ABOUT SECTION
// ==========================================
export const aboutConfig = {
  title: "About Me",
  bio: `I'm a passionate full-stack developer with 4 + years of experience in creating beautiful, performant, and accessible web applications. I love turning complex problems into simple, intuitive designs.

When I'm not coding, you can find me exploring new technologies, contributing to open source, or sharing my knowledge through blog posts and tutorials.

I believe in continuous learning and staying up-to-date with the latest industry trends. My goal is to create products that not only look great but also provide exceptional user experiences.`,
  image: "https://mohamedkamaludeen.github.io/portfolio/profile.jpg",
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
    company: "EY GDS",
    position: "Full Stack Developer",
    location: "Colombo, Sri Lanka (Hybrid)",
    startDate: "2024-12",
    current: true,
    description:
      "Leading development of enterprise-level web applications for Kimberly-Clark, focusing on scalability, performance, and user experience.",
    responsibilities: [
        "Developed and delivered new user-facing features using React.js (v18).",
        "Implemented reusable and scalable UI components using React Hooks, Context API, and custom hooks",
        "Optimized frontend performance by leveraging React 18 features such as Suspense, automatic batching, and concurrent rendering",
        "Converted Figma/Adobe XD designs into fully responsive, pixel-perfect UI screens",
        "Integrated REST APIs using Axios, React Query, and modern data-fetching patterns",
        "Enhanced accessibility by following WCAG guidelines and ensuring keyboard/screen-reader support",
        "Improved Material UI, and Styled Components",
        "Implemented secure client-side routing and authentication flows using React Router v6",
        "Managed complex application state using Redux Saga and Redux Toolkit",
        "Conducted code reviews and enforced frontend best practices across the development team",
        "Wrote unit and integration tests using Jest, React Testing Library",
        "Collaborated with backend and design teams to deliver features on time with high quality",
        "Identified and resolved performance bottlenecks using React DevTools and Chrome Performance tools",
],
    technologies: [
      "React",
      "Redux Saga",
      "Meterial UI",
      "react table"
    ],
    logo: "/companies/tech-innovations.png",
  },
  {
    id: "2",
    company: "INTTEQ Dev",
    position: "Backend Developer",
    location: "Colombo, Sri Lanka (Remote)",
    startDate: "2022-12",
    endDate: "2024-12",
    current: false,
    description:
      "Developed and maintained multiple client projects, focusing on modern web technologies and best practices.",
    responsibilities: [
      "Designed and developed scalable backend services using Spring Boot and Java",
      "Architected and deployed microservices with load balancing, API gateways, and service communication patterns",
      "Implemented secure authentication and authorization using Keycloak, JWT, and OAuth2",
      "Built RESTful APIs and asynchronous event-driven services using Spring Boot and Spring Cloud",
      "Configured and optimized MongoDB collections, indexes, and aggregation pipelines for high-performance queries",
      "Implemented message-based communication using AWS SQS, SNS, and Google Pub/Sub",
      "Deployed microservices on AWS services including ECS, EKS, Lambda, API Gateway, and RDS",
      "Configured CI/CD pipelines using GitHub Actions, AWS CodePipeline, and Docker",
      "Managed cloud storage solutions using AWS S3 and Google Cloud Storage",
      "Integrated AWS Secrets Manager and Google Secret Manager for secure credential management",
      "Implemented distributed logging and monitoring using AWS CloudWatch, ELK Stack, and Prometheus",
      "Developed scalable caching layers using Redis and AWS ElastiCache",
      "Performed cloud infrastructure provisioning using Terraform and AWS CloudFormation",
      "Collaborated with cross-functional teams to design API contracts and ensure seamless integrations between services"
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "AWS",
      "Docker",
      "MongoDB",
    ],
    logo: "/companies/startup-solutions.png",
  },
  {
    id: "3",
    company: "INTTEQ Dev",
    position: "Frontend Developer",
    location: "Colombo, Sri Lanka (Remote)",
    startDate: "2020-12",
    endDate: "2024-12",
    current: false,
    description:
      "Created engaging user interfaces and collaborated with designers to bring creative visions to life.",
    responsibilities: [
      "Developed modern, responsive UIs using React and Next.js with pixel-perfect precision",
      "Implemented reusable and scalable components using Material UI, Styled Components, and Tailwind CSS",
      "Built dynamic and interactive user experiences using React Hooks, Context API, and custom hooks",
      "Integrated REST APIs and GraphQL endpoints with Axios, React Query, and SWR",
      "Managed global state efficiently using Redux Toolkit, Zustand, and Context API",
      "Optimized performance with code-splitting, lazy loading, and Next.js server-side rendering (SSR/SSG)",
      "Implemented secure client-side routing and authentication flow with Next.js middleware",
      "Improved accessibility (a11y) and SEO using Next.js metadata, structured data, and best practices",
      "Collaborated with backend teams to design API contracts and ensure smooth integration",
      "Maintained and refactored existing codebases to follow modern React and Next.js patterns",
      "Implemented unit and integration testing using Jest and React Testing Library",
      "Participated in sprint planning, code reviews, and daily stand-ups following Agile workflows"
   ],
    technologies: [
      "React.js",
      "Next.js",
      "Material UI (MUI)",
      "Redux Toolkit",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Styled Components",
      "HTML5",
      "CSS3",
      "REST APIs",
      "Git & GitHub",
    ], 
    logo: "/companies/digital-agency.png",
  },
  {
    id: "4",
    company: "Freelance Fullstack developer",
    position: "Web Developer",
    location: "Remote and Part-time",
    startDate: "2020-01",
    // endDate: "2018-06",
    current: true,
   description:
  "Provided fullstack development services to small businesses and startups, building custom web and mobile applications with modern technologies.",
   responsibilities: [
      "Consulted with clients to gather requirements, define project scope, and propose optimal technical solutions",
      "Designed and developed fullstack web applications using React, Next.js, and Spring Boot/Node.js",
      "Built mobile applications using React Native with seamless backend integration",
      "Integrated Firebase services including Authentication, Firestore, Cloud Storage, and Cloud Messaging",
      "Developed REST APIs and microservices with Spring Boot",
      "Designed and optimized database schemas using MongoDB, PostgreSQL, and MySQL",
      "Implemented secure authentication flows using Firebase Auth, JWT, and OAuth",
      "Built reusable UI components and responsive interfaces using Material UI and Tailwind CSS",
      "Deployed applications on platforms like AWS, Firebase Hosting, Vercel, and Netlify",
      "Managed hosting, domains, SSL, and server configuration for client projects",
      "Provided continuous maintenance, bug fixes, performance improvements, and client support",
      "Collaborated closely with designers and stakeholders to deliver high-quality and scalable applications"
    ],
   technologies: [
      "React.js",
      "Next.js",
      "React Native",
      "Node.js",
      "Spring Boot",
      "Firebase (Auth, Firestore, Storage, Cloud Messaging)",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Material UI",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Git & GitHub",
      "Docker",
      "AWS",
      "Vercel",
      "Netlify",
    ],
    logo: "/companies/freelance.png",
  },
];

// ==========================================
// OPEN SOURCE CONTRIBUTIONS
// ==========================================
export const openSourceConfig: OpenSourceContribution[] = [
  {
  id: "1",
  title: "Keycloak Authentication in React – Step-by-Step Guide",
  description:
    "A detailed Medium blog post explaining Keycloak authentication in React, including setup, token handling, role-based access, and secure API calls.",
  type: "blog",
  url: "https://medium.com/@yourusername/keycloak-authentication-react-guide",
  image: "/opensource/keycloak-react.jpg",
  tags: ["React", "Keycloak", "Authentication", "OAuth2", "JavaScript"],
  date: "2024-02-10",
  featured: true,
  stats: {
    stars: 0,
    forks: 0,
    issues: 0,
    downloads: 0
  },
},

{
  id: "2",
  title: "react-live-pagination",
  description:
    "An NPM package providing a reusable live-loading paginated component for React with infinite scroll, SSR support, and TypeScript support.",
  type: "npm",
  url: "https://www.npmjs.com/package/react-paginated-multiselect",
  image: "/opensource/react-pagination.jpg",
  tags: ["React", "NPM", "Pagination", "TypeScript", "UI Component"],
  date: "2025-11-29",
  featured: true,
  stats: {
    stars: 0,
    forks: 0,
    issues: 0,
    downloads: 15
  },
},

{
  id: "3",
  title: "Open-Source Portfolio Website",
  description:
    "A modern and customizable open-source portfolio website built with Next.js and Tailwind CSS. Free for anyone to clone and deploy.",
  type: "github",
  url: "https://github.com/Mohamedkamaludeen/open_portfolio",
  image: "/opensource/portfolio.jpg",
  tags: ["Next.js", "Tailwind CSS", "Open Source", "Framer Motion"],
  date: "2024-01-28",
  featured: false,
  stats: {
    stars: 350,
    forks: 90,
    issues: 5,
    downloads: 0
  },
},

  // {
  //   id: "3",
  //   title: "Awesome React Hooks",
  //   description: "Contributing to a curated list of awesome React Hooks resources, including custom hooks, tutorials, and best practices.",
  //   type: "github",
  //   url: "https://github.com/awesome/awesome-react-hooks",
  //   tags: ["React", "Hooks", "Documentation"],
  //   date: "2023-09-10",
  //   featured: false,
  //   stats: {
  //     stars: 8500,
  //     forks: 450,
  //   },
  // },
  // {
  //   id: "4",
  //   title: "Building Scalable React Applications",
  //   description: "An in-depth tutorial series on Medium about building scalable React applications with best practices and modern patterns.",
  //   type: "article",
  //   url: "https://medium.com/@yourusername/building-scalable-react-apps",
  //   image: "/opensource/article-react.jpg",
  //   tags: ["React", "Architecture", "Best Practices", "Tutorial"],
  //   date: "2023-08-05",
  //   featured: true,
  // },
  // {
  //   id: "5",
  //   title: "TypeScript Utility Types",
  //   description: "A collection of utility types for TypeScript that make working with complex types easier and more maintainable.",
  //   type: "npm",
  //   url: "https://www.npmjs.com/package/ts-utility-types-plus",
  //   tags: ["TypeScript", "NPM", "Developer Tools"],
  //   date: "2023-07-12",
  //   stats: {
  //     downloads: 25000,
  //   },
  // },
  // {
  //   id: "6",
  //   title: "Material-UI Theme Generator",
  //   description: "An interactive tool for generating Material-UI themes with live preview and export functionality.",
  //   type: "github",
  //   url: "https://github.com/yourusername/mui-theme-generator",
  //   tags: ["Material-UI", "React", "Design System"],
  //   date: "2023-05-18",
  //   stats: {
  //     stars: 650,
  //     forks: 80,
  //   },
  // },
  // {
  //   id: "7",
  //   title: "Microservices with Spring Boot",
  //   description: "A comprehensive guide on Dev.to covering microservices architecture with Spring Boot, including Docker, Kubernetes, and best practices.",
  //   type: "tutorial",
  //   url: "https://dev.to/yourusername/microservices-spring-boot",
  //   tags: ["Spring Boot", "Microservices", "Java", "Docker"],
  //   date: "2023-04-22",
  //   featured: false,
  // },
  // {
  //   id: "8",
  //   title: "React Performance Optimizer",
  //   description: "NPM package that provides hooks and utilities for optimizing React application performance automatically.",
  //   type: "npm",
  //   url: "https://www.npmjs.com/package/react-performance-optimizer",
  //   tags: ["React", "Performance", "NPM", "Optimization"],
  //   date: "2023-03-10",
  //   stats: {
  //     downloads: 15000,
  //   },
  // },
  // {
  //   id: "9",
  //   title: "AWS CDK Constructs Library",
  //   description: "Contributing reusable AWS CDK constructs for common cloud infrastructure patterns.",
  //   type: "github",
  //   url: "https://github.com/aws-samples/cdk-constructs",
  //   tags: ["AWS", "CDK", "Infrastructure", "TypeScript"],
  //   date: "2023-02-05",
  //   stats: {
  //     stars: 2300,
  //     forks: 280,
  //   },
  // },
  // {
  //   id: "10",
  //   title: "Full Stack Development Roadmap",
  //   description: "A detailed article on Hashnode providing a comprehensive roadmap for becoming a full-stack developer in 2024.",
  //   type: "article",
  //   url: "https://hashnode.com/@yourusername/fullstack-roadmap-2024",
  //   tags: ["Career", "Full Stack", "Learning Path"],
  //   date: "2024-01-01",
  //   featured: false,
  // },
  // {
  //   id: "11",
  //   title: "Tailwind CSS Plugin Collection",
  //   description: "A collection of useful Tailwind CSS plugins for animations, gradients, and custom utilities.",
  //   type: "npm",
  //   url: "https://www.npmjs.com/package/tailwind-plugin-collection",
  //   tags: ["Tailwind CSS", "CSS", "NPM", "Plugins"],
  //   date: "2022-12-15",
  //   stats: {
  //     downloads: 8000,
  //   },
  // },
  // {
  //   id: "12",
  //   title: "Next.js Documentation",
  //   description: "Contributing to the official Next.js documentation with examples and improvements.",
  //   type: "github",
  //   url: "https://github.com/vercel/next.js",
  //   tags: ["Next.js", "Documentation", "Open Source"],
  //   date: "2022-11-20",
  //   featured: false,
  //   stats: {
  //     stars: 120000,
  //     forks: 25000,
  //   },
  // },
];

// ==========================================
// CERTIFICATIONS
// ==========================================
export const certificationsConfig: Certification[] = [
  // {
  //   id: "1",
  //   title: "AWS Certified Developer - Associate",
  //   issuer: "Amazon Web Services (AWS)",
  //   description: "Validates technical expertise in developing and maintaining applications on the AWS platform, including core AWS services, best practices, and security.",
  //   date: "2024-03-15",
  //   expiryDate: "2027-03-15",
  //   credentialId: "AWS-DEV-123456",
  //   credentialUrl: "https://aws.amazon.com/verification/AWS-DEV-123456",
  //   image: "/certifications/aws-developer.png",
  //   skills: ["AWS", "Cloud Computing", "Lambda", "DynamoDB", "S3", "EC2"],
  //   featured: true,
  //   category: "cloud",
  // },
  // {
  //   id: "2",
  //   title: "AWS Certified Solutions Architect - Associate",
  //   issuer: "Amazon Web Services (AWS)",
  //   description: "Demonstrates ability to design distributed systems and applications on AWS, including cost optimization, security, and best practices.",
  //   date: "2024-01-20",
  //   expiryDate: "2027-01-20",
  //   credentialId: "AWS-SAA-789012",
  //   credentialUrl: "https://aws.amazon.com/verification/AWS-SAA-789012",
  //   image: "/certifications/aws-solutions-architect.png",
  //   skills: ["AWS", "Architecture", "Cloud Design", "Security", "Scalability"],
  //   featured: true,
  //   category: "cloud",
  // },
  {
    id: "1",
    title: "Bachelor of Science in Computer Science",
    issuer: "University of Jaffna",
    description:
      "Completed a comprehensive undergraduate program focusing on software engineering, algorithms, data structures, databases, networking, and modern computing technologies.",
    date: "2023-10-23",
    credentialId: "UOJ-CS-2022",
    credentialUrl: "https://www.jfn.ac.lk/",
    image: "/certifications/bsc-computer-science.png",
    skills: [
      "Computer Science",
      "Software Engineering",
      "Algorithms",
      "Data Structures",
      "Databases",
      "Operating Systems",
      "Networking",
      "Problem Solving"
    ],
    featured: true,
    category: "education",
  },
  {
    id: "3",
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta (Facebook)",
    description: "Comprehensive program covering React, JavaScript, HTML, CSS, and modern front-end development best practices.",
    date: "2023-11-10",
    // credentialId: "META-FE-345678",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/2YZHSKKALA47",
    image: "/certifications/meta-frontend.png",
    skills: ["React", "JavaScript", "HTML", "CSS", "Front-End Development"],
    featured: true,
    category: "development",
  },
  // {
  //   id: "4",
  //   title: "Google Cloud Professional Cloud Architect",
  //   issuer: "Google Cloud",
  //   description: "Validates ability to design, develop, and manage robust, secure, scalable, and highly available solutions on Google Cloud Platform.",
  //   date: "2023-09-05",
  //   expiryDate: "2025-09-05",
  //   credentialId: "GCP-ARCH-901234",
  //   credentialUrl: "https://cloud.google.com/certification/verify/GCP-ARCH-901234",
  //   image: "/certifications/gcp-architect.png",
  //   skills: ["Google Cloud", "Cloud Architecture", "Kubernetes", "GKE", "Infrastructure"],
  //   featured: true,
  //   category: "cloud",
  // },
  // {
  //   id: "5",
  //   title: "Oracle Certified Professional: Java SE Developer",
  //   issuer: "Oracle",
  //   description: "Demonstrates proficiency in Java programming, including object-oriented principles, design patterns, and best practices.",
  //   date: "2023-07-18",
  //   credentialId: "ORACLE-JAVA-567890",
  //   credentialUrl: "https://education.oracle.com/verify/ORACLE-JAVA-567890",
  //   image: "/certifications/oracle-java.png",
  //   skills: ["Java", "OOP", "Design Patterns", "Spring Boot", "Enterprise Java"],
  //   featured: false,
  //   category: "development",
  // },
  // {
  //   id: "6",
  //   title: "MongoDB Certified Developer Associate",
  //   issuer: "MongoDB University",
  //   description: "Certification validating skills in MongoDB database design, queries, indexing, and application development.",
  //   date: "2023-05-12",
  //   credentialId: "MONGO-DEV-234567",
  //   credentialUrl: "https://university.mongodb.com/verify/MONGO-DEV-234567",
  //   image: "/certifications/mongodb.png",
  //   skills: ["MongoDB", "NoSQL", "Database Design", "Aggregation", "Indexing"],
  //   featured: false,
  //   category: "development",
  // },
  // {
  //   id: "7",
  //   title: "Certified Kubernetes Administrator (CKA)",
  //   issuer: "Cloud Native Computing Foundation (CNCF)",
  //   description: "Performance-based certification demonstrating skills in Kubernetes cluster administration, troubleshooting, and best practices.",
  //   date: "2023-03-25",
  //   expiryDate: "2026-03-25",
  //   credentialId: "CKA-123789",
  //   credentialUrl: "https://cncf.io/certification/verify/CKA-123789",
  //   image: "/certifications/cka.png",
  //   skills: ["Kubernetes", "Docker", "Container Orchestration", "DevOps", "Cloud Native"],
  //   featured: true,
  //   category: "cloud",
  // },
  // {
  //   id: "8",
  //   title: "GitHub Foundations Certification",
  //   issuer: "GitHub",
  //   description: "Validates understanding of GitHub fundamentals, including repositories, branches, commits, and collaboration workflows.",
  //   date: "2023-02-10",
  //   credentialId: "GITHUB-FOUND-456789",
  //   credentialUrl: "https://github.com/verify/GITHUB-FOUND-456789",
  //   image: "/certifications/github.png",
  //   skills: ["Git", "GitHub", "Version Control", "CI/CD", "Collaboration"],
  //   featured: false,
  //   category: "development",
  // },
  // {
  //   id: "9",
  //   title: "Certified Scrum Master (CSM)",
  //   issuer: "Scrum Alliance",
  //   description: "Demonstrates understanding of Scrum framework, Agile principles, and ability to facilitate Scrum teams effectively.",
  //   date: "2022-12-05",
  //   expiryDate: "2024-12-05",
  //   credentialId: "CSM-987654",
  //   credentialUrl: "https://scrumalliance.org/verify/CSM-987654",
  //   image: "/certifications/csm.png",
  //   skills: ["Scrum", "Agile", "Project Management", "Team Leadership", "Facilitation"],
  //   featured: false,
  //   category: "management",
  // },
  // {
  //   id: "10",
  //   title: "CompTIA Security+ Certification",
  //   issuer: "CompTIA",
  //   description: "Validates baseline cybersecurity skills and knowledge in risk management, network security, and threat detection.",
  //   date: "2022-10-15",
  //   credentialId: "COMPTIA-SEC-654321",
  //   credentialUrl: "https://comptia.org/verify/COMPTIA-SEC-654321",
  //   image: "/certifications/security-plus.png",
  //   skills: ["Cybersecurity", "Network Security", "Risk Management", "Threat Detection"],
  //   featured: false,
  //   category: "security",
  // },
  // {
  //   id: "11",
  //   title: "Adobe Certified Expert - Adobe XD",
  //   issuer: "Adobe",
  //   description: "Certification demonstrating proficiency in Adobe XD for UX/UI design, prototyping, and collaboration.",
  //   date: "2022-08-20",
  //   credentialId: "ADOBE-XD-321098",
  //   credentialUrl: "https://adobe.com/verify/ADOBE-XD-321098",
  //   image: "/certifications/adobe-xd.png",
  //   skills: ["Adobe XD", "UI/UX Design", "Prototyping", "Design Systems", "Wireframing"],
  //   featured: false,
  //   category: "design",
  // },
  // {
  //   id: "12",
  //   title: "Microsoft Certified: Azure Developer Associate",
  //   issuer: "Microsoft",
  //   description: "Validates expertise in designing, building, testing, and maintaining cloud applications on Microsoft Azure.",
  //   date: "2022-06-30",
  //   expiryDate: "2024-06-30",
  //   credentialId: "MS-AZURE-DEV-876543",
  //   credentialUrl: "https://microsoft.com/verify/MS-AZURE-DEV-876543",
  //   image: "/certifications/azure-developer.png",
  //   skills: ["Azure", "Cloud Development", "Azure Functions", "Cosmos DB", "App Services"],
  //   featured: false,
  //   category: "cloud",
  // },
];

// ==========================================
// CONTACT INFO
// ==========================================
export const contactConfig = {
  title: "Let's Work Together",
  description:
    "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
  email: "mohamedkamaludeen48@gmail.com",
  phone: "+94 768 523 253",
  location: "Colombo, Sri Lanka",
  availability: "Available for freelance work",
};
