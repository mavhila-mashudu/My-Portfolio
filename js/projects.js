const projects = {
  "oportunet": {
    title: "Oportunet",
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
  "wits-ai-snake": {
    title: "Wits AI Snake",
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
  "foodbridge-sa": {
    title: "FoodBridge SA",
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
  "uniapply-sa": {
    title: "UniApply SA",
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
  "personal-portfolio": {
    title: "Personal Portfolio",
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
  "country-explorer": {
    title: "Country Explorer",
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
  "music-tracker": {
    title: "Music Tracker",
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
};

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carousel");
  const cards = carousel ? Array.from(carousel.querySelectorAll(".card")) : [];
  const positionClasses = ["pos-1", "pos-2", "pos-3", "pos-4", "pos-5"];
  let rotateTimer;

  function updatePositions() {
    cards.forEach((card, index) => {
      card.classList.remove(...positionClasses);
      card.classList.add(positionClasses[index]);
    });
  }

  function rotateCarousel() {
    if (!cards.length) return;

    const firstCard = cards.shift();
    cards.push(firstCard);
    updatePositions();
  }

  function startCarousel() {
    if (rotateTimer || !cards.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    rotateTimer = window.setInterval(rotateCarousel, 3500);
  }

  function stopCarousel() {
    if (rotateTimer) {
      window.clearInterval(rotateTimer);
      rotateTimer = null;
    }
  }

  if (cards.length) {
    updatePositions();
    startCarousel();

    carousel.addEventListener("mouseenter", stopCarousel);
    carousel.addEventListener("mouseleave", startCarousel);
    carousel.addEventListener("focusin", stopCarousel);
    carousel.addEventListener("focusout", startCarousel);
  }

  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("close-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalStatus = document.getElementById("modal-status");
  const modalDescription = document.getElementById("modal-description");
  const modalFeatures = document.getElementById("modal-features");
  const modalTech = document.getElementById("modal-tech");
  const modalMeta = document.getElementById("modal-meta");
  const modalLearnings = document.getElementById("modal-learnings");
  const modalLearningsTitle = document.getElementById("modal-learnings-title");
  const featuresSection = document.getElementById("features-section");
  const learningsSection = document.getElementById("learnings-section");
  let lastFocusedElement = null;

  function fillList(container, items) {
    container.replaceChildren();

    items.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      container.appendChild(listItem);
    });
  }

  function fillTech(items) {
    modalTech.replaceChildren();

    items.forEach((item) => {
      const tag = document.createElement("span");
      tag.textContent = item;
      modalTech.appendChild(tag);
    });
  }

  function fillMeta(details) {
    modalMeta.replaceChildren();

    Object.entries(details).forEach(([label, value]) => {
      const term = document.createElement("dt");
      const description = document.createElement("dd");

      term.textContent = label;
      description.textContent = value;

      modalMeta.append(term, description);
    });
  }

  function toggleSection(section, items) {
    section.hidden = items.length === 0;
  }

  function openProject(projectId) {
    const project = projects[projectId];
    if (!project || !modal) return;

    lastFocusedElement = document.activeElement;
    modalTitle.textContent = project.title;
    modalStatus.textContent = project.status;
    modalDescription.textContent = project.description;
    modalLearningsTitle.textContent = project.learningsTitle;

    fillList(modalFeatures, project.features);
    fillList(modalLearnings, project.learnings);
    fillTech(project.tech);
    fillMeta(project.meta);
    toggleSection(featuresSection, project.features);
    toggleSection(learningsSection, project.learnings);

    modal.hidden = false;
    document.body.classList.add("modal-open");
    closeBtn.focus();
  }

  function closeProject() {
    if (!modal || modal.hidden) return;

    modal.hidden = true;
    document.body.classList.remove("modal-open");

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  document.querySelectorAll(".project-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      openProject(trigger.dataset.projectId);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeProject);
  }

  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeProject();
      }
    });
  }

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeProject();
    }
  });
});
