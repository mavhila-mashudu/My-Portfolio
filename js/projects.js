(function () {
  const data = window.portfolioData;

  if (!data) {
    return;
  }

  const projects = data.projects || [];
  const projectMap = new Map(projects.map((project) => [project.id, project]));
  const detailDataById = {
    oportunet: {
      category: "COLLABORATION",
      status: "Completed",
      type: "University Team Project",
      role: "Frontend, Testing and UI Polish",
      summary:
        "A South African learnerships and skills development portal that connects job seekers with learnerships, internships, apprenticeships, employers, and training providers.",
      about: [
        "Oportunet is a South African Learnerships and Skills Development Portal designed to connect job seekers with learnerships, internships, apprenticeships, employers, and training providers.",
        "The project supports different user roles, including applicants, recruiters, and administrators. Applicants can manage profiles, browse opportunities, apply for positions, and track their applications. Recruiters can post and manage opportunities, while admins can monitor users, opportunities, and platform activity.",
        "The system uses a hybrid client-server architecture with a page-based frontend and a layered service-repository structure. The UI layer is separated from shared helpers, services, repositories, and Firebase backend services.",
        "This project demonstrates teamwork, role-based features, authentication, dashboard development, application tracking, notification handling, and maintainable frontend architecture."
      ],
      architecture: [
        "Hybrid client-server architecture",
        "Page-based frontend",
        "Service layer pattern",
        "Repository pattern",
        "Module pattern",
        "Firebase backend services"
      ],
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Firebase Authentication",
        "Firestore",
        "Firebase Functions",
        "EmailJS"
      ]
    },
    "wits-ai-snake": {
      category: "ARTIFICIAL INTELLIGENCE",
      status: "Completed",
      type: "University AI Competition Project",
      role: "AI Agent Developer",
      summary:
        "An intelligent Snake agent built for the Wits AI Snake competition, using pathfinding, safe movement, space control, and aggressive multi-agent strategy.",
      about: [
        "AI Snake is an intelligent Snake agent developed for the AI Snake competition hosted at the University of the Witwatersrand. The goal of the agent is to compete in a multi-snake environment where each snake must survive, grow, and strategically eliminate opponents.",
        "The agent receives structured input from the competition system every turn. This includes the board dimensions, apple position, snake positions, snake lengths, obstacles, and current game state. It then builds a matrix-based representation of the board so it can reason about safe and unsafe areas.",
        "The main strategy is based on the A* pathfinding algorithm. The snake uses A* to calculate the fastest and safest route to the apple while avoiding snake bodies, obstacles, head-to-head collisions, crowded regions, and possible traps.",
        "When the apple is unreachable or too risky, the agent switches to Safe Mode. In this mode, it focuses on survival by choosing moves that maximise reachable space and reduce the chance of being trapped.",
        "This project demonstrates artificial intelligence, heuristic search, real-time decision-making, risk analysis, multi-agent strategy, and algorithm design."
      ],
      features: [
        "A* pathfinding",
        "Safe Mode",
        "Attack Mode",
        "Space control",
        "Multi-agent AI",
        "Dynamic risk analysis",
        "Opponent prediction",
        "Adaptive behaviour",
        "Matrix-based board representation",
        "Head-to-head collision avoidance",
        "Trap avoidance"
      ],
      architecture: [
        "Real-time decision-making loop",
        "Grid/matrix board representation",
        "Heuristic search",
        "Fallback survival strategy",
        "Risk-based movement evaluation"
      ],
      tech: [
        "Java",
        "Algorithms",
        "Artificial Intelligence",
        "Data Structures",
        "A* Pathfinding",
        "Multi-Agent Strategy"
      ]
    },
    "foodbridge-sa": {
      category: "SOCIAL IMPACT",
      status: "In Development",
      type: "Personal Full Stack Project",
      role: "Full Stack Developer",
      summary:
        "A food rescue web app connecting food providers, NGOs, and delivery volunteers to reduce food waste and support homeless communities.",
      about: [
        "FoodBridge SA is a web application designed to connect food providers, NGOs, and delivery volunteers so that surplus food can be donated instead of wasted.",
        "The goal of the project is to reduce food waste while helping feed homeless communities. Food businesses such as restaurants, shops, bakeries, farms, and supermarkets can post surplus food donations. NGOs and community organisations can then claim donations and arrange collection.",
        "The current project is organised as a two-part JavaScript application, with a React + Vite frontend and an Express/MySQL-oriented backend scaffold.",
        "This project demonstrates social-impact product thinking, UI design, semantic React development, role-based platform planning, and preparation for a multi-tier REST-style architecture."
      ],
      features: [
        "Food donor role",
        "NGO/community kitchen role",
        "Volunteer driver role",
        "Landing page",
        "Role preview cards",
        "How-it-works section",
        "Impact statistics",
        "Responsive UI",
        "Express backend scaffold",
        "MySQL-oriented backend planning"
      ],
      architecture: [
        "React + Vite frontend",
        "Express backend scaffold",
        "Multi-tier project structure",
        "REST API preparation",
        "Role-based dashboard planning"
      ],
      tech: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Express",
        "MySQL",
        "Vite"
      ]
    },
    "uniapply-sa": {
      category: "EDUCATION TECH",
      status: "In Development",
      type: "Team Project",
      role: "Frontend and System Planning",
      summary:
        "A platform designed to help South African matric students manage university applications, documents, APS calculations, recommendations, fees, tracking, and notifications.",
      about: [
        "UniApply SA is a planned web application for South African matric students who need one place to manage university applications.",
        "The platform is designed to help students create profiles, manage academic records, upload supporting documents, browse universities and programmes, calculate university-specific APS scores, receive programme recommendations, and track applications.",
        "The planned system also includes an application selection cart, fees, payments, tracking, notifications, and admin processing tools.",
        "The architecture uses a Vercel frontend, Supabase Auth for authentication, a Render REST API, a service layer, a repository layer, and Render PostgreSQL for application data."
      ],
      features: [
        "Student profiles",
        "Academic records",
        "Supporting document uploads",
        "University browsing",
        "Programme browsing",
        "University-specific APS calculations",
        "Programme recommendations",
        "Application selection cart",
        "Fees and payments",
        "Application tracking",
        "Notifications",
        "Admin processing tools"
      ],
      architecture: [
        "Vercel frontend",
        "Supabase Auth",
        "Render REST API",
        "Express routes and controllers",
        "Service layer",
        "Repository layer",
        "Render PostgreSQL",
        "Cloudinary file storage adapter"
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
      ]
    },
    "personal-portfolio": {
      category: "PERSONAL BRAND",
      status: "Completed",
      type: "Personal Website",
      role: "Frontend Developer",
      summary:
        "A modern software engineering portfolio built to showcase technical skills, projects, journey, and professional growth.",
      about: [
        "Personal Portfolio is a modern software engineering portfolio built to showcase my technical skills, projects, and professional journey.",
        "The portfolio presents my identity as a final-year Computer Science student, software engineering candidate, AI enthusiast, full stack learner, and problem solver.",
        "The project includes sections for home, projects, skills, journey, why hire me, about me, contact, and footer.",
        "This project demonstrates frontend development, responsive design, personal branding, portfolio organisation, and attention to user interface design."
      ],
      architecture: [
        "Static frontend structure",
        "Reusable project data",
        "Modal-based project details",
        "Responsive layout",
        "Clean HTML, CSS, and JavaScript separation"
      ],
      tech: [
        "HTML",
        "CSS",
        "JavaScript"
      ]
    },
    "country-explorer": {
      category: "SERVERLESS APP",
      status: "Completed",
      type: "Personal Web Application",
      role: "Frontend and Serverless API Developer",
      summary:
        "A responsive web app for searching countries, viewing geopolitical information, and exploring bordering nations through secure serverless API routes.",
      about: [
        "Country Explorer is a responsive web application that allows users to search for countries, view detailed geopolitical data, and explore bordering nations.",
        "The application allows users to query specific countries and dynamically view important details such as population, subregion, capitals, spoken languages, and currencies.",
        "It also supports relational border mapping by calculating and displaying interactive links to neighbouring countries that share a land border with the selected country.",
        "The project uses a serverless backend architecture hosted on Vercel. This separates client-side rendering from third-party API communication and keeps API keys secure outside the browser."
      ],
      features: [
        "Country search",
        "Granular country data",
        "Population statistics",
        "Subregion information",
        "Capital city information",
        "Language information",
        "Currency information",
        "Border country navigation",
        "Global country directory",
        "Loading states",
        "Error handling",
        "Secure API key management"
      ],
      architecture: [
        "Serverless backend architecture",
        "Vercel serverless functions",
        "Secure environment variables",
        "Frontend/backend separation of concerns",
        "Internal API routes",
        "Third-party API integration"
      ],
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Vercel",
        "Serverless Functions",
        "REST Countries API"
      ]
    },
    "music-tracker": {
      category: "JAVASCRIPT APP",
      status: "Completed",
      type: "Personal Practice Project",
      role: "Frontend Developer",
      summary:
        "A small JavaScript web app for managing songs, classifying them by decade, filtering by artist or year, and storing data in local storage.",
      about: [
        "Music Tracker is a web application that allows users to manage and explore a music collection.",
        "Users can add songs by entering the artist name, song name, and year of release. The app automatically determines the decade in which each song was released and displays each song with its artist, title, and decade.",
        "The application stores songs in local storage, which means the saved songs remain available even after refreshing the browser.",
        "The project also includes filtering by artist, filtering by minimum or maximum year, and grouping songs by year for easier browsing."
      ],
      features: [
        "Add songs",
        "Artist name input",
        "Song name input",
        "Release year input",
        "Automatic decade classification",
        "Local storage persistence",
        "Filter by artist",
        "Filter by minimum year",
        "Filter by maximum year",
        "Group songs by year",
        "Semantic HTML structure"
      ],
      architecture: [
        "Static frontend application",
        "Browser local storage",
        "DOM-based rendering",
        "Client-side filtering",
        "Semantic HTML"
      ],
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Local Storage"
      ]
    }
  };
  const techIconMap = {
    HTML: "devicon-html5-plain colored",
    CSS: "devicon-css3-plain colored",
    JavaScript: "devicon-javascript-plain colored",
    React: "devicon-react-original colored",
    Java: "devicon-java-plain colored",
    Firebase: "devicon-firebase-plain colored",
    Firestore: "devicon-firebase-plain colored",
    "Firebase Authentication": "devicon-firebase-plain colored",
    "Firebase Functions": "devicon-firebase-plain colored",
    Express: "devicon-express-original colored",
    MySQL: "devicon-mysql-plain colored",
    "Node.js": "devicon-nodejs-plain colored",
    PostgreSQL: "devicon-postgresql-plain colored",
    Supabase: "devicon-supabase-plain colored",
    Vercel: "devicon-vercel-original colored",
    Vite: "devicon-vitejs-plain colored"
  };

  function createElement(tag, options = {}) {
    const element = document.createElement(tag);

    if (options.className) {
      element.className = options.className;
    }

    if (options.text) {
      element.textContent = options.text;
    }

    if (options.html) {
      element.innerHTML = options.html;
    }

    if (options.attrs) {
      Object.entries(options.attrs).forEach(([name, value]) => {
        element.setAttribute(name, value);
      });
    }

    return element;
  }

  function createArrowIcon() {
    return createElement("span", {
      className: "arrow-icon",
      html:
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>'
    });
  }

  function createDetailsIcon() {
    return createElement("span", {
      className: "details-icon",
      attrs: { "aria-hidden": "true" },
      html:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M8 13h8"></path><path d="M8 17h5"></path></svg>'
    });
  }

  function getStatusTone(text = "") {
    const normalized = text.toLowerCase();

    if (normalized.includes("progress") || normalized.includes("development")) {
      return "warning";
    }

    if (normalized.includes("complete")) {
      return "success";
    }

    return "neutral";
  }

  function getProjectCover(project) {
    return project.media && project.media.length ? project.media[0] : null;
  }

  function createProjectImage(project, className, options = {}) {
    const cover = getProjectCover(project);
    const isProjectCardImage = className === "project-visual";
    const cardImages = isProjectCardImage ? (project.media || []).slice(0, 2) : [];
    const wrapper = createElement("div", {
      className: cover
        ? `${className} has-image${cardImages.length > 1 ? " is-rotating" : ""}`
        : className,
      attrs: cover ? {} : { "aria-hidden": "true" }
    });

    if (cover && cardImages.length > 1) {
      const track = createElement("div", { className: "project-visual-track" });
      const rotatingImages = [...cardImages, cardImages[0]];

      rotatingImages.forEach((image, index) => {
        track.appendChild(
          createElement("img", {
            className: `project-visual-frame project-visual-frame-${(index % cardImages.length) + 1}`,
            attrs: {
              src: image.src,
              alt: image.alt,
              loading: index === 0 ? options.loading || "lazy" : "lazy",
              decoding: "async"
            }
          })
        );
      });

      wrapper.appendChild(track);
    } else if (cover) {
      wrapper.appendChild(
        createElement("img", {
          attrs: {
            src: cover.src,
            alt: cover.alt,
            loading: options.loading || "lazy",
            decoding: "async"
          }
        })
      );
    }

    return wrapper;
  }

  function createProjectTrigger(project, label, className) {
    const button = createElement("button", {
      className,
      text: label,
      attrs: {
        type: "button",
        "data-project-id": project.id
      }
    });

    button.appendChild(createArrowIcon());
    return button;
  }

  function createProjectAffordance(label) {
    const labelElement = createElement("span", { className: "card-link-label" });
    const affordance = createElement("span", {
      className: "card-link",
      attrs: { "aria-hidden": "true" }
    });

    labelElement.append(createDetailsIcon(), document.createTextNode(label));
    affordance.append(labelElement, createArrowIcon());
    return affordance;
  }

  function renderCarousel() {
    const carousel = document.getElementById("carousel");
    const controls = document.getElementById("carousel-controls");
    if (!carousel || !controls) return;

    carousel.replaceChildren();
    controls.replaceChildren();

    const featuredProjects = projects.filter((project) => Boolean(getProjectCover(project)));

    featuredProjects.forEach((project, index) => {
      const slide = createElement("button", {
        className: "slider-slide project-trigger",
        attrs: {
          type: "button",
          "data-project-id": project.id,
          "aria-label": `Open details for ${project.title}`,
          "aria-hidden": index === 0 ? "false" : "true",
          tabindex: index === 0 ? "0" : "-1"
        }
      });

      slide.style.transform = `translateX(${index * 100}%)`;
      slide.appendChild(createProjectImage(project, "slider-media", { loading: index === 0 ? "eager" : "lazy" }));

      carousel.appendChild(slide);
    });

    featuredProjects.forEach((project, index) => {
      controls.appendChild(
        createElement("button", {
          className: index === 0 ? "carousel-dot is-active" : "carousel-dot",
          attrs: {
            type: "button",
            "data-slide-index": String(index),
            "aria-label": `Show ${project.title}`
          }
        })
      );
    });
  }

  function renderProjectGrid() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    grid.replaceChildren();

    projects.forEach((project, index) => {
      const article = createElement("article", {
        className: `static-card ${index < 2 ? "is-featured" : "is-compact"} project-trigger reveal-item`,
        attrs: {
          role: "button",
          tabindex: "0",
          "data-project-id": project.id,
          "aria-label": `Open details for ${project.title}`
        }
      });
      const body = createElement("div", { className: "static-card-body" });
      const titleRow = createElement("div", { className: "card-title-row" });
      const statusText = project.cardFacts && project.cardFacts[1] || project.status || "";
      const titleMain = createElement("div", { className: "card-title-main" });
      titleMain.dataset.index = String(index + 1).padStart(2, "0");
      const statusBadge = createElement("span", {
        className: "card-status-badge",
        text: [project.status || statusText, project.kicker || project.cardFacts && project.cardFacts[0]]
          .filter(Boolean)
          .join(" | ")
      });
      const dateBadge = createElement("span", {
        className: "card-date-badge",
        text: project.cardDate || project.meta && project.meta.Date || ""
      });
      const statusLine = createElement("div", { className: "project-status-line" });
      const detailRow = createElement("div", { className: "card-detail-row" });

      titleMain.append(
        createElement("h3", { className: "card-title", text: project.title }),
        statusBadge
      );

      titleRow.append(
        titleMain,
        dateBadge
      );

      statusLine.append(
        createElement("span", { className: `status-dot ${getStatusTone(statusText)}` }),
        createElement("span", { text: project.description })
      );

      (project.tech || project.cardFacts || []).slice(0, index < 2 ? 4 : 3).filter(Boolean).forEach((detail) => {
        detailRow.appendChild(createElement("span", { className: "card-detail-item", text: detail }));
      });

      body.append(
        titleRow,
        statusLine,
        detailRow,
        createProjectAffordance("View details")
      );

      article.append(createProjectImage(project, "project-visual"), body);
      grid.appendChild(article);
    });
  }

  function getProjectDetails(project) {
    const details = detailDataById[project.id] || {};
    const technologyNames = project.tech || details.tech || [];

    return {
      ...details,
      ...project,
      features: project.features || details.features || [],
      technologies: project.technologies || details.technologies || technologyNames.map((name) => ({ name })),
      about: details.about || [project.description].filter(Boolean),
      architecture: details.architecture || [project.meta && project.meta.Focus].filter(Boolean),
      type: project.meta && project.meta.Type || details.type || "Project",
      role: project.meta && project.meta.Role || details.role || "Developer",
      projectLink: project.projectLink || details.projectLink || "#",
      demoLink: project.demoLink || details.demoLink || "#"
    };
  }

  function getProjectImages(project) {
    const media = project.media || [];
    return media.map((item, index) => ({
      src: item.src,
      alt: item.alt || `${project.title} screenshot ${index + 1}`
    }));
  }

  function createTechIcon(technology) {
    const iconClass = techIconMap[technology.name] || "language-fallback-icon";
    const icon = createElement("i", {
      className: iconClass,
      attrs: { "aria-hidden": "true" },
      text: iconClass === "language-fallback-icon" ? technology.name.slice(0, 2).toUpperCase() : ""
    });

    return icon;
  }

  function createModalSlider(project, images) {
    const fragment = document.createDocumentFragment();
    const slider = createElement("div", { className: "project-preview-slider" });

    if (!images.length) {
      slider.appendChild(
        createElement("div", {
          className: "project-preview-empty",
          text: "Project preview coming soon."
        })
      );
      fragment.appendChild(slider);
      return fragment;
    }

    const track = createElement("div", { className: "project-preview-track" });
    const dots = createElement("div", {
      className: "project-slider-dots",
      attrs: { "aria-label": `${project.title} screenshots` }
    });

    function setActiveSlide(activeIndex) {
      track.style.transform = `translateX(-${activeIndex * 100}%)`;

      [...track.children].forEach((slide, index) => {
        slide.setAttribute("aria-hidden", index === activeIndex ? "false" : "true");
      });

      [...dots.children].forEach((dot, index) => {
        dot.classList.toggle("active", index === activeIndex);
        dot.setAttribute("aria-pressed", index === activeIndex ? "true" : "false");
      });
    }

    images.forEach((image, index) => {
      const figure = createElement("figure", {
        className: "project-preview-slide",
        attrs: { "aria-hidden": index === 0 ? "false" : "true" }
      });
      figure.appendChild(
        createElement("img", {
          attrs: {
            src: image.src,
            alt: image.alt,
            loading: index === 0 ? "eager" : "lazy",
            decoding: "async"
          }
        })
      );
      track.appendChild(figure);

      dots.appendChild(
        createElement("button", {
          className: index === 0 ? "active" : "",
          attrs: {
            type: "button",
            "aria-label": `Show screenshot ${index + 1}`,
            "aria-pressed": index === 0 ? "true" : "false"
          }
        })
      );
    });

    dots.addEventListener("click", (event) => {
      const dot = event.target instanceof Element ? event.target.closest("button") : null;
      if (!dot) return;
      setActiveSlide([...dots.children].indexOf(dot));
    });

    slider.appendChild(track);
    fragment.append(slider, dots);
    return fragment;
  }

  function createAboutSection(project) {
    const section = createElement("section", { className: "project-about-section" });
    section.appendChild(createElement("h2", { text: "About the Project" }));

    project.about.forEach((paragraph, index) => {
      section.appendChild(
        createElement("p", {
          text: paragraph,
          attrs: index === 0 ? { id: "project-description" } : {}
        })
      );
    });

    return section;
  }

  function createTechList(technologies) {
    const list = createElement("ul", { className: "language-list" });

    technologies.forEach((technology) => {
      const item = createElement("li");
      item.append(createTechIcon(technology), createElement("span", { text: technology.name }));
      list.appendChild(item);
    });

    return list;
  }

  function createActionLinks(project) {
    const actions = createElement("div", { className: "project-side-buttons" });
    const projectLink = createElement("a", {
      className: "project-link-button",
      text: "Link to Project",
      attrs: { href: project.projectLink || "#" }
    });
    const demoLink = createElement("a", {
      className: "project-demo-button",
      text: "Link to Demo",
      attrs: { href: project.demoLink || "#" }
    });

    if ((project.projectLink || "#") !== "#") {
      projectLink.setAttribute("target", "_blank");
      projectLink.setAttribute("rel", "noreferrer");
    }

    if ((project.demoLink || "#") !== "#") {
      demoLink.setAttribute("target", "_blank");
      demoLink.setAttribute("rel", "noreferrer");
    }

    actions.append(projectLink, demoLink);
    actions.addEventListener("click", (event) => {
      const link = event.target instanceof Element ? event.target.closest("a") : null;
      if (link && link.getAttribute("href") === "#") {
        event.preventDefault();
      }
    });

    return actions;
  }

  let activeProjectModal = null;
  let previouslyFocusedElement = null;

  function createProjectInfoBox(title, items) {
    const box = createElement("section", { className: "languages-box" });
    const list = createElement("ul", { className: "project-info-list" });

    box.appendChild(createElement("h3", { text: title }));
    items.filter((item) => item && item.value).forEach((item) => {
      const row = createElement("li");
      row.append(
        createElement("span", { text: item.label }),
        createElement("strong", { text: item.value })
      );
      list.appendChild(row);
    });

    box.appendChild(list);
    return box;
  }

  function closeProjectModal() {
    if (!activeProjectModal) return;

    activeProjectModal.remove();
    activeProjectModal = null;
    document.body.classList.remove("modal-open");
    document.removeEventListener("keydown", handleProjectModalKeydown);

    if (previouslyFocusedElement && typeof previouslyFocusedElement.focus === "function") {
      previouslyFocusedElement.focus();
    }
  }

  function handleProjectModalKeydown(event) {
    if (event.key === "Escape") {
      closeProjectModal();
    }
  }

  function openProjectModal(projectId) {
    const sourceProject = projectMap.get(projectId);
    if (!sourceProject) return;

    closeProjectModal();
    previouslyFocusedElement = document.activeElement;

    const project = getProjectDetails(sourceProject);
    const overlay = createElement("div", { className: "project-modal-overlay" });
    const card = createElement("article", {
      className: "project-detail-card",
      attrs: {
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "project-modal-title",
        "aria-describedby": "project-description"
      }
    });
    const closeButton = createElement("button", {
      className: "project-close",
      html: "&times;",
      attrs: {
        type: "button",
        "aria-label": "Close project details"
      }
    });
    const left = createElement("div", { className: "project-detail-left" });
    const side = createElement("aside", { className: "project-detail-side" });
    const header = createElement("section", { className: "project-about-section project-modal-heading" });
    const techBox = createElement("section", { className: "languages-box" });

    header.append(
      createElement("p", {
        className: "project-modal-kicker",
        text: [project.status, project.kicker].filter(Boolean).join(" | ")
      }),
      createElement("h1", { text: project.title, attrs: { id: "project-modal-title" } }),
      createElement("p", { text: project.summary || project.description })
    );

    techBox.append(
      createElement("h3", { text: "Technologies" }),
      createTechList(project.technologies || [])
    );

    left.append(
      createModalSlider(project, getProjectImages(project)),
      header,
      createAboutSection(project)
    );

    side.append(
      createProjectInfoBox("Project Details", [
        { label: "Status", value: project.status },
        { label: "Type", value: project.type },
        { label: "Role", value: project.role },
        { label: "Date", value: project.cardDate }
      ]),
      techBox,
      createActionLinks(project)
    );

    card.append(closeButton, left, side);
    overlay.appendChild(card);
    document.body.appendChild(overlay);
    document.body.classList.add("modal-open");
    activeProjectModal = overlay;

    closeButton.addEventListener("click", closeProjectModal);
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) {
        closeProjectModal();
      }
    });
    document.addEventListener("keydown", handleProjectModalKeydown);
    closeButton.focus();
  }

  function setupProjectNavigation() {
    function openProject(projectId) {
      openProjectModal(projectId);
    }

    document.addEventListener("click", (event) => {
      const trigger = event.target instanceof Element
        ? event.target.closest(".project-trigger")
        : null;
      if (trigger) {
        event.preventDefault();
        openProject(trigger.dataset.projectId);
      }
    });

    document.addEventListener("keydown", (event) => {
      const trigger = event.target instanceof Element
        ? event.target.closest(".project-trigger")
        : null;
      if (!trigger || trigger.tagName === "BUTTON") return;

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProject(trigger.dataset.projectId);
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderCarousel();
    renderProjectGrid();
    setupProjectNavigation();
    document.dispatchEvent(new CustomEvent("portfolio:projects-ready"));
  });
})();
