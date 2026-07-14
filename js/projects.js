(function () {
  // Read the shared portfolio data prepared by data.js.
  const data = window.portfolioData;

  // Stop project rendering if data.js is missing or failed to load.
  if (!data) {
    return;
  }

  // Keep a local project list so the renderer can safely handle missing data.
  const projects = data.projects || [];

  // Creates an element and applies optional class names, text, HTML, and attributes.
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

  // Builds the diagonal arrow icon used in project card affordances.
  function createArrowIcon() {
    return createElement("span", {
      className: "arrow-icon",
      html:
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>'
    });
  }

  // Builds the info icon used when a project card opens an in-page message.
  function createInfoIcon() {
    return createElement("span", {
      className: "info-icon",
      html:
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 11v5"></path><path d="M12 8h.01"></path></svg>'
    });
  }

  // Gets the exact URL that a project card should open.
  function getProjectHref(project) {
    return project.projectLink || "#";
  }

  // Builds accessible link attributes for project cards.
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

  // Builds accessible button attributes for project cards that show a message.
  function getProjectButtonAttrs(project) {
    return {
      type: "button",
      "aria-label": `Show message for ${project.title}`
    };
  }

  // Creates or reuses the live toast element used for project-card messages.
  function getProjectMessageToast() {
    let toast = document.querySelector(".project-message-toast");

    if (!toast) {
      toast = createElement("div", {
        className: "project-message-toast",
        attrs: {
          role: "status",
          "aria-live": "polite"
        }
      });
      toast.hidden = true;
      document.body.appendChild(toast);
    }

    return toast;
  }

  // Shows the project message briefly without navigating away from the page.
  function showProjectMessage(message) {
    const toast = getProjectMessageToast();
    window.clearTimeout(showProjectMessage.hideTimer);

    toast.textContent = message;
    toast.hidden = false;
    window.requestAnimationFrame(() => {
      toast.classList.add("is-visible");
    });

    showProjectMessage.hideTimer = window.setTimeout(() => {
      toast.classList.remove("is-visible");

      window.setTimeout(() => {
        if (!toast.classList.contains("is-visible")) {
          toast.hidden = true;
        }
      }, 220);
    }, 2600);
  }

  // Returns the first project image so each card has a cover image.
  function getProjectCover(project) {
    return project.media && project.media.length ? project.media[0] : null;
  }

  // Builds the project image area, including the two-image sliding track when available.
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
      // Duplicate the first frame at the end so the CSS slide animation can loop smoothly.
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

  // Creates the small visual affordance on each project card.
  function createProjectAffordance(project) {
    const affordance = createElement("span", {
      className: "card-link",
      attrs: { "aria-hidden": "true" }
    });

    affordance.appendChild(project.popupMessage ? createInfoIcon() : createArrowIcon());
    return affordance;
  }

  // Renders every project from data.js as a direct external/internal link card.
  function renderProjectGrid() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    grid.replaceChildren();

    projects.forEach((project, index) => {
      const showsMessage = Boolean(project.popupMessage);
      // Most cards are links; the portfolio card becomes a button because it shows a message.
      const card = createElement(showsMessage ? "button" : "a", {
        className: `static-card reveal-item${showsMessage ? " is-message-card" : ""}`,
        attrs: showsMessage
          ? getProjectButtonAttrs(project)
          : getProjectLinkAttrs(project, "Open")
      });

      if (showsMessage) {
        card.addEventListener("click", () => {
          showProjectMessage(project.popupMessage);
        });
      }

      const body = createElement("div", { className: "static-card-body" });
      const titleRow = createElement("div", { className: "card-title-row" });
      const titleMain = createElement("div", { className: "card-title-main" });
      // Numbering is rendered with CSS from this data attribute.
      titleMain.dataset.index = String(index + 1).padStart(2, "0");
      const statusBadge = createElement("span", {
        className: "card-status-badge",
        text: [project.status, project.type]
          .filter(Boolean)
          .join(" | ")
      });
      const dateBadge = createElement("span", {
        className: "card-date-badge",
        text: project.cardDate || ""
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
        createElement("span", { text: project.description })
      );

      // Show fewer tech tags on lower-priority cards to keep each card compact.
      (project.tech || []).slice(0, index < 2 ? 4 : 3).filter(Boolean).forEach((detail) => {
        detailRow.appendChild(createElement("span", { className: "card-detail-item", text: detail }));
      });

      body.append(
        titleRow,
        statusLine,
        detailRow,
        createProjectAffordance(project)
      );

      card.append(createProjectImage(project, "project-visual"), body);
      grid.appendChild(card);
    });
  }

  // Render project cards once the HTML container exists, then trigger reveal animations.
  document.addEventListener("DOMContentLoaded", () => {
    renderProjectGrid();
    document.dispatchEvent(new CustomEvent("portfolio:projects-ready"));
  });
})();
