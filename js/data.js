window.portfolioData = {
  hero: {
    name: "Mashudu Mavhila",
    role: "Software Engineer",
    summary:
      "Final-year Computer Science student at the University of the Witwatersrand.",
    highlights: [
      { value: "3+", label: "Quality projects" },
      { value: "Wits", label: "Final-year CS" },
      { value: "COMS1", label: "Tutor and mentor" }
    ]
  },

  sections: {
    projects: {
      label: "01 - Selected Projects"
    },
    skills: {
      label: "02 - Skills"
    },
    journey: {
      label: "03 - Journey"
    },
    service: {
      label: "04 - Why Me"
    },
    about: {
      label: "05 - About"
    },
    contact: {
      label: "06 - Contact"
    }
  },

  projects: [
    {
      title: "Oportunet",
      status: "Completed",
      type: "University Team Project",
      cardDate: "2026",
      projectLink: "https://oportu-net.vercel.app/",
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
      description:
        "Oportunet is a South African learnerships and skills development portal designed to connect job seekers with learnerships, internships, apprenticeships, employers, and training providers. The platform streamlines applications while allowing providers to manage opportunities, review applications, and monitor analytics.",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Firebase",
        "EmailJS"
      ]
    },
    {
      title: "Wits AI Snake",
      status: "Completed",
      type: "University AI Competition Project",
      cardDate: "2025",
      projectLink: "https://github.com/mavhila-mashudu/AI-snake",
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
      description:
        "An intelligent AI Snake agent developed for the University of the Witwatersrand AI Snake Competition. The project focuses on creating an adaptive AI capable of surviving, competing, and eliminating opponents within a multiplayer environment.",
      tech: ["Java", "Algorithms"]
    },
    {
      title: "FoodBridge SA",
      status: "Currently In Development",
      type: "Personal Full Stack Project",
      cardDate: "Present",
      projectLink: "https://food-bridge-sa.vercel.app/",
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
      description:
        "FoodBridge SA is a web application connecting food providers, NGOs, and delivery volunteers to reduce food waste while helping feed homeless communities. Providers donate excess food to NGOs, and volunteers transport food for distribution.",
      tech: ["React", "HTML", "CSS", "MySQL"]
    },
    {
      title: "UniApply SA",
      status: "Currently In Development",
      type: "Team Project",
      cardDate: "Present",
      projectLink: "https://project-lzhx2.vercel.app/",
      media: [
        {
          src: "assets/images/uni1.png",
          alt: "UniApply SA student application interface"
        },
        {
          src: "assets/images/uni2.png",
          alt: "UniApply SA application dashboard and upload flow"
        }
      ],
      description:
        "UniApply SA is a platform for applying to South African university undergraduate programs. The application includes document uploads, secure authentication, and backend architecture.",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "PostgreSQL",
        "Supabase",
        "Vercel"
      ]
    },
    {
      title: "Country Explorer",
      status: "Completed",
      type: "Personal Web Application",
      cardDate: "2026",
      projectLink: "https://api-consumption-and-dom-manipulatio.vercel.app/",
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
      description:
        "A responsive web application that allows users to search for countries, view detailed geopolitical information, and explore neighboring countries.",
      tech: ["HTML", "CSS", "JavaScript", "Vercel"]
    },
    {
      title: "Personal Portfolio",
      status: "Completed",
      type: "Personal Website",
      cardDate: "2026",
      projectLink: "index.html",
      media: [
        {
          src: "assets/images/portfolio1.png",
          alt: "Personal Portfolio home and project showcase interface"
        },
        {
          src: "assets/images/portfolio2.png",
          alt: "Personal Portfolio about and contact section interface"
        }
      ],
      description:
        "A professional software engineering portfolio designed to present my projects, technical skills, journey, experience, and contact information in a clean, polished web experience.",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Music Tracker",
      status: "Skill-building",
      type: "Practice Project",
      cardDate: "2026",
      projectLink: "https://music-tracker-delta.vercel.app/",
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
      description:
        "A smaller project focused on strengthening JavaScript development skills while exploring music tracking functionality.",
      tech: ["HTML", "CSS", "JavaScript"]
    }
  ],

  skills: {
    technical: {
      title: "Technical Skills",
      subtitle:
        "Languages, frameworks, platforms, and engineering foundations I use to build maintainable software.",
      groups: [
        {
          title: "Languages",
          items: [
            { name: "Python", icon: "devicon-python-plain colored" },
            { name: "Java", icon: "devicon-java-plain colored" },
            { name: "C++", icon: "devicon-cplusplus-plain colored" },
            { name: "C", icon: "devicon-c-plain colored" },
            { name: "JavaScript", icon: "devicon-javascript-plain colored" }
          ]
        },
        {
          title: "Frontend & Backend",
          items: [
            { name: "HTML", icon: "devicon-html5-plain colored" },
            { name: "CSS", icon: "devicon-css3-plain colored" },
            { name: "React", icon: "devicon-react-original colored" },
            { name: "Node.js", icon: "devicon-nodejs-plain colored" },
            { name: "Express", icon: "devicon-express-original" }
          ]
        },
        {
          title: "Data, Cloud & Tools",
          items: [
            { name: "Firebase", icon: "devicon-firebase-plain colored" },
            { name: "Supabase", icon: "devicon-supabase-plain colored" },
            { name: "MySQL", icon: "devicon-mysql-plain colored" },
            { name: "Vercel", icon: "devicon-vercel-original" }
          ]
        }
      ]
    },
    soft: {
      title: "Soft Skills",
      subtitle:
        "The collaboration habits and communication skills that help teams move clearly and consistently.",
      items: [
        {
          title: "Team Collaboration",
          description:
            "Contributing in group projects with shared ownership, steady communication, and respect for team workflows."
        },
        {
          title: "Technical Communication",
          description:
            "Explaining implementation choices, tradeoffs, bugs, and project progress in a clear, practical way."
        },
        {
          title: "Tutoring & Mentorship",
          description:
            "Supporting first-year Computer Science students by breaking down difficult ideas with patience."
        },
        {
          title: "Adaptability",
          description:
            "Learning unfamiliar tools quickly and adjusting to new project requirements without losing momentum."
        },
        {
          title: "Problem Solving",
          description:
            "Using structured thinking to debug, reason through algorithms, and turn messy requirements into working software."
        },
        {
          title: "Accountability",
          description:
            "Following through on tasks, documenting decisions, and caring about code that can be maintained after delivery."
        }
      ]
    }
  },

  journey: [
    {
      year: "2026",
      stage: "Final Year",
      items: [
        "Became COMS1 Tutor",
        "Completed Oportunet",
        "Completed Country Explorer",
        "Started UniApply SA",
        "Started FoodBridge SA",
        "Gained JavaScript, HTML, and CSS skills",
        "Improved teamwork and collaboration",
        "Improved problem solving"
      ],
      skills: ["JavaScript", "HTML", "CSS", "Teamwork", "Collaboration", "Problem Solving"]
    },
    {
      year: "2025",
      stage: "Second Year",
      items: [
        "Completed Donation Mobile App",
        "Completed Wits AI Snake Competition",
        "Gained Java and MySQL skills",
        "Improved teamwork and collaboration",
        "Improved problem solving"
      ],
      skills: ["Java", "MySQL", "Teamwork", "Collaboration", "Problem Solving"]
    },
    {
      year: "2024",
      stage: "First Year",
      items: [
        "Completed Sudoku Project",
        "Completed Finding the Shortest Path Project",
        "Gained problem solving",
        "Gained adaptability",
        "Did voluntary vacation work as a tutor for Grade 12 students"
      ],
      skills: ["Problem Solving", "Adaptability"]
    },
    {
      year: "2023",
      stage: "Matric",
      items: [
        "Achieved 85% Average",
        "Achieved 100% in Mathematics"
      ],
      skills: []
    }
  ],

  service: {
    reasons: [
      {
        icon: "code",
        title: "Strong Software Engineering Foundation",
        description:
          "I understand programming fundamentals, data structures, algorithms, software design, and clean code principles."
      },
      {
        icon: "rocket",
        title: "Real Project Experience",
        description:
          "I have built and contributed to practical projects such as Oportunet, AI Snake, Country Explorer, FoodBridge SA, UniApply SA, and my personal portfolio."
      },
      {
        icon: "brain",
        title: "Problem Solver",
        description:
          "I enjoy breaking down difficult problems and building solutions step by step, especially in AI, algorithms, and full stack development."
      },
      {
        icon: "users",
        title: "Team Collaboration",
        description:
          "I have experience working in team projects, communicating ideas, fixing issues, and contributing to shared codebases."
      },
      {
        icon: "learn",
        title: "Fast Learner",
        description:
          "I am continuously improving my skills in JavaScript, React, backend development, and system design."
      },
      {
        icon: "message",
        title: "Teaching and Communication",
        description:
          "As a COMS1 tutor, I help students understand programming concepts, which has improved my communication and mentoring skills."
      }
    ]
  },

  about: {
    eyebrow: "ABOUT ME",
    heading: "A final-year Computer Science student passionate about building useful, scalable, and well-designed software.",
    paragraphs: [
      "I am Mashudu Mavhila, a final-year Computer Science student at the University of the Witwatersrand. I enjoy building software that solves real problems, from web applications and AI projects to platforms that support education, food donation, and career opportunities.",
      "My interests include Full Stack Software Engineering, System Design, and building clean user interfaces. I enjoy learning how systems are structured, how users interact with products, and how to turn ideas into working applications.",
      "I have worked on projects such as Oportunet, AI Snake, Country Explorer, FoodBridge SA, UniApply SA, and my personal portfolio. These projects helped me improve my problem-solving, teamwork, communication, and software design skills.",
      "As a COMS1 tutor, I also enjoy helping other students understand programming concepts. Teaching has helped me become better at explaining technical ideas clearly and working with different types of learners."
    ],
    closing:
      "I am currently focused on growing as a Software Engineer and building projects that show strong fundamentals, clean design, and real-world impact.",
    profile: {
      name: "Mashudu Mavhila",
      role: "Final-Year Computer Science Student",
      photo: {
        src: "assets/images/me.png",
        alt: "Mashudu Mavhila"
      },
      universityLogo: {
        src: "assets/icons/wits_logo.png",
        alt: "University of the Witwatersrand logo"
      },
      facts: [
        { label: "University", value: "University of the Witwatersrand" },
        { label: "Focus", value: "Software Engineering" },
        { label: "Experience", value: "COMS1 Tutor" },
        { label: "Projects", value: "3+ Quality Projects" }
      ],
      tags: [
        "JavaScript Software Engineer"
      ]
    }
  },

  contact: {
    title: "Let's Connect",
    subtitle:
      "I am available for collaboration, graduate software engineering roles and internships. I come with a growing mindset, let's connect.",
    actions: [
      { label: "Email me", href: "mailto:mashudumavhila@gmail.com", style: "primary" }
    ],
    details: [
      "Mashudu Mavhila",
      "Final Year Computer Science Student",
      "University of the Witwatersrand",
      "mashudumavhila@gmail.com"
    ],
    socials: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/mavhila-mashudu",
        icon: "linkedin"
      },
      {
        label: "GitHub",
        href: "https://github.com/mavhila-mashudu",
        icon: "github"
      }
    ],
    footer: "Copyright 2026 Mashudu Mavhila."
  }
};
