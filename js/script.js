document.documentElement.classList.add("js");

const config = window.PORTFOLIO_CONFIG;
const app = document.querySelector("#portfolio-app");

const icon = (name, className = "") => `<svg${className ? ` class="${className}"` : ""} aria-hidden="true"><use href="#icon-${name}"/></svg>`;
const externalAttributes = (href) => href.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : "";

function applySiteConfig() {
    document.title = config.site.title;
    document.querySelector('meta[name="description"]').content = config.site.description;
    document.querySelector('meta[name="theme-color"]').content = config.site.themeColor;

    const themeProperties = {
        "--bg": config.theme.background,
        "--surface": config.theme.surface,
        "--surface-strong": config.theme.surfaceStrong,
        "--ink": config.theme.text,
        "--muted": config.theme.muted,
        "--accent": config.theme.accent,
        "--accent-dark": config.theme.accentText
    };

    Object.entries(themeProperties).forEach(([property, value]) => {
        document.documentElement.style.setProperty(property, value);
    });
}

function renderPortfolio() {
    const { brand, navigation, hero, about, tools, projects, experience, contact, footer } = config;

    app.innerHTML = `
        <header class="site-header">
            <nav class="navbar" aria-label="Main navigation">
                <a href="#home" class="logo" aria-label="${brand.fullName}, home">${brand.shortName}</a>
                <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="nav-links">Menu</button>
                <ul class="nav-links" id="nav-links">
                    ${navigation.map((item) => `<li><a href="${item.href}">${item.label}</a></li>`).join("")}
                </ul>
            </nav>
        </header>

        <main>
            <section id="home" class="hero" aria-labelledby="hero-title">
                <div class="hero-copy">
                    <h1 id="hero-title">${hero.title.join("<br>")}</h1>
                    <p class="hero-role">${hero.role}</p>
                    <p class="hero-description">${hero.description}</p>
                    <div class="hero-actions">
                        ${hero.actions.map((action) => `
                            <a href="${action.href}" class="button button-${action.style}"${externalAttributes(action.href)}${action.download ? ` download="${action.download}"` : ""}>
                                ${action.label} ${icon(action.icon)}
                            </a>
                        `).join("")}
                    </div>
                </div>
                <figure class="hero-portrait">
                    <div class="portrait-stage">
                        <img src="${hero.image.src}" width="${hero.image.width}" height="${hero.image.height}" alt="${hero.image.alt}" fetchpriority="high">
                    </div>
                    <figcaption><span>${hero.caption}</span><strong>${hero.status}</strong></figcaption>
                </figure>
            </section>

            <section id="about" class="about-section section-shell" aria-labelledby="about-title">
                <div class="about-layout">
                    <div class="about-visual">
                        <h2 id="about-title">${about.title}</h2>
                        <div class="portrait-deck" aria-label="Photos of ${brand.fullName}">
                            ${about.photos.map((photo, index) => {
                                const cardClass = index === 0 ? "is-center" : index === 1 ? "is-left" : "is-right";
                                const label = index === 0 ? `Photo 1 of ${brand.shortName.replace(".", "")}, selected` : `Show photo ${index + 1} of ${brand.shortName.replace(".", "")}`;
                                return `
                                    <button class="portrait-card ${cardClass}" type="button" data-card="${index}" aria-label="${label}">
                                        <img src="${photo.src}" width="${photo.width}" height="${photo.height}" alt="${photo.alt}" loading="lazy" style="object-position:${photo.position}">
                                    </button>
                                `;
                            }).join("")}
                        </div>
                        <p class="deck-hint">${about.photoHint}</p>
                    </div>
                    <div class="about-details">
                        <p class="about-intro">${about.intro}</p>
                        <p>${about.body}</p>
                        <dl class="about-facts">
                            ${about.facts.map((fact) => `<div><dt>${fact.label}</dt><dd>${fact.value}</dd></div>`).join("")}
                        </dl>
                        <a href="${about.link.href}"${externalAttributes(about.link.href)} class="text-link">${about.link.label} ${icon("arrow")}</a>
                    </div>
                </div>
            </section>

            <section id="skills" class="skills-section section-shell" aria-labelledby="skills-title">
                <div class="section-heading compact-heading tools-heading">
                    <h2 id="skills-title">${tools.title}</h2>
                </div>
                <div class="skills-list">
                    ${tools.items.map((tool) => `
                        <div class="skill-row">
                            <span class="skill-icons">${tool.icons.map((toolIcon) => icon(toolIcon)).join("")}</span>
                            <strong>${tool.name}</strong>
                        </div>
                    `).join("")}
                </div>
            </section>

            <section id="projects" class="projects-section section-shell" aria-labelledby="projects-title">
                <div class="section-heading projects-heading">
                    <h2 id="projects-title">${projects.title}</h2>
                    <p>${projects.description}</p>
                </div>
                <div class="project-list">
                    ${projects.items.map((project) => `
                        <article class="project-row" tabindex="0">
                            <div class="project-meta"><span>${project.type}</span><span>${project.year}</span></div>
                            <div class="project-copy">
                                <h3>${project.title}</h3>
                                <p>${project.description}</p>
                                <ul aria-label="Technologies">${project.technologies.map((technology) => `<li>${technology}</li>`).join("")}</ul>
                                <a href="${project.link.href}"${externalAttributes(project.link.href)} class="button button-${project.link.style}">${project.link.label} ${icon("arrow")}</a>
                            </div>
                            <div class="project-visual ${project.image.className || ""}">
                                <img src="${project.image.src}" width="${project.image.width}" height="${project.image.height}" alt="${project.image.alt}" loading="lazy">
                            </div>
                        </article>
                    `).join("")}
                </div>
            </section>

            <section id="experience" class="experience-section section-shell" aria-labelledby="experience-title">
                <div class="section-heading compact-heading">
                    <h2 id="experience-title">${experience.title}</h2>
                    <p>${experience.description}</p>
                </div>
                <div class="experience-panel">
                    <header class="experience-organization">
                
                        
                    <img id="logo" src="./assets/logo.png" alt="CSITAN">
                        <h3>${experience.organization}</h3>
                    </header>
                    <div class="experience-list">
                        ${experience.items.map((item) => `
                            <article class="experience-step${item.current ? " is-current" : ""}">
                                <header class="experience-role-header">
                                    <h4>${item.role}</h4>
                                    <span class="experience-period">${item.period}</span>
                                </header>
                                <ul class="experience-responsibilities">
                                    ${item.responsibilities.map((responsibility) => `<li>${responsibility}</li>`).join("")}
                                </ul>
                            </article>
                        `).join("")}
                    </div>
                </div>
            </section>

            <section id="contact" class="contact-section" aria-labelledby="contact-title">
                <div class="contact-main">
                    <div class="contact-copy">
                        <h2 id="contact-title">${contact.title}</h2>
                        <p>${contact.description}</p>
                        <a class="contact-email" href="mailto:${contact.email}">${contact.email} ${icon("arrow")}</a>
                    </div>
                    <nav class="contact-links" aria-label="Contact profiles">
                        ${contact.profiles.map((profile) => `
                            <a href="${profile.href}"${externalAttributes(profile.href)}>
                                ${icon(profile.icon, "profile-icon")}
                                <span>${profile.name}<strong>${profile.handle}</strong></span>
                                ${icon("arrow", "profile-arrow")}
                            </a>
                        `).join("")}
                    </nav>
                </div>
                <footer class="site-footer">
                    <a href="#home" class="footer-credit">${footer.credit}</a>
                    <span>${footer.copyright}</span>
                    <a href="#home">${footer.backToTop}</a>
                </footer>
            </section>
        </main>
    `;
}

applySiteConfig();
renderPortfolio();

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "Close" : "Menu";
});

navLinks.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    navLinks.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "Menu";
});

const revealGroups = document.querySelectorAll("main > section");
const revealItems = [];

revealGroups.forEach((section) => {
    const items = section.querySelectorAll("h1, h2, .hero-role, .hero-description, .hero-actions, figure, .section-heading > *, .about-layout > *, .about-details > *, .about-facts > *, .skill-row, .project-row, .experience-list article, .contact-links a");
    items.forEach((item, index) => {
        item.classList.add("reveal");
        item.style.setProperty("--delay", `${Math.min(index, 5) * 70}ms`);
        revealItems.push(item);
    });
});

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px" });
    revealItems.forEach((item) => observer.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
}

const portrait = document.querySelector(".portrait-stage");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (portrait && !reducedMotion.matches) {
    portrait.addEventListener("pointermove", (event) => {
        const bounds = portrait.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        portrait.style.setProperty("--mx", `${x * 12}px`);
        portrait.style.setProperty("--my", `${y * 12}px`);
    });

    portrait.addEventListener("pointerleave", () => {
        portrait.style.setProperty("--mx", "0px");
        portrait.style.setProperty("--my", "0px");
    });
}

const portraitCards = Array.from(document.querySelectorAll(".portrait-card"));

portraitCards.forEach((card) => {
    card.addEventListener("click", () => {
        if (card.classList.contains("is-center")) return;

        const currentCenter = portraitCards.find((item) => item.classList.contains("is-center"));
        const selectedPosition = card.classList.contains("is-left") ? "is-left" : "is-right";
        const firstName = config.brand.shortName.replace(".", "");

        card.classList.remove("is-left", "is-right");
        card.classList.add("is-center");
        card.setAttribute("aria-label", `Photo ${Number(card.dataset.card) + 1} of ${firstName}, selected`);

        currentCenter.classList.remove("is-center");
        currentCenter.classList.add(selectedPosition);
        currentCenter.setAttribute("aria-label", `Show photo ${Number(currentCenter.dataset.card) + 1} of ${firstName}`);
    });
});
