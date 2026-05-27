export const site = {
  name: "Rehaan Bara",
  title: "AI Engineer • Full-Stack Builder",
  tagline: "AI Engineer • Full-Stack Builder",
  location: "Remote · UTC+5:30",
  email: "team@beingai.space",
  contact: {
    label: "Business & Collaborations",
    subtitle:
      "Available for AI projects, SaaS development, automation systems, and collaborations.",
  },
  resumePath: "/Rehaan_Bara_Resume.pdf",
  socials: {
    github: "https://github.com/rehaanbara02487-crypto",
  },
  hero: {
    terminalLine: "Building the future, one line at a time.",
    description:
      "Building intelligent AI solutions, automation tools, and modern web experiences that solve real-world problems.",
    ctas: [
      { label: "View Projects", href: "#projects" },
      { label: "Download Resume", href: "/Rehaan_Bara_Resume.pdf", download: true },
    ],
  },
  about: {
    headline: "About Me",
    body: "I’m Rehaan Bara, a 1st-year BCA student deeply passionate about AI engineering, automation, full-stack development, and modern technology systems.\n\nI focus on building intelligent digital products that combine powerful functionality with premium user experiences. My interests include AI assistants, automation systems, trading intelligence platforms, cybersecurity, and scalable SaaS products.\n\nAlongside my personal projects, I’ve also worked as a freelancer with international clients, helping them build professional ATS-friendly resumes, apply for jobs strategically, and improve their career positioning. I communicated directly with clients through Google Meet to understand their goals and deliver tailored solutions professionally.\n\nI enjoy solving real-world problems through technology and continuously improving my skills in AI, development, automation, and system design.",
    highlights: [
      "AI engineering · automation · full-stack systems",
      "Premium UI/UX with modern web performance",
      "Security-minded builds and scalable architecture",
    ],
  },
  skills: [
    {
      category: "AI / ML",
      items: [
        "OpenAI API",
        "Prompt Engineering",
        "AI Automation",
        "RAG Basics",
        "AI Assistants",
        "Trading Intelligence Systems",
      ],
    },
    {
      category: "Frontend",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "APIs",
        "Firebase",
        "Supabase",
        "Authentication Systems",
      ],
    },
    {
      category: "Cloud & Deployment",
      items: ["Vercel", "Render", "GitHub", "Domain Integration"],
    },
    {
      category: "Cybersecurity",
      items: [
        "Ethical Hacking Basics",
        "Security Research",
        "System Protection",
        "Network Security Basics",
      ],
    },
    {
      category: "Tools",
      items: ["VS Code", "Cursor AI", "Git", "Figma", "Chrome DevTools"],
    },
  ],
  projects: [
    {
      title: "BeingAI Assistant",
      description:
        "An AI-powered business automation assistant designed to automate repetitive workflows, improve productivity, and help businesses operate faster using intelligent systems.",
      tags: ["AI", "Automation", "Business Workflows", "Productivity"],
      github: "https://github.com/rehaanbara02487-crypto",
      demo: "https://www.beingai.space",
      launchLabel: "Launch Platform",
      theme: "automation",
    },
    {
      title: "Trading AI Assistant",
      description:
        "An AI trading intelligence platform trained using trading concepts, chart behavior, and ICT educational data to assist with market analysis and prediction workflows.",
      tags: ["AI", "Trading Systems", "Automation", "Analytics"],
      github: "https://github.com/rehaanbara02487-crypto",
      demo: "https://trade.beingai.space",
      launchLabel: "Open Trading AI",
      theme: "trading",
    },
  ],
  experience: [
    {
      role: "Freelancer – Resume Builder & Career Assistance Specialist",
      company: "Remote",
      period: "Sep 2025 — Present",
      bullets: [
        "Worked with international clients remotely",
        "Built ATS-friendly resumes",
        "Assisted with strategic job applications",
        "Conducted client communication professionally through Google Meet",
        "Helped clients improve professional positioning and opportunities",
      ],
    },
  ],
  services: [
    {
      title: "AI Development",
      description: "AI assistants, intelligent tools, and custom AI systems.",
    },
    {
      title: "Full-Stack Web Development",
      description: "Modern responsive websites, premium UI/UX, scalable web apps.",
    },
    {
      title: "Automation Systems",
      description: "Workflow automation, AI-powered task systems, API integrations.",
    },
    {
      title: "Freelancing Services",
      description: "Resume building, career assistance, job application support.",
    },
  ],
} as const;

