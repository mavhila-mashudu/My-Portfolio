(function () {
  // Read the portfolio content object that data.js exposes globally.
  const data = window.portfolioData;

  // Stop rendering if the data file failed to load before this script.
  if (!data) {
    return;
  }

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

  // Builds a standard anchor link for contact actions such as email.
  function createActionLink(action, className) {
    return createElement("a", {
      className,
      text: action.label,
      attrs: { href: action.href }
    });
  }

  // Renders the small numbered label used at the top of each main portfolio section.
  function renderSectionHeader(containerId, section) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (!section || !section.label) return;

    container.replaceChildren(
      createElement("p", {
        className: "eyebrow",
        text: section.label
      })
    );
  }

  // Renders the hero text and highlight counters from data.js.
  function renderHero() {
    const copy = document.getElementById("hero-copy");
    const board = document.getElementById("hero-board");
    const hero = data.hero;
    if (!copy || !hero) return;

    const highlights = createElement("ul", { className: "hero-highlights" });
    hero.highlights.forEach((highlight) => {
      const item = createElement("li");
      const value = createElement("strong", { text: highlight.value });

      item.append(value, createElement("span", { text: highlight.label }));
      highlights.appendChild(item);
    });

    copy.replaceChildren(
      createElement("h1", { text: `Hi, I'm ${hero.name}` }),
      createElement("h2", { className: "gradient-text", text: hero.role }),
      createElement("p", { className: "subtitle", text: hero.summary }),
      highlights
    );

    if (board) {
      board.replaceChildren();
      board.hidden = true;
    }
  }

  // Renders technical and soft skills into their two-column section layout.
  function renderSkills() {
    const grid = document.getElementById("skills-grid");
    if (!grid) return;

    const skills = data.skills;
    if (!skills || !skills.technical || !skills.soft) return;

    const technicalPanel = createElement("article", {
      className: "skills-panel technical-skills-panel reveal-item"
    });
    const technicalHeader = createElement("div", { className: "skills-panel-header" });
    technicalHeader.append(
      createElement("p", { className: "skills-panel-kicker", text: "01" }),
      createElement("h3", { text: skills.technical.title }),
      createElement("p", { text: skills.technical.subtitle })
    );

    const technicalGroups = createElement("div", { className: "technical-skills-grid" });
    skills.technical.groups.forEach((group) => {
      // Each technical group becomes a titled list of skill tokens.
      const groupCard = createElement("section", { className: "technical-skill-group" });
      const list = createElement("ul", { className: "skill-token-list" });

      group.items.forEach((item) => {
        // Each skill token optionally shows a Devicon icon before the skill name.
        const token = createElement("li", {
          className: "skill-token"
        });

        if (item.icon) {
          token.appendChild(
            createElement("i", {
              className: item.icon,
              attrs: { "aria-hidden": "true" }
            })
          );
        }

        token.appendChild(createElement("span", { text: item.name }));
        list.appendChild(token);
      });

      groupCard.append(createElement("h4", { text: group.title }), list);
      technicalGroups.appendChild(groupCard);
    });

    technicalPanel.append(technicalHeader, technicalGroups);

    const softPanel = createElement("article", {
      className: "skills-panel soft-skills-panel reveal-item"
    });
    const softHeader = createElement("div", { className: "skills-panel-header" });
    softHeader.append(
      createElement("p", { className: "skills-panel-kicker", text: "02" }),
      createElement("h3", { text: skills.soft.title }),
      createElement("p", { text: skills.soft.subtitle })
    );

    const softGrid = createElement("div", { className: "soft-skills-grid" });
    skills.soft.items.forEach((item) => {
      // Each soft skill becomes a simple title and description card.
      const card = createElement("section", { className: "soft-skill-card" });
      card.append(
        createElement("h4", { text: item.title }),
        createElement("p", { text: item.description })
      );
      softGrid.appendChild(card);
    });

    softPanel.append(softHeader, softGrid);
    grid.replaceChildren(technicalPanel, softPanel);
  }

  // Renders the academic/project journey timeline from data.js.
  function renderJourney() {
    const timeline = document.getElementById("timeline");
    if (!timeline) return;

    timeline.replaceChildren();
    data.journey.forEach((entry, index) => {
      // Alternate side classes are kept for responsive timeline styling.
      const item = createElement("article", {
        className: `timeline-item reveal-item ${index % 2 === 0 ? "is-right" : "is-left"}`,
        attrs: { "aria-label": `${entry.year} ${entry.stage}` }
      });
      const content = createElement("div", { className: "timeline-content" });
      const header = createElement("div", { className: "timeline-card-header" });
      const list = createElement("ul", { className: "timeline-list" });

      header.append(
        createElement("span", { className: "timeline-year", text: entry.year }),
        createElement("h3", { text: entry.stage })
      );

      entry.items.forEach((text) => {
        list.appendChild(createElement("li", { text }));
      });

      content.append(header, list);

      if ((entry.skills || []).length) {
        // Add compact skill tags when a journey entry lists skills gained.
        const skills = createElement("ul", {
          className: "timeline-skill-tags",
          attrs: { "aria-label": `${entry.year} skills gained` }
        });

        entry.skills.forEach((skill) => {
          skills.appendChild(createElement("li", { text: skill }));
        });

        content.appendChild(skills);
      }

      item.append(createElement("div", { className: "timeline-dot" }), content);
      timeline.appendChild(item);
    });
  }

  // Renders the "Why Me" service/value cards with inline SVG icons.
  function renderService() {
    const container = document.getElementById("why-hire-content");
    if (!container) return;

    const section = data.service || data.hireMe;
    if (!section) return;
    // Local icon map keeps decorative SVGs out of data.js while still data-driving the card choice.
    const iconMap = {
      code:
        '<svg viewBox="0 0 24 24"><path d="m8 9-4 3 4 3"></path><path d="m16 9 4 3-4 3"></path><path d="m14 5-4 14"></path></svg>',
      rocket:
        '<svg viewBox="0 0 24 24"><path d="M4.5 16.5c-1 1-1.5 2.5-1.5 4.5 2 0 3.5-.5 4.5-1.5"></path><path d="M9 15 4 20"></path><path d="M14.5 4.5C17 2 20.5 2 22 2c0 1.5 0 5-2.5 7.5L12 17l-5-5 7.5-7.5Z"></path><path d="M15 9h.01"></path></svg>',
      brain:
        '<svg viewBox="0 0 24 24"><path d="M9 4.5a3 3 0 0 0-3 3v.2A3.5 3.5 0 0 0 4 14v1a4 4 0 0 0 4 4h1V4.5Z"></path><path d="M15 4.5a3 3 0 0 1 3 3v.2A3.5 3.5 0 0 1 20 14v1a4 4 0 0 1-4 4h-1V4.5Z"></path><path d="M9 9H7.5"></path><path d="M16.5 9H15"></path><path d="M9 14H7"></path><path d="M17 14h-2"></path></svg>',
      users:
        '<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
      learn:
        '<svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15Z"></path><path d="M8 7h8"></path><path d="M8 11h6"></path></svg>',
      message:
        '<svg viewBox="0 0 24 24"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"></path><path d="M8 9h8"></path><path d="M8 13h5"></path></svg>'
    };

    const reasons = createElement("div", { className: "why-hire-grid" });

    (section.reasons || []).forEach((reason) => {
      // Each reason card displays an icon, title, and short value statement.
      const card = createElement("article", { className: "why-card reveal-item" });
      card.append(
        createElement("span", {
          className: "why-icon",
          html: iconMap[reason.icon] || iconMap.code,
          attrs: { "aria-hidden": "true" }
        }),
        createElement("h3", { text: reason.title }),
        createElement("p", { text: reason.description })
      );
      reasons.appendChild(card);
    });

    const label = createElement("div", { className: "professional-section-label" });
    label.appendChild(
      createElement("p", { className: "professional-label-text", text: data.sections.service.label })
    );

    container.replaceChildren(
      label,
      reasons
    );
  }

  // Renders the about section copy, profile image, university mark, facts, and tags.
  function renderAbout() {
    const container = document.getElementById("about-content");
    if (!container) return;

    const about = data.about;
    const label = createElement("div", { className: "professional-section-label" });
    label.appendChild(
      createElement("p", { className: "professional-label-text", text: data.sections.about.label })
    );

    const grid = createElement("div", { className: "about-grid" });
    const copy = createElement("div", { className: "about-copy" });
    copy.append(
      createElement("p", { className: "section-kicker", text: about.eyebrow }),
      createElement("h3", { text: about.heading }),
      createElement("div", { className: "about-copy-rule", attrs: { "aria-hidden": "true" } })
    );

    about.paragraphs.forEach((paragraph) => {
      // Preserve paragraph order exactly as written in data.js.
      copy.appendChild(createElement("p", { text: paragraph }));
    });

    copy.appendChild(createElement("p", { className: "about-closing", text: about.closing }));

    const profile = createElement("aside", { className: "about-profile-card reveal-item" });
    const media = createElement("figure", { className: "about-profile-media" });
    media.appendChild(
      createElement("img", {
        attrs: {
          src: about.profile.photo.src,
          alt: about.profile.photo.alt,
          loading: "lazy",
          decoding: "async"
        }
      })
    );

    const identity = createElement("div", { className: "about-profile-identity" });
    identity.append(
      createElement("h3", { text: about.profile.name }),
      createElement("p", { className: "about-role", text: about.profile.role })
    );

    const universityMark = createElement("div", { className: "about-university-mark" });
    universityMark.appendChild(
      createElement("img", {
        attrs: {
          src: about.profile.universityLogo.src,
          alt: about.profile.universityLogo.alt,
          loading: "lazy",
          decoding: "async"
        }
      })
    );

    const facts = createElement("div", { className: "about-facts" });
    about.profile.facts.forEach((fact) => {
      // Facts are rendered as label/value rows in the profile panel.
      const item = createElement("div");
      const value = createElement("strong", { text: fact.value });

      item.append(createElement("span", { text: fact.label }), value);
      facts.appendChild(item);
    });

    const tags = createElement("div", { className: "about-tags" });
    about.profile.tags.forEach((tag) => {
      // Tags are small descriptive chips below the profile facts.
      tags.appendChild(createElement("span", { text: tag }));
    });

    profile.append(
      media,
      identity,
      universityMark,
      facts,
      tags
    );

    grid.append(copy, profile);
    container.replaceChildren(label, grid);
  }

  // Renders the contact call-to-action, social links, quick facts, and footer.
  function renderContact() {
    const container = document.getElementById("contact-content");
    const footer = document.getElementById("site-footer");
    if (!container || !footer) return;

    const contact = data.contact;
    // Local icon map provides all decorative contact and social icons.
    const iconMap = {
      email:
        '<svg viewBox="0 0 24 24"><path d="M4 6.5h16v11H4v-11Z"></path><path d="m4 7 8 6 8-6"></path></svg>',
      phone:
        '<svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7A2 2 0 0 1 22 16.9Z"></path></svg>',
      file:
        '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"></path><path d="M14 2v6h6"></path><path d="M9 15h6"></path><path d="M9 18h4"></path></svg>',
      user:
        '<svg viewBox="0 0 24 24"><path d="M20 21a8 8 0 0 0-16 0"></path><circle cx="12" cy="7" r="4"></circle></svg>',
      role:
        '<svg viewBox="0 0 24 24"><path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1"></path><path d="M3 8h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z"></path><path d="M3 13h18"></path></svg>',
      university:
        '<svg viewBox="0 0 24 24"><path d="m3 10 9-6 9 6"></path><path d="M5 10v9"></path><path d="M9 10v9"></path><path d="M15 10v9"></path><path d="M19 10v9"></path><path d="M3 19h18"></path></svg>',
      location:
        '<svg viewBox="0 0 24 24"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
      linkedin:
        '<svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"></path><path d="M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>',
      github:
        '<svg viewBox="0 0 24 24"><path d="M15 22v-3.9a3.4 3.4 0 0 0-.9-2.6c3 0 6.1-1.5 6.1-6.6 0-1.5-.5-2.7-1.4-3.7.1-.4.6-1.9-.2-3.7 0 0-1.2-.4-3.8 1.4a13.2 13.2 0 0 0-6.8 0C5.4.1 4.2.5 4.2.5c-.8 1.8-.3 3.3-.2 3.7A5.1 5.1 0 0 0 2.6 8c0 5.1 3.1 6.6 6.1 6.6a3.4 3.4 0 0 0-.9 2.6V22"></path><path d="M9 18c-3 .9-3-1.5-4.2-2"></path></svg>',
      arrow:
        '<svg viewBox="0 0 24 24"><path d="M5 12h14"></path><path d="m13 6 6 6-6 6"></path></svg>'
    };

    // Creates a decorative SVG wrapper for contact buttons and contact facts.
    function createContactIcon(name, className = "contact-icon") {
      return createElement("span", {
        className,
        html: iconMap[name],
        attrs: { "aria-hidden": "true" }
      });
    }

    const links = createElement("div", { className: "contact-links" });
    (contact.actions || []).forEach((action) => {
      // Choose the button icon from the link protocol.
      const icon = action.href.startsWith("mailto:")
        ? "email"
        : action.href.startsWith("tel:")
          ? "phone"
          : "file";
      const link = createActionLink(
        action,
        action.style === "primary" ? "contact-btn" : "contact-btn secondary"
      );
      link.prepend(createContactIcon(icon, "contact-btn-icon"));
      link.appendChild(createContactIcon("arrow", "contact-btn-arrow"));
      links.appendChild(link);
    });

    if (contact.socials && contact.socials.length) {
      // Social links sit beside the primary email action.
      const socialLinks = createElement("div", {
        className: "contact-social-links",
        attrs: { "aria-label": "Social links" }
      });

      contact.socials.forEach((social) => {
        const socialLink = createElement("a", {
          className: "contact-social-btn",
          attrs: {
            href: social.href,
            target: "_blank",
            rel: "noopener",
            "aria-label": social.label
          }
        });

        socialLink.append(
          createContactIcon(social.icon, "contact-btn-icon"),
          createElement("span", { className: "sr-only", text: social.label })
        );
        socialLinks.appendChild(socialLink);
      });

      links.appendChild(socialLinks);
    }

    // Convert the details array into labeled cards, adding links where useful.
    const [name, role, university, email, phone, location] = contact.details || [];
    const contactCards = [
      name ? { label: "Name", value: name, icon: "user" } : null,
      role ? { label: "Role", value: role, icon: "role" } : null,
      university ? { label: "University", value: university, icon: "university" } : null,
      email ? { label: "Email", value: email, icon: "email", href: `mailto:${email}` } : null,
      phone
        ? {
          label: "Phone",
          value: phone,
          icon: "phone",
          href: `tel:+27${phone.replace(/\s/g, "").slice(1)}`
        }
        : null,
      location ? { label: "Location", value: location, icon: "location" } : null
    ].filter(Boolean);

    const details = createElement("address", { className: "contact-details" });
    contactCards.forEach((item) => {
      // Linked detail cards use anchors; static facts use divs.
      const tag = item.href ? "a" : "div";
      const attrs = item.href
        ? item.external
          ? { href: item.href, target: "_blank", rel: "noopener" }
          : { href: item.href }
        : {};
      const card = createElement(tag, {
        className: item.href ? "contact-detail-card is-link" : "contact-detail-card",
        attrs
      });
      const text = createElement("span", { className: "contact-detail-text" });
      text.append(
        createElement("span", { className: "contact-detail-label", text: item.label }),
        createElement("strong", { text: item.value })
      );
      card.append(createContactIcon(item.icon), text);
      details.appendChild(card);
    });

    const intro = createElement("div", { className: "contact-intro" });
    intro.append(
      createElement("h2", { className: "section-title", text: contact.title }),
      createElement("p", { className: "contact-subtitle", text: contact.subtitle }),
      links
    );

    const panel = createElement("div", { className: "contact-panel" });
    panel.append(intro, details);
    const label = createElement("div", { className: "professional-section-label" });
    label.appendChild(
      createElement("p", { className: "professional-label-text", text: data.sections.contact.label })
    );
    container.replaceChildren(label, panel);

    footer.textContent = contact.footer;
  }

  // Shows the fixed navigation only after the user scrolls away from the hero top.
  function initSiteNav() {
    const nav = document.querySelector(".site-nav");
    if (!nav) return;

    // Toggle the nav's visible class based on scroll position.
    const updateNavVisibility = () => {
      nav.classList.toggle("is-visible", window.scrollY > 80);
    };

    updateNavVisibility();
    window.addEventListener("scroll", updateNavVisibility, { passive: true });
  }

  // Render all dynamic sections after the base HTML and data have loaded.
  document.addEventListener("DOMContentLoaded", () => {
    initSiteNav();
    renderHero();
    renderSectionHeader("projects-header", data.sections.projects);
    renderSectionHeader("skills-header", data.sections.skills);
    renderSectionHeader("journey-header", data.sections.journey);
    renderSkills();
    renderJourney();
    renderService();
    renderAbout();
    renderContact();

    document.dispatchEvent(new CustomEvent("portfolio:content-ready"));
  });
})();
