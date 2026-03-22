const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const prefersReducedMotion = reducedMotionQuery.matches;

const loader = document.getElementById("page-loader");
const progressBar = document.getElementById("scroll-progress-bar");
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = [...document.querySelectorAll(".nav-link")];
const revealElements = [...document.querySelectorAll(".reveal")];
const skillCards = [...document.querySelectorAll(".skill-card")];
const sections = [...document.querySelectorAll("main section[id]")];
const dynamicText = document.getElementById("dynamic-text");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const parallaxItems = [...document.querySelectorAll("[data-parallax]")];
const tiltCards = [...document.querySelectorAll("[data-tilt]")];
const clickableProjectCards = [...document.querySelectorAll("[data-project-url]")];
const hero = document.querySelector(".hero");

const roles = [
    "Software Engineering",
    "Cloud & DevOps",
    "Cybersecurity"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function updateScrollProgress() {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;

    progressBar.style.width = `${progress}%`;
}

function typeDynamicText() {
    const currentRole = roles[roleIndex];

    if (!deleting) {
        charIndex += 1;
        dynamicText.textContent = currentRole.slice(0, charIndex);

        if (charIndex === currentRole.length) {
            deleting = true;
            window.setTimeout(typeDynamicText, 1500);
            return;
        }

        window.setTimeout(typeDynamicText, 95);
        return;
    }

    charIndex -= 1;
    dynamicText.textContent = currentRole.slice(0, charIndex);

    if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        window.setTimeout(typeDynamicText, 300);
        return;
    }

    window.setTimeout(typeDynamicText, 55);
}

function closeMenu() {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
}

function initNavigation() {
    menuToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        document.body.classList.toggle("menu-open", isOpen);
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
        if (!navMenu.classList.contains("open")) {
            return;
        }

        const clickedInsideMenu = navMenu.contains(event.target) || menuToggle.contains(event.target);

        if (!clickedInsideMenu) {
            closeMenu();
        }
    });
}

function initRevealObserver() {
    if (prefersReducedMotion) {
        revealElements.forEach((element) => element.classList.add("visible"));
        skillCards.forEach((card) => card.classList.add("is-visible"));
        return;
    }

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("visible");

                if (entry.target.classList.contains("skill-card")) {
                    entry.target.classList.add("is-visible");
                }

                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.16,
            rootMargin: "0px 0px -8% 0px"
        }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
}

function initSectionSpy() {
    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                navLinks.forEach((link) => {
                    const isActive = link.getAttribute("href") === `#${entry.target.id}`;
                    link.classList.toggle("active", isActive);
                });
            });
        },
        {
            threshold: 0.35,
            rootMargin: "-30% 0px -40% 0px"
        }
    );

    sections.forEach((section) => sectionObserver.observe(section));
}

function initParallax() {
    if (!hero || prefersReducedMotion || !window.matchMedia("(hover: hover)").matches) {
        return;
    }

    hero.addEventListener("mousemove", (event) => {
        const rect = hero.getBoundingClientRect();
        const offsetX = event.clientX - rect.left - rect.width / 2;
        const offsetY = event.clientY - rect.top - rect.height / 2;

        parallaxItems.forEach((item) => {
            const depth = Number(item.dataset.parallax || 0);
            const translateX = (-offsetX / rect.width) * depth;
            const translateY = (-offsetY / rect.height) * depth;

            item.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
        });
    });

    hero.addEventListener("mouseleave", () => {
        parallaxItems.forEach((item) => {
            item.style.transform = "";
        });
    });
}

function initTiltCards() {
    if (prefersReducedMotion || !window.matchMedia("(hover: hover)").matches) {
        return;
    }

    tiltCards.forEach((card) => {
        card.addEventListener("mousemove", (event) => {
            const rect = card.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width;
            const y = (event.clientY - rect.top) / rect.height;
            const rotateY = (x - 0.5) * 12;
            const rotateX = (0.5 - y) * 12;

            card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
            card.style.setProperty("--pointer-x", `${x * 100}%`);
            card.style.setProperty("--pointer-y", `${y * 100}%`);
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
            card.style.setProperty("--pointer-x", "50%");
            card.style.setProperty("--pointer-y", "50%");
        });
    });
}

function initProjectCardLinks() {
    clickableProjectCards.forEach((card) => {
        const projectUrl = card.dataset.projectUrl;

        if (!projectUrl) {
            return;
        }

        card.addEventListener("click", (event) => {
            if (event.target.closest("a")) {
                return;
            }

            window.open(projectUrl, "_blank", "noopener,noreferrer");
        });

        card.addEventListener("keydown", (event) => {
            if (event.key !== "Enter" && event.key !== " ") {
                return;
            }

            event.preventDefault();
            window.open(projectUrl, "_blank", "noopener,noreferrer");
        });
    });
}

function initContactForm() {
    if (!contactForm || !formStatus) {
        return;
    }

    let formStatusTimeoutId = 0;

    function showFormStatus(message, statusClass) {
        window.clearTimeout(formStatusTimeoutId);
        formStatus.classList.remove("is-error", "is-success");
        formStatus.textContent = message;

        if (statusClass) {
            formStatus.classList.add(statusClass);
        }

        formStatusTimeoutId = window.setTimeout(() => {
            formStatus.textContent = "";
            formStatus.classList.remove("is-error", "is-success");
        }, 3000);
    }

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const name = String(formData.get("name") || "").trim();
        const email = String(formData.get("email") || "").trim();
        const subject = String(formData.get("subject") || "").trim();
        const message = String(formData.get("message") || "").trim();

        if (!name || !email || !subject || !message) {
            showFormStatus("Please complete all fields before sending.", "is-error");
            return;
        }

        const mailSubject = encodeURIComponent(subject);
        const mailBody = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );

        showFormStatus("Message prepared successfully. Your email draft is opening.", "is-success");
        contactForm.reset();

        window.setTimeout(() => {
            window.location.href = `mailto:vlasmavhila@gmail.com?subject=${mailSubject}&body=${mailBody}`;
        }, 300);
    });
}

function initLoader() {
    window.addEventListener("load", () => {
        window.setTimeout(() => {
            loader.classList.add("is-hidden");
        }, 450);
    });
}

function initMatrixBackground() {
    const canvas = document.getElementById("matrix-canvas");

    if (!canvas) {
        return;
    }

    const context = canvas.getContext("2d");
    const glyphs = "01010101{}[]<>/\\=+-*#$";
    const fontSize = 15;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let columns = 0;
    let drops = [];
    let animationFrame = 0;
    let previousFrameTime = 0;

    function resizeCanvas() {
        const dpr = window.devicePixelRatio || 1;
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        context.setTransform(dpr, 0, 0, dpr, 0, 0);
        context.font = `${fontSize}px "JetBrains Mono", monospace`;
        columns = Math.ceil(width / fontSize);
        drops = Array.from({ length: columns }, () => Math.random() * (height / fontSize));
    }

    function drawMatrix() {
        context.fillStyle = "rgba(4, 7, 18, 0.16)";
        context.fillRect(0, 0, width, height);
        context.font = `${fontSize}px "JetBrains Mono", monospace`;

        drops.forEach((drop, index) => {
            const glyph = glyphs[Math.floor(Math.random() * glyphs.length)];
            const x = index * fontSize;
            const y = drop * fontSize;

            context.fillStyle = index % 7 === 0 ? "rgba(108, 242, 212, 0.62)" : "rgba(120, 202, 255, 0.44)";
            context.fillText(glyph, x, y);

            if (y > height && Math.random() > 0.976) {
                drops[index] = 0;
            }

            drops[index] += 0.78;
        });
    }

    function animate(timestamp) {
        if (timestamp - previousFrameTime > 42) {
            drawMatrix();
            previousFrameTime = timestamp;
        }

        animationFrame = window.requestAnimationFrame(animate);
    }

    resizeCanvas();

    if (prefersReducedMotion) {
        drawMatrix();
    } else {
        animate(0);
    }

    window.addEventListener("resize", resizeCanvas);
}

updateScrollProgress();
initLoader();
initNavigation();
initRevealObserver();
initSectionSpy();
initParallax();
initTiltCards();
initProjectCardLinks();
initContactForm();
initMatrixBackground();
typeDynamicText();

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);
