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
    if (!container) return;

    const sectionDefaults = {
      "projects-header": {
        eyebrow: "Selected Projects",
        title: "Selected Projects",
        subtitle: "A focused selection of practical software projects."
      },
      "skills-header": {
        eyebrow: "Capabilities",
        title: "Skills",
        subtitle: "Technical and collaboration skills."
      },
      "journey-header": {
        eyebrow: "Growth timeline",
        title: "Journey",
        subtitle: "Academic and project milestones."
      }
    };
    const resolvedSection = section || sectionDefaults[containerId];
    if (!resolvedSection) return;

    const labelMap = {
      "projects-header": "01 - Selected Projects",
      "skills-header": "02 - Skills",
      "journey-header": "03 - Journey"
    };
    const headingText = containerId === "projects-header" ? "Selected Projects" : resolvedSection.title;
    const label = createElement("p", {
      className: "eyebrow",
      text: labelMap[containerId] || resolvedSection.eyebrow
    });
    const headerContent = [label];

    if (containerId !== "projects-header") {
      headerContent.push(
        createElement("span", { className: "sr-only", text: headingText }),
        createElement("span", { className: "sr-only", text: resolvedSection.subtitle })
      );
    }

    container.replaceChildren(...headerContent);
  }

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
      const groupCard = createElement("section", { className: "technical-skill-group" });
      const list = createElement("ul", { className: "skill-token-list" });

      group.items.forEach((item) => {
        const token = createElement("li", {
          className: item.icon || item.logoSrc ? "skill-token has-logo" : "skill-token"
        });

        if (item.icon) {
          token.appendChild(
            createElement("i", {
              className: item.icon,
              attrs: { "aria-hidden": "true" }
            })
          );
        } else if (item.logoSrc) {
          token.appendChild(
            createElement("img", {
              className: "skill-logo-img",
              attrs: {
                src: item.logoSrc,
                alt: "",
                loading: "lazy",
                decoding: "async",
                "aria-hidden": "true"
              }
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

  function renderJourney() {
    const timeline = document.getElementById("timeline");
    if (!timeline) return;

    const highlightTerms = [
      "COMS1 Tutor",
      "Oportunet",
      "Country Explorer",
      "UniApply SA",
      "FoodBridge SA",
      "Donation Mobile App",
      "Wits AI Snake Competition",
      "Sudoku Project",
      "Finding the Shortest Path Project",
      "Grade 12",
      "Umalusi Certificate",
      "85% Average",
      "100% in Mathematics",
      "JavaScript",
      "HTML",
      "CSS",
      "Java",
      "MySQL",
      "teamwork",
      "collaboration",
      "problem solving",
      "adaptability"
    ].sort((a, b) => b.length - a.length);

    function escapeRegExp(value) {
      return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    function appendHighlightedText(element, text) {
      const pattern = new RegExp(`(${highlightTerms.map(escapeRegExp).join("|")})`, "gi");
      const parts = text.split(pattern).filter(Boolean);

      parts.forEach((part) => {
        const isHighlighted = highlightTerms.some(
          (term) => term.toLowerCase() === part.toLowerCase()
        );

        element.appendChild(
          isHighlighted
            ? createElement("strong", { className: "timeline-keyword", text: part })
            : document.createTextNode(part)
        );
      });
    }

    timeline.replaceChildren();
    data.journey.forEach((entry, index) => {
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
        const listItem = createElement("li");
        appendHighlightedText(listItem, text);
        list.appendChild(listItem);
      });

      content.append(header, list);

      if ((entry.skills || []).length) {
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

  function renderService() {
    const container = document.getElementById("why-hire-content");
    if (!container) return;

    const section = data.service || data.hireMe;
    if (!section) return;
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
      createElement("p", { className: "professional-label-text", text: `04 - ${section.title || "Service"}` })
    );

    container.replaceChildren(
      label,
      createElement("p", { className: "eyebrow why-kicker", text: section.eyebrow }),
      createElement("h2", { className: "section-title why-title", text: section.title }),
      createElement("p", { className: "why-subtitle", text: section.subtitle }),
      reasons
    );
  }

  function renderAbout() {
    const container = document.getElementById("about-content");
    if (!container) return;

    const about = data.about;
    const label = createElement("div", { className: "professional-section-label" });
    label.appendChild(
      createElement("p", { className: "professional-label-text", text: "05 - About" })
    );

    const grid = createElement("div", { className: "about-grid" });
    const copy = createElement("div", { className: "about-copy" });
    copy.append(
      createElement("p", { className: "section-kicker", text: about.eyebrow }),
      createElement("h3", { text: about.heading }),
      createElement("div", { className: "about-copy-rule", attrs: { "aria-hidden": "true" } })
    );

    about.paragraphs.forEach((paragraph) => {
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
      const item = createElement("div");
      const value = createElement("strong", { text: fact.value });

      item.append(createElement("span", { text: fact.label }), value);
      facts.appendChild(item);
    });

    const tags = createElement("div", { className: "about-tags" });
    about.profile.tags.forEach((tag) => {
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

  function renderContact() {
    const container = document.getElementById("contact-content");
    const footer = document.getElementById("site-footer");
    if (!container || !footer) return;

    const contact = data.contact;
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

    function createContactIcon(name, className = "contact-icon") {
      return createElement("span", {
        className,
        html: iconMap[name],
        attrs: { "aria-hidden": "true" }
      });
    }

    const links = createElement("div", { className: "contact-links" });
    (contact.actions || []).forEach((action) => {
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
      createElement("p", { className: "eyebrow", text: contact.eyebrow }),
      createElement("h2", { className: "section-title", text: contact.title }),
      createElement("p", { className: "contact-subtitle", text: contact.subtitle }),
      links
    );

    const meta = createElement("div", { className: "contact-meta" });
    meta.append(
      createElement("p", { className: "contact-meta-kicker", text: "Availability" }),
      createElement("p", {
        text: "Open to graduate software engineering roles, internships, full stack work, and AI-focused project teams."
      })
    );

    const panel = createElement("div", { className: "contact-panel" });
    panel.append(intro, details, meta);
    const label = createElement("div", { className: "professional-section-label" });
    label.appendChild(
      createElement("p", { className: "professional-label-text", text: "06 - Contact" })
    );
    container.replaceChildren(label, panel);

    footer.textContent = contact.footer;
  }

  function initSiteNav() {
    const nav = document.querySelector(".site-nav");
    if (!nav) return;

    const updateNavVisibility = () => {
      nav.classList.toggle("is-visible", window.scrollY > 80);
    };

    updateNavVisibility();
    window.addEventListener("scroll", updateNavVisibility, { passive: true });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initSiteNav();
    renderHero();
    renderSectionHeader("projects-header", data.sections && data.sections.projects);
    renderSectionHeader("skills-header", data.sections && data.sections.skills);
    renderSectionHeader("journey-header", data.sections && data.sections.journey);
    renderSkills();
    renderJourney();
    renderService();
    renderAbout();
    renderContact();

    document.dispatchEvent(new CustomEvent("portfolio:content-ready"));
  });
})();
