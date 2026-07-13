(function () {
  const data = window.portfolioData;

  if (!data) {
    return;
  }

  const projects = data.projects || [];

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

  function createProjectLinkIcon() {
    return createElement("span", {
      className: "project-link-icon",
      attrs: { "aria-hidden": "true" },
      html:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M8 13h8"></path><path d="M8 17h5"></path></svg>'
    });
  }

  function getProjectHref(project) {
    return project.projectLink || "#";
  }

  function getProjectLinkAttrs(project, label) {
    const href = getProjectHref(project);
    const attrs = {
      href,
      "aria-label": `${label} ${project.title}`
    };

    if (href !== "#") {
      attrs.target = "_blank";
      attrs.rel = "noopener noreferrer";
    }

    return attrs;
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

  function createProjectAffordance(label) {
    const labelElement = createElement("span", { className: "card-link-label" });
    const affordance = createElement("span", {
      className: "card-link",
      attrs: { "aria-hidden": "true" }
    });

    labelElement.append(createProjectLinkIcon(), document.createTextNode(label));
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
      const slide = createElement("a", {
        className: "slider-slide",
        attrs: {
          ...getProjectLinkAttrs(project, "Open"),
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
      const article = createElement("a", {
        className: `static-card ${index < 2 ? "is-featured" : "is-compact"} reveal-item`,
        attrs: {
          ...getProjectLinkAttrs(project, "Open")
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
        createProjectAffordance("Open project")
      );

      article.append(createProjectImage(project, "project-visual"), body);
      grid.appendChild(article);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderCarousel();
    renderProjectGrid();
    document.dispatchEvent(new CustomEvent("portfolio:projects-ready"));
  });
})();
