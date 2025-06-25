import { BlogPost, BlogCategory } from '../types/blog';

// Blog categories
export const blogCategories: BlogCategory[] = [
  {
    id: '1',
    name: 'Web Development',
    description: 'Frontend and backend development tutorials',
    slug: 'web-development',
    color: '#201d66'
  },
  {
    id: '2',
    name: 'React & Next.js',
    description: 'Modern React development and Next.js frameworks',
    slug: 'react-nextjs',
    color: '#3949ab'
  },
  {
    id: '3',
    name: 'UI/UX Design',
    description: 'Design principles and user experience insights',
    slug: 'ui-ux-design',
    color: '#80deea'
  },  {
    id: '4',
    name: 'Career & Tips',
    description: 'Professional development and coding tips',
    slug: 'career-tips',
    color: '#b3e5fc'
  },
  {
    id: '5',
    name: 'Artificial Intelligence',
    description: 'AI development, machine learning, and automation',
    slug: 'artificial-intelligence',
    color: '#9c27b0'
  },
  {
    id: '6',
    name: 'Full-Stack Development',
    description: 'End-to-end application development and architecture',
    slug: 'fullstack-development',
    color: '#ff9800'
  }
];

// Real blog posts data
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Modern React Applications with TypeScript',
    description: 'A comprehensive guide to setting up and building scalable React applications using TypeScript, covering best practices, project structure, and advanced patterns that I use in my daily development workflow.',
    excerpt: 'Learn how to build scalable React applications with TypeScript, covering setup, best practices, and advanced patterns from my experience developing production applications.',
    content: '',
    date: '2025-01-15',
    publishedDate: new Date('2025-01-15'),
    tags: ['React', 'TypeScript', 'Frontend', 'JavaScript', 'Best Practices'],
    category: 'react-nextjs',
    slug: 'building-modern-react-applications-typescript',
    readTime: 8,
    featured: true,
    status: 'published',
    author: {
      name: 'Pratyush Kumar Pandey',
      avatar: '/profile.jpg'
    },    seo: {
      metaTitle: 'Building Modern React Applications with TypeScript | Pratyush Pandey',
      metaDescription: 'Learn how to build scalable React applications with TypeScript. A comprehensive guide covering setup, best practices, and advanced patterns.',
      keywords: ['React', 'TypeScript', 'Frontend Development', 'JavaScript', 'Web Development', 'React Best Practices']
    },
    socialLinks: {
      devTo: 'https://dev.to/pratyush_kumarpandey_0f5/building-modern-react-applications-with-typescript-139j'
    }
  },
  {
    id: '2',
    title: 'My Journey: From Computer Science Student to Full-Stack Developer',
    description: 'A personal reflection on my journey through computer science education, hackathons, internships, and becoming a full-stack developer. Lessons learned, challenges faced, and advice for aspiring developers.',
    excerpt: 'Follow my journey from a CS student to a full-stack developer, including the challenges, wins, and key lessons learned along the way.',
    content: '',
    date: '2025-01-12',
    publishedDate: new Date('2025-01-12'),
    tags: ['Career', 'Journey', 'Student Life', 'Full-Stack', 'Advice'],
    category: 'career-tips',
    slug: 'my-journey-student-to-fullstack-developer',
    readTime: 10,
    featured: true,
    status: 'published',
    author: {
      name: 'Pratyush Kumar Pandey',
      avatar: '/profile.jpg'
    },    seo: {
      metaTitle: 'My Journey: From CS Student to Full-Stack Developer | Pratyush Pandey',
      metaDescription: 'Follow my personal journey from computer science student to full-stack developer. Lessons learned, challenges faced, and advice for aspiring developers.',
      keywords: ['Career Journey', 'Full-Stack Developer', 'Computer Science', 'Student Experience', 'Developer Advice']
    },
    socialLinks: {
      devTo: 'https://dev.to/pratyush_kumarpandey_0f5/my-journey-from-computer-science-student-to-full-stack-developer-aln'
    }
  },
  {
    id: '3',
    title: 'Building NextHire: AI-Powered Recruitment Platform with MERN Stack',
    description: 'Deep dive into building NextHire, an AI-powered recruitment platform during our MERN hackathon. Technical decisions, architecture choices, and implementation of AI features like resume parsing and job matching.',
    excerpt: 'Technical breakdown of NextHire - an AI recruitment platform built with MERN stack, featuring resume parsing, job matching, and real-time communication.',
    content: '',
    date: '2025-01-08',
    publishedDate: new Date('2025-01-08'),
    tags: ['MERN', 'AI', 'OpenAI API', 'Hackathon', 'Project Case Study'],
    category: 'web-development',
    slug: 'building-nexthire-ai-recruitment-platform-mern',
    readTime: 12,
    featured: true,
    status: 'published',
    author: {
      name: 'Pratyush Kumar Pandey',
      avatar: '/profile.jpg'
    },
    seo: {
      metaTitle: 'Building NextHire: AI-Powered Recruitment Platform | Pratyush Pandey',
      metaDescription: 'Technical deep dive into building NextHire, an AI-powered recruitment platform with MERN stack, OpenAI integration, and real-time features.',
      keywords: ['MERN Stack', 'AI Development', 'OpenAI API', 'Recruitment Platform', 'Hackathon Project']
    },    socialLinks: {
      devTo: 'https://dev.to/pratyush_kumarpandey_0f5/building-nexthire-ai-powered-recruitment-platform-with-mern-stack-4505'
    }
  },
  {
    id: '4',
    title: 'Mastering Spring Boot: Building Scalable Video Streaming APIs',
    description: 'Learn how to build robust video streaming APIs with Spring Boot and MySQL. Covers file upload handling, streaming optimization, authentication, and database design patterns from my hackathon experience.',
    excerpt: 'Complete guide to building video streaming APIs with Spring Boot, covering file handling, optimization, and database design patterns.',
    content: '',
    date: '2025-01-05',
    publishedDate: new Date('2025-01-05'),
    tags: ['Spring Boot', 'Java', 'REST API', 'Video Streaming', 'MySQL'],
    category: 'web-development',
    slug: 'mastering-spring-boot-video-streaming-apis',
    readTime: 9,
    featured: false,
    status: 'published',
    author: {
      name: 'Pratyush Kumar Pandey',
      avatar: '/profile.jpg'
    },
    seo: {
      metaTitle: 'Mastering Spring Boot: Building Video Streaming APIs | Pratyush Pandey',
      metaDescription: 'Learn to build robust video streaming APIs with Spring Boot and MySQL. Complete guide covering file handling, optimization, and best practices.',
      keywords: ['Spring Boot', 'REST API', 'Video Streaming', 'Java Development', 'MySQL', 'Backend Development']
    }
  },
  {
    id: '5',
    title: 'Real-Time Collaboration: Building CodeSync with Django and WebSockets',
    description: 'Technical exploration of building CodeSync, a real-time collaborative code editor using Django and WebSockets. Covers real-time synchronization, multi-user editing, and collaborative features implementation.',
    excerpt: 'Dive into building real-time collaborative applications with Django and WebSockets, featuring multi-user editing and live synchronization.',
    content: '',
    date: '2025-01-03',
    publishedDate: new Date('2025-01-03'),
    tags: ['Django', 'WebSockets', 'Real-time', 'Python', 'Collaboration'],
    category: 'web-development',
    slug: 'real-time-collaboration-codesync-django-websockets',
    readTime: 11,
    featured: false,
    status: 'published',
    author: {
      name: 'Pratyush Kumar Pandey',
      avatar: '/profile.jpg'
    },
    seo: {
      metaTitle: 'Real-Time Collaboration: Building CodeSync with Django | Pratyush Pandey',
      metaDescription: 'Learn to build real-time collaborative applications with Django and WebSockets. Complete guide to multi-user editing and live synchronization.',
      keywords: ['Django', 'WebSockets', 'Real-time Applications', 'Python', 'Collaborative Editing', 'Code Editor']
    }
  },  {
    id: '6',
    title: 'UI/UX Design Principles for Developer-Designers',
    description: 'Essential design principles every developer should master to create intuitive user interfaces. From my experience using Figma, creating responsive designs, and building user-centric applications.',
    excerpt: 'Master essential UI/UX design principles as a developer. Learn to create intuitive, accessible, and beautiful user interfaces.',
    content: '',
    date: '2025-01-01',
    publishedDate: new Date('2025-01-01'),
    tags: ['UI/UX', 'Design', 'Figma', 'User Experience', 'Frontend'],
    category: 'ui-ux-design',
    slug: 'ui-ux-design-principles-developer-designers',
    readTime: 7,
    featured: false,
    status: 'published',
    author: {
      name: 'Pratyush Kumar Pandey',
      avatar: '/profile.jpg'
    },
    seo: {
      metaTitle: 'UI/UX Design Principles for Developer-Designers | Pratyush Pandey',
      metaDescription: 'Master essential UI/UX design principles as a developer. Learn to create intuitive, accessible, and beautiful user interfaces.',
      keywords: ['UI/UX Design', 'User Experience', 'Frontend Development', 'Design Principles', 'Figma', 'Accessibility']
    }
  },
  {
    id: '7',
    title: 'Building Intelligent AI Chatbots with OpenAI GPT-4 and React',
    description: 'Comprehensive guide to building production-ready AI chatbots using OpenAI GPT-4 API, React, and modern web technologies. Learn about context management, streaming responses, and creating conversational interfaces.',
    excerpt: 'Learn to build intelligent AI chatbots with OpenAI GPT-4, React, and advanced conversation management techniques for production applications.',
    content: '',
    date: '2024-12-28',
    publishedDate: new Date('2024-12-28'),
    tags: ['AI', 'OpenAI', 'GPT-4', 'React', 'Chatbots', 'Machine Learning'],
    category: 'artificial-intelligence',
    slug: 'building-intelligent-ai-chatbots-openai-gpt4-react',
    readTime: 14,
    featured: true,
    status: 'published',
    author: {
      name: 'Pratyush Kumar Pandey',
      avatar: '/profile.jpg'
    },
    seo: {
      metaTitle: 'Building AI Chatbots with OpenAI GPT-4 and React | Pratyush Pandey',
      metaDescription: 'Comprehensive guide to building production-ready AI chatbots using OpenAI GPT-4 API, React, and modern web technologies.',
      keywords: ['AI Chatbots', 'OpenAI GPT-4', 'React', 'Machine Learning', 'Conversational AI', 'JavaScript']
    },
    socialLinks: {
      devTo: 'https://dev.to/pratyush_kumarpandey_0f5/building-intelligent-ai-chatbots-with-openai-gpt4-and-react'
    }
  },
  {
    id: '8',
    title: 'Mastering Artificial Intelligence in Modern Web Development',
    description: 'Comprehensive guide to integrating AI technologies into web applications. Covering machine learning APIs, intelligent features, and practical implementation strategies for modern developers.',
    excerpt: 'Discover how to integrate AI into web applications with practical examples, from OpenAI API integration to building intelligent user interfaces and automated features.',
    content: '',
    date: '2025-01-20',
    publishedDate: new Date('2025-01-20'),
    tags: ['AI', 'Machine Learning', 'OpenAI API', 'Web Development', 'JavaScript', 'Python'],
    category: 'artificial-intelligence',
    slug: 'mastering-artificial-intelligence-modern-web-development',
    readTime: 14,
    featured: true,
    status: 'published',
    author: {
      name: 'Pratyush Kumar Pandey',
      avatar: '/profile.jpg'
    },
    seo: {
      metaTitle: 'Mastering AI in Modern Web Development | Pratyush Pandey',
      metaDescription: 'Learn how to integrate AI technologies into web applications with practical examples and implementation strategies.',
      keywords: ['AI Development', 'Machine Learning', 'OpenAI API', 'Web Development', 'Artificial Intelligence', 'JavaScript AI']
    },
    socialLinks: {
      devTo: 'https://dev.to/pratyush_kumarpandey_0f5/mastering-artificial-intelligence-modern-web-development'
    }
  },
  {
    id: '9',
    title: 'Modern Web Development: Building the Future of Digital Experiences',
    description: 'Explore the cutting-edge technologies and best practices shaping modern web development. From React to serverless architecture, discover how to build next-generation web applications.',
    excerpt: 'Complete guide to modern web development covering React, TypeScript, performance optimization, security, and emerging technologies.',
    content: '',
    date: '2025-01-18',
    publishedDate: new Date('2025-01-18'),
    tags: ['Web Development', 'React', 'TypeScript', 'Performance', 'PWA', 'Modern CSS'],
    category: 'web-development',
    slug: 'modern-web-development-building-future-digital-experiences',
    readTime: 16,
    featured: true,
    status: 'published',
    author: {
      name: 'Pratyush Kumar Pandey',
      avatar: '/profile.jpg'
    },
    seo: {
      metaTitle: 'Modern Web Development: Building the Future | Pratyush Pandey',
      metaDescription: 'Explore cutting-edge web development technologies and best practices for building next-generation digital experiences.',
      keywords: ['Modern Web Development', 'React', 'TypeScript', 'Web Performance', 'PWA', 'Frontend Development']
    },
    socialLinks: {
      devTo: 'https://dev.to/pratyush_kumarpandey_0f5/modern-web-development-building-future-digital-experiences'
    }
  },
  {
    id: '10',
    title: 'Advanced Full-Stack Development: Building Scalable Web Applications',
    description: 'Master advanced full-stack development concepts including microservices, database optimization, real-time features, and deployment strategies for enterprise-scale applications.',
    excerpt: 'Deep dive into advanced full-stack development covering architecture patterns, database optimization, real-time features, and scalable deployment strategies.',
    content: '',
    date: '2025-01-16',
    publishedDate: new Date('2025-01-16'),
    tags: ['Full-Stack', 'Microservices', 'Database', 'Node.js', 'Architecture', 'DevOps'],
    category: 'fullstack-development',
    slug: 'advanced-fullstack-development-scalable-web-applications',
    readTime: 18,
    featured: true,
    status: 'published',
    author: {
      name: 'Pratyush Kumar Pandey',
      avatar: '/profile.jpg'
    },
    seo: {
      metaTitle: 'Advanced Full-Stack Development: Scalable Applications | Pratyush Pandey',
      metaDescription: 'Master advanced full-stack development with microservices, database optimization, and scalable deployment strategies.',
      keywords: ['Full-Stack Development', 'Microservices', 'Database Optimization', 'Node.js', 'System Architecture', 'DevOps']
    },
    socialLinks: {
      devTo: 'https://dev.to/pratyush_kumarpandey_0f5/advanced-fullstack-development-scalable-web-applications'
    }
  }
];

// Utility functions
export const getBlogsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category && post.status === 'published');
};

export const getFeaturedBlogs = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured && post.status === 'published');
};

export const getBlogBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRecentBlogs = (limit: number = 5): BlogPost[] => {
  return blogPosts
    .filter(post => post.status === 'published')
    .sort((a, b) => b.publishedDate.getTime() - a.publishedDate.getTime())
    .slice(0, limit);
};

export const searchBlogs = (query: string): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter(post => 
    post.status === 'published' && (
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.description.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    )
  );
};
