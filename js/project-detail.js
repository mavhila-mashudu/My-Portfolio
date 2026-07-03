(function () {
  const data = window.portfolioData;
  const detailLayout = document.getElementById("project-detail-layout");
  const pageTitle = document.getElementById("project-page-title");
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id");
  const project = data && data.projects.find((item) => item.id === projectId);

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

    if (options.className) element.className = options.className;
    if (options.text) element.textContent = options.text;

    if (options.attrs) {
      Object.entries(options.attrs).forEach(([name, value]) => {
        element.setAttribute(name, value);
      });
    }

    return element;
  }

  function getAboutParagraphs(item) {
    const paragraphs = [];

    if (item.description) paragraphs.push(item.description);
    if (item.meta && item.meta.Focus) paragraphs.push(`The project focuses on ${item.meta.Focus}.`);
    if (item.features && item.features.length) {
      paragraphs.push(`Key work includes ${item.features.slice(0, 5).join(", ")}.`);
    }
    if (item.tech && item.tech.length) {
      paragraphs.push(`The technology stack includes ${item.tech.join(", ")}.`);
    }

    return paragraphs;
  }

  function createSlider(item) {
    const fragment = document.createDocumentFragment();
    const slider = createElement("div", { className: "project-preview-slider" });
    const media = item.media || [];

    if (!media.length) {
      slider.appendChild(createElement("div", {
        className: "project-preview-empty",
        text: "Project preview coming soon."
      }));
      fragment.appendChild(slider);
      return fragment;
    }

    const track = createElement("div", { className: "project-preview-track" });
    const dots = createElement("div", {
      className: "project-slider-dots",
      attrs: { "aria-label": `${item.title} screenshots` }
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

    media.forEach((image, index) => {
      const figure = createElement("figure", {
        className: "project-preview-slide",
        attrs: { "aria-hidden": index === 0 ? "false" : "true" }
      });

      figure.appendChild(createElement("img", {
        attrs: {
          src: image.src,
          alt: image.alt || `${item.title} screenshot ${index + 1}`,
          loading: index === 0 ? "eager" : "lazy",
          decoding: "async"
        }
      }));
      track.appendChild(figure);

      dots.appendChild(createElement("button", {
        className: index === 0 ? "active" : "",
        attrs: {
          type: "button",
          "aria-label": `Show screenshot ${index + 1}`,
          "aria-pressed": index === 0 ? "true" : "false"
        }
      }));
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

  function createAboutSection(item) {
    const section = createElement("section", { className: "project-about-section" });
    section.appendChild(createElement("h1", { text: "About the Project" }));

    getAboutParagraphs(item).forEach((paragraph, index) => {
      section.appendChild(createElement("p", {
        text: paragraph,
        attrs: index === 0 ? { id: "project-description" } : {}
      }));
    });

    return section;
  }

  function createLanguageList(item) {
    const list = createElement("ul", { className: "language-list" });

    (item.tech || []).forEach((name) => {
      const iconClass = techIconMap[name] || "language-fallback-icon";
      const icon = createElement("i", {
        className: iconClass,
        text: iconClass === "language-fallback-icon" ? name.slice(0, 2).toUpperCase() : "",
        attrs: { "aria-hidden": "true" }
      });
      const listItem = createElement("li");

      listItem.append(icon, createElement("span", { text: name }));
      list.appendChild(listItem);
    });

    return list;
  }

  function createActionLinks(item) {
    const actions = createElement("div", { className: "project-side-buttons" });
    const projectLink = createElement("a", {
      className: "project-link-button",
      text: "Link to Project",
      attrs: { href: item.projectLink || "#" }
    });
    const demoLink = createElement("a", {
      className: "project-demo-button",
      text: "Link to Demo",
      attrs: { href: item.demoLink || "#" }
    });

    [projectLink, demoLink].forEach((link) => {
      if (link.getAttribute("href") !== "#") {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noreferrer");
      }
    });

    actions.addEventListener("click", (event) => {
      const link = event.target instanceof Element ? event.target.closest("a") : null;
      if (link && link.getAttribute("href") === "#") event.preventDefault();
    });

    actions.append(projectLink, demoLink);
    return actions;
  }

  function renderNotFound() {
    if (pageTitle) pageTitle.textContent = "Project not found";
    if (!detailLayout) return;

    const section = createElement("section", { className: "project-about-section" });
    section.append(
      createElement("h1", { text: "Project not found" }),
      createElement("p", { text: "The selected project could not be found." })
    );
    detailLayout.appendChild(section);
  }

  if (!detailLayout || !data) return;

  if (!project) {
    renderNotFound();
    return;
  }

  document.title = `${project.title} | Mashudu Mavhila`;
  if (pageTitle) pageTitle.textContent = project.title;

  const left = createElement("div", { className: "project-detail-left" });
  const side = createElement("aside", { className: "project-detail-side" });
  const languagesBox = createElement("div", { className: "languages-box" });

  left.append(createSlider(project), createAboutSection(project));
  languagesBox.append(createElement("h2", { text: "Languages Used" }), createLanguageList(project));
  side.append(languagesBox, createActionLinks(project));
  detailLayout.replaceChildren(left, side);
})();
