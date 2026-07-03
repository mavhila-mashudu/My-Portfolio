(function () {
  const data = window.portfolioData;

  if (!data) {
    return;
  }

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

  function createActionLink(action, className) {
    const attrs = { href: action.href };

    if (action.target) {
      attrs.target = action.target;
      attrs.rel = "noopener";
    }

    if (action.download) {
      attrs.download = action.download;
    }

    return createElement("a", {
      className,
      text: action.label,
      attrs
    });
  }

  function renderSectionHeader(containerId, section) {
    const container = document.getElementById(containerId);
    if (!container || !section) return;

    const headingText = containerId === "projects-header" ? "4+ Quality Projects" : section.title;
    const headerContent = [
      createElement("p", { className: "eyebrow", text: section.eyebrow }),
      createElement("h2", { className: "section-title", text: headingText }),
      createElement("p", { className: "section-subtitle", text: section.subtitle })
    ];

    if (containerId === "projects-header") {
      const rating = createElement("div", {
        className: "project-rating",
        attrs: { "aria-label": "4 out of 5 quality rating" }
      });

      Array.from({ length: 5 }).forEach((_, index) => {
        rating.appendChild(
          createElement("span", {
            className: index < 4 ? "rating-star is-filled" : "rating-star",
            attrs: { "aria-hidden": "true" },
            html:
              '<svg viewBox="0 0 24 24"><path d="m12 2 3.09 6.26 6.91 1-5 4.87 1.18 6.87L12 17.77 5.82 21 7 14.13l-5-4.87 6.91-1L12 2Z"></path></svg>'
          })
        );
      });

      headerContent.push(rating);
    }

    container.replaceChildren(...headerContent);
  }

  function renderHero() {
    const copy = document.getElementById("hero-copy");
    const board = document.getElementById("hero-board");
    const hero = data.hero;
    if (!copy || !board || !hero) return;

    const highlights = createElement("ul", { className: "hero-highlights" });
    hero.highlights.forEach((highlight) => {
      const item = createElement("li");
      item.append(
        createElement("strong", { text: highlight.value }),
        createElement("span", { text: highlight.label })
      );
      highlights.appendChild(item);
    });

    copy.replaceChildren(
      createElement("h1", { text: `Hi, I'm ${hero.name}` }),
      createElement("h2", { className: "gradient-text", text: hero.role }),
      createElement("p", { className: "subtitle", text: hero.summary }),
      highlights
    );

    const showcasedProjects = data.projects
      .filter((project) => project.media && project.media.length)
      .slice(0, 4);
    const showcase = createElement("div", { className: "hero-showcase" });

    showcasedProjects.forEach((project, index) => {
      const media = project.media[0];
      const tile = createElement("div", {
        className: `hero-showcase-tile tile-${index + 1}`
      });

      tile.appendChild(
        createElement("img", {
          attrs: {
            src: media.src,
            alt: media.alt,
            loading: index === 0 ? "eager" : "lazy",
            decoding: "async"
          }
        })
      );
      showcase.appendChild(tile);
    });

    board.replaceChildren(showcase);
  }

  function renderSkills() {
    const grid = document.getElementById("skills-grid");
    if (!grid) return;

    grid.replaceChildren();
    data.skills.forEach((category) => {
      const card = createElement("article", { className: "skill-category reveal-item" });
      const list = createElement("ul");

      category.items.forEach((item) => {
        list.appendChild(createElement("li", { text: item }));
      });

      card.append(createElement("h3", { text: category.title }), list);
      grid.appendChild(card);
    });
  }

  function renderJourney() {
    const timeline = document.getElementById("timeline");
    if (!timeline) return;

    timeline.replaceChildren();
    data.journey.forEach((entry) => {
      const item = createElement("article", { className: "timeline-item reveal-item" });
      const content = createElement("div", { className: "timeline-content" });

      content.append(
        createElement("h3", { text: entry.title }),
        createElement("p", { className: "date", text: entry.date }),
        createElement("p", { text: entry.description })
      );

      item.append(createElement("div", { className: "timeline-dot" }), content);
      timeline.appendChild(item);
    });
  }

  function renderEducation() {
    const list = document.getElementById("education-list");
    if (!list) return;

    list.replaceChildren();
    data.education.forEach((entry) => {
      const card = createElement("article", { className: "edu-card reveal-item" });
      const header = createElement("div", { className: "edu-header" });

      header.append(
        createElement("h3", { text: entry.school }),
        createElement("span", { className: "badge", text: entry.date })
      );

      card.append(
        header,
        createElement("p", { className: "degree", text: entry.degree }),
        createElement("p", { className: "description", text: entry.description })
      );

      list.appendChild(card);
    });
  }

  function renderHireMe() {
    const container = document.getElementById("hire-me-content");
    if (!container) return;

    const section = data.hireMe;
    const reasons = createElement("div", { className: "reasons-grid" });

    section.reasons.forEach((reason) => {
      const card = createElement("article", { className: "reason reveal-item" });
      card.append(
        createElement("h3", { text: reason.title }),
        createElement("p", { text: reason.description })
      );
      reasons.appendChild(card);
    });

    const highlight = createElement("div", { className: "highlight-text" });
    highlight.appendChild(createElement("p", { text: section.highlight }));

    container.replaceChildren(
      createElement("p", { className: "eyebrow", text: section.eyebrow }),
      createElement("h2", { className: "section-title", text: section.title }),
      highlight,
      reasons
    );
  }

  function renderAbout() {
    const container = document.getElementById("about-content");
    if (!container) return;

    const about = data.about;
    const heading = createElement("div", { className: "about-heading" });
    heading.append(
      createElement("p", { className: "eyebrow", text: about.eyebrow }),
      createElement("h2", { className: "section-title", text: about.title })
    );

    const copy = createElement("div", { className: "about-copy" });
    about.paragraphs.forEach((paragraph) => {
      copy.appendChild(createElement("p", { text: paragraph }));
    });

    const facts = createElement("ul", { className: "quick-facts" });
    about.facts.forEach((fact) => {
      facts.appendChild(createElement("li", { text: fact }));
    });
    copy.appendChild(facts);

    container.replaceChildren(heading, copy);
  }

  function renderContact() {
    const container = document.getElementById("contact-content");
    const footer = document.getElementById("site-footer");
    if (!container || !footer) return;

    const contact = data.contact;
    const links = createElement("div", { className: "contact-links" });
    contact.actions.forEach((action) => {
      links.appendChild(
        createActionLink(
          action,
          action.style === "primary" ? "contact-btn" : "contact-btn secondary"
        )
      );
    });

    const details = createElement("address", { className: "contact-details" });
    contact.details.forEach((detail) => {
      const isEmail = detail.includes("@");
      const isPhone = detail.replace(/\s/g, "").match(/^0\d+$/);
      const tag = isEmail || isPhone ? "a" : "span";
      const attrs = isEmail
        ? { href: `mailto:${detail}` }
        : isPhone
          ? { href: `tel:+27${detail.replace(/\s/g, "").slice(1)}` }
          : {};

      details.appendChild(createElement(tag, { text: detail, attrs }));
    });

    container.replaceChildren(
      createElement("p", { className: "eyebrow", text: contact.eyebrow }),
      createElement("h2", { className: "section-title", text: contact.title }),
      createElement("p", { className: "contact-subtitle", text: contact.subtitle }),
      links,
      details
    );

    footer.textContent = contact.footer;
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderHero();
    renderSectionHeader("projects-header", data.sections.projects);
    renderSectionHeader("skills-header", data.sections.skills);
    renderSectionHeader("journey-header", data.sections.journey);
    renderSectionHeader("education-header", data.sections.education);
    renderSkills();
    renderJourney();
    renderEducation();
    renderHireMe();
    renderAbout();
    renderContact();

    document.dispatchEvent(new CustomEvent("portfolio:content-ready"));
  });
})();
