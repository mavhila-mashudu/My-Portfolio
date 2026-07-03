window.portfolioData = {
  hero: {
    eyebrow: "Final-year Computer Science student",
    name: "Mashudu Mavhila",
    role: "Software Engineer",
    summary:
      "Final-year Computer Science student at the University of the Witwatersrand.",
    actions: [
      { label: "View Projects", href: "#projects", style: "primary" },
      { label: "View CV", href: "assets/docs/output.pdf", style: "secondary", target: "_blank" },
      { label: "Email Me", href: "mailto:mashudumavhila@gmail.com", style: "secondary" }
    ],
    highlights: [
      { value: "7+", label: "Software projects" },
      { value: "Wits", label: "Final-year CS" },
      { value: "COMS1", label: "Tutor and mentor" }
    ],
    focus: ["AI", "Full Stack", "System Design", "Clean Code"]
  },

  sections: {
    projects: {
      eyebrow: "Selected work",
      title: "Selected Projects",
      subtitle:
        "Rotating featured work and refined project tiles. Open any project for the full technical story, features, stack, and lessons."
    },
    skills: {
      eyebrow: "Capabilities",
      title: "Skills",
      subtitle:
        "A practical mix of programming foundations, web systems, AI, architecture, communication, and teamwork."
    },
    journey: {
      eyebrow: "Growth timeline",
      title: "My Journey",
      subtitle:
        "A compact path from academic foundation to tutoring, team projects, and software engineering delivery."
    },
    education: {
      eyebrow: "Education",
      title: "Academic Background",
      subtitle: "Computer Science training backed by strong mathematics and consistent project work."
    }
  },

  projects: [
    {
      id: "oportunet",
      title: "Oportunet",
      theme: "moss",
      icon: "folder",
      cardFacts: ["Collaboration", "Complete", "HTML, CSS, JS, Firebase"],
      media: [
        {
          src: "assets/images/oportunet1.png",
          alt: "Oportunet homepage and opportunity platform interface"
        },
        {
          src: "assets/images/oportunet2.png",
          alt: "Oportunet dashboard and application management screens"
        }
      ],
      kicker: "Completed team project",
      status: "Completed University Team Project",
      description:
        "Oportunet is a South African learnerships and skills development portal designed to connect job seekers with learnerships, internships, apprenticeships, employers, and training providers. The platform streamlines applications while allowing providers to manage opportunities, review applications, and monitor analytics.",
      features: [
        "User authentication",
        "Applicant profiles",
        "Opportunity listings",
        "Application tracking",
        "Recruiter dashboard",
        "Admin dashboard",
        "Notifications",
        "Analytics dashboard",
        "CSV export",
        "PDF export",
        "NQF integration"
      ],
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Firebase Authentication",
        "Firestore",
        "Firebase Functions",
        "EmailJS"
      ],
      learningsTitle: "What I Learned",
      learnings: [
        "Agile development",
        "CI/CD principles",
        "Software architecture",
        "Repository pattern",
        "Service layer pattern",
        "Team collaboration",
        "MVC-like design",
        "Large-scale project organization"
      ],
      meta: {
        Type: "Collaborative software engineering project",
        Role: "Team contributor",
        Focus: "Application workflow, dashboards, and maintainable structure"
      }
    },
    {
      id: "wits-ai-snake",
      title: "Wits AI Snake",
      theme: "forest",
      icon: "layers",
      cardFacts: ["University competition", "Complete", "Java, AI, Algorithms"],
      media: [
        {
          src: "assets/images/snake1.png",
          alt: "Wits AI Snake game board showing the snake agent environment"
        },
        {
          src: "assets/images/snake2.png",
          alt: "Wits AI Snake gameplay view with pathfinding and opponents"
        }
      ],
      kicker: "AI competition project",
      status: "Completed",
      description:
        "An intelligent AI Snake agent developed for the University of the Witwatersrand AI Snake Competition. The project focuses on creating an adaptive AI capable of surviving, competing, and eliminating opponents within a multiplayer environment.",
      features: [
        "A* pathfinding",
        "Safe mode",
        "Attack mode",
        "Space control",
        "Multi-agent AI",
        "Dynamic risk analysis",
        "Opponent prediction",
        "Adaptive behaviour"
      ],
      tech: ["Java", "Algorithms", "Artificial Intelligence", "Data Structures"],
      learningsTitle: "What I Learned",
      learnings: [
        "Heuristic search",
        "AI decision making",
        "Optimization",
        "Real-time algorithms",
        "Competitive programming"
      ],
      meta: {
        Type: "University AI competition project",
        Role: "Developer",
        Focus: "Pathfinding, risk analysis, and competitive strategy"
      }
    },
    {
      id: "foodbridge-sa",
      title: "FoodBridge SA",
      theme: "rust",
      icon: "tool",
      cardFacts: ["Personal", "In Progress", "React, Express, MySQL"],
      media: [
        {
          src: "assets/images/foodbridge1.png",
          alt: "FoodBridge SA landing page and food donation interface"
        },
        {
          src: "assets/images/foodbridge2.png",
          alt: "FoodBridge SA donation workflow and dashboard screens"
        }
      ],
      kicker: "In development",
      status: "Currently In Development",
      description:
        "FoodBridge SA is a web application connecting food providers, NGOs, and delivery volunteers to reduce food waste while helping feed homeless communities. Providers donate excess food to NGOs, and volunteers transport food for distribution.",
      features: [
        "Food provider workflows",
        "NGO coordination",
        "Delivery volunteer participation",
        "Role-based system design",
        "Authentication planning",
        "Donation and distribution flow"
      ],
      tech: ["React", "JavaScript", "Express", "MySQL"],
      learningsTitle: "Focus Areas",
      learnings: [
        "Full stack development",
        "Authentication",
        "Role-based systems",
        "Software architecture"
      ],
      meta: {
        Type: "Full stack web application",
        Role: "Developer",
        Focus: "Food donation coordination and role-based workflows"
      }
    },
    {
      id: "uniapply-sa",
      title: "UniApply SA",
      theme: "taupe",
      icon: "school",
      cardFacts: ["Collaboration", "In Progress", "Node.js, PostgreSQL"],
      media: [
        {
          src: "assets/images/UniApply1.png",
          alt: "UniApply SA student application interface"
        },
        {
          src: "assets/images/UniApply2.png",
          alt: "UniApply SA application dashboard and upload flow"
        }
      ],
      kicker: "Team project",
      status: "Currently In Development Team Project",
      description:
        "UniApply SA is a platform designed to simplify university applications for Grade 12 students, including authentication, student applications, document uploads, and secure backend architecture.",
      features: [
        "Student authentication",
        "Student application workflows",
        "Document uploads",
        "Secure backend architecture",
        "Frontend deployment on Vercel",
        "Express REST API",
        "Service layer",
        "Repository layer"
      ],
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Supabase",
        "Cloudinary",
        "Vercel",
        "Render"
      ],
      learningsTitle: "Current Focus",
      learnings: [
        "Authentication",
        "Student applications",
        "Document uploads",
        "Secure backend architecture"
      ],
      meta: {
        Type: "Collaborative full stack project",
        Role: "Team contributor",
        Focus: "Applications, document handling, and backend structure"
      }
    },
    {
      id: "personal-portfolio",
      title: "Personal Portfolio",
      theme: "charcoal",
      icon: "panel",
      cardFacts: ["Personal", "Complete", "HTML, CSS, JS"],
      kicker: "Portfolio project",
      status: "Completed",
      description:
        "A modern software engineering portfolio built to showcase my technical skills, projects, and professional journey.",
      features: [
        "Responsive layout",
        "Featured project carousel",
        "Project detail modal",
        "Skills and journey sections",
        "Accessible contact links"
      ],
      tech: ["HTML", "CSS", "JavaScript"],
      learningsTitle: "Focus Areas",
      learnings: ["Responsive design", "Modern UI", "Performance", "Accessibility"],
      meta: {
        Type: "Personal portfolio",
        Role: "Designer and developer",
        Focus: "Project storytelling and frontend polish"
      }
    },
    {
      id: "country-explorer",
      title: "Country Explorer",
      theme: "moss",
      icon: "globe",
      cardFacts: ["Personal", "Complete", "JS, Serverless API"],
      media: [
        {
          src: "assets/images/country1.png",
          alt: "Country Explorer search interface with country details"
        },
        {
          src: "assets/images/country2.png",
          alt: "Country Explorer detailed country information screen"
        }
      ],
      kicker: "API project",
      status: "Completed",
      description:
        "A responsive web application that allows users to search for countries, view detailed geopolitical information, and explore neighboring countries.",
      features: [
        "Country search",
        "Border country navigation",
        "Population statistics",
        "Language information",
        "Currency information",
        "Responsive design",
        "Serverless backend architecture",
        "Secure API key management"
      ],
      tech: ["HTML", "CSS", "JavaScript", "Vercel Serverless Functions"],
      learningsTitle: "Focus Areas",
      learnings: [
        "API-backed search",
        "Responsive UI design",
        "Serverless backend architecture",
        "Secure API key management"
      ],
      meta: {
        Type: "Responsive web application",
        Role: "Developer",
        Focus: "Country data exploration and secure API access"
      }
    },
    {
      id: "music-tracker",
      title: "Music Tracker",
      theme: "rust",
      icon: "music",
      cardFacts: ["Practice project", "Skill-building", "JavaScript"],
      media: [
        {
          src: "assets/images/music1.png",
          alt: "Music Tracker interface for browsing tracked music"
        },
        {
          src: "assets/images/music2.png",
          alt: "Music Tracker detailed music tracking screen"
        }
      ],
      kicker: "Skill-building project",
      status: "Skill-building Project",
      description:
        "A smaller project focused on strengthening JavaScript development skills while exploring music tracking functionality.",
      features: [
        "Music tracking interface",
        "JavaScript interaction practice",
        "Frontend state handling",
        "Small project iteration"
      ],
      tech: ["JavaScript"],
      learningsTitle: "Focus Areas",
      learnings: [
        "JavaScript fundamentals",
        "User interface interaction",
        "Incremental project building"
      ],
      meta: {
        Type: "Practice project",
        Role: "Developer",
        Focus: "JavaScript skill development"
      }
    }
  ],

  skills: [
    {
      title: "Programming & Engineering",
      items: [
        "Python, Java, C++, C, JavaScript",
        "Data Structures, Algorithms, Algorithm Analysis",
        "Clean Code, Maintainability, Debugging",
        "Software Design and Architecture"
      ]
    },
    {
      title: "Web & Data",
      items: [
        "HTML, CSS, React, Node.js, Express",
        "REST APIs, Firebase, Firestore, Supabase",
        "MySQL, PostgreSQL, Vercel, Render",
        "Responsive Interfaces and Serverless Functions"
      ]
    },
    {
      title: "AI & Collaboration",
      items: [
        "Artificial Intelligence and Optimization",
        "Pathfinding, Heuristic Search, Risk Analysis",
        "Team Collaboration and Technical Communication",
        "Tutoring, Mentorship, Adaptability"
      ]
    }
  ],

  journey: [
    {
      title: "Final Year and COMS1 Tutor",
      date: "2026",
      description:
        "Became a First Year Computer Science Tutor while building projects such as Oportunet, FoodBridge SA, UniApply SA, Country Explorer, and this portfolio."
    },
    {
      title: "Artificial Intelligence and Software Development",
      date: "2025",
      description:
        "Focused on AI, algorithm design, optimization, mobile development, and software engineering through projects including Wits AI Snake and a donation mobile application."
    },
    {
      title: "First Year at Wits",
      date: "2024",
      description:
        "Started Computer Science at the University of the Witwatersrand and completed algorithm-focused projects including a Sudoku Solver and BFS shortest path project."
    },
    {
      title: "Grade 12 Foundation",
      date: "2023",
      description:
        "Completed Grade 12 with an 85% average, achieved 100% in Mathematics, and volunteered as a Mathematics and Physical Sciences tutor."
    }
  ],

  education: [
    {
      school: "University of the Witwatersrand",
      date: "2024 - Present",
      degree: "Computer Science, Final Year Computer Science Student",
      description:
        "Focused on Machine Learning, Parallel Computing, Software Design, Full Stack Development, and Software Architecture."
    },
    {
      school: "Grade 12 Umalusi Certificate",
      date: "2023",
      degree: "85% average with 100% in Mathematics",
      description:
        "Built a strong analytical foundation and volunteered as a Mathematics and Physical Sciences tutor for Grade 12 learners."
    }
  ],

  hireMe: {
    eyebrow: "Why hire me",
    title: "Reliable Foundations, Practical Delivery",
    highlight:
      "I combine academic depth, collaborative project experience, and a habit of building software I can explain, maintain, and improve.",
    reasons: [
      {
        title: "Strong Software Engineering Foundation",
        description:
          "My projects cover AI, algorithms, full stack applications, clean code, debugging, and maintainable development practices."
      },
      {
        title: "Collaborative Team Experience",
        description:
          "I have worked on team projects such as Oportunet and UniApply SA, contributing through communication, version control, and shared problem solving."
      },
      {
        title: "Effective Use of AI",
        description:
          "I use AI strategically to improve productivity while still understanding the architecture, code, debugging process, and long-term maintainability."
      },
      {
        title: "Strong Problem Solver",
        description:
          "Wits AI Snake strengthened my ability to solve complex algorithmic problems with pathfinding, optimization, and strategic decision making."
      },
      {
        title: "Adaptable Learner",
        description:
          "I pick up new technologies quickly, from React and cloud services to unfamiliar frameworks and project requirements."
      },
      {
        title: "Teaching and Communication",
        description:
          "Tutoring first-year Computer Science students has improved my ability to explain technical concepts clearly and patiently."
      }
    ]
  },

  about: {
    eyebrow: "About me",
    title: "Building Useful, Maintainable Software",
    paragraphs: [
      "I am a passionate Software Engineering student who enjoys building software that makes a real impact. Throughout my university journey I have worked on individual and collaborative projects ranging from Artificial Intelligence and algorithms to full stack web applications.",
      "I have built multiple production-quality projects while continuously improving my understanding of software architecture, clean code principles, design patterns, debugging, and modern development practices. Beyond technical skills, I enjoy collaborating with others, mentoring students, and constantly learning new technologies."
    ],
    facts: [
      "Final Year Computer Science Student",
      "University of the Witwatersrand",
      "7+ Software Engineering Projects",
      "First Year Computer Science Tutor",
      "Strong interest in Artificial Intelligence",
      "Full Stack Web Development"
    ]
  },

  contact: {
    eyebrow: "Contact",
    title: "Let's Connect",
    subtitle:
      "I am available for graduate software engineering roles, internships, full stack opportunities, AI projects, backend development, and collaborative software engineering teams.",
    actions: [
      { label: "Email me", href: "mailto:mashudumavhila@gmail.com", style: "primary" },
      { label: "Call me", href: "tel:+27691995022", style: "secondary" },
      {
        label: "Download CV",
        href: "assets/docs/output.pdf",
        style: "secondary",
        download: "Mashudu-Mavhila-CV.pdf"
      }
    ],
    details: [
      "Mashudu Mavhila",
      "Final Year Computer Science Student",
      "University of the Witwatersrand",
      "mashudumavhila@gmail.com",
      "069 199 5022",
      "South Africa"
    ],
    footer: "Copyright 2026 Mashudu Mavhila. Built with precision at Wits."
  }
};
