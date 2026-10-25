// Edit this file to manage the portfolio's content, links, images, and theme.
window.PORTFOLIO_CONFIG = {
  site: {
    title: "Aadarsh Paudel | Developer Portfolio",
    description:
      "Portfolio of Aadarsh Paudel, a BSc CSIT student focused on web development, AI and community leadership.",
    themeColor: "#0b0f19",
  },
  theme: {
    background: "#0b0f19",
    surface: "#121a2a",
    surfaceStrong: "#18243a",
    text: "#f7f9fc",
    muted: "#aab6c8",
    accent: "#5b95ff",
    accentText: "#07101f",
  },
  brand: {
    shortName: "Aadarsh.",
    fullName: "Aadarsh Paudel",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    title: ["Aadarsh", "Paudel"],
    role: "I build useful digital experiences for the web.",
    description:
      "BSc CSIT student exploring web development and AI while contributing to Nepal’s student technology community.",
    actions: [
      {
        label: "View my work",
        href: "#projects",
        style: "primary",
        icon: "arrow",
      },
      {
        label: "Download résumé",
        href: "assets/Aadarsh-Paudel-CV.pdf",
        style: "secondary",
        icon: "download",
        download: "Aadarsh-Paudel-CV.pdf",
      },
    ],
    image: {
      src: "assets/aadarsh.png",
      width: 1254,
      height: 1254,
      alt: "Aadarsh Paudel in a dark suit",
    },
    caption: "Based in Nepal",
    status: "Open to internships",
  },
  about: {
    title: "About me",
    photos: [
      {
        src: "assets/aadarsh-1.jpg",
        width: 771,
        height: 618,
        alt: "Aadarsh at Palpa Durbar Museum",
        position: "center",
      },
      {
        src: "assets/aadaesh-2.jpg",
        width: 720,
        height: 960,
        alt: "Aadarsh standing in front of a white building",
        position: "50% 42%",
      },
      {
        src: "assets/aadarsh-3.jpg",
        width: 900,
        height: 900,
        alt: "Aadarsh at a CSIT community event",
        position: "center",
      },
    ],
    photoHint: "Choose a photo",
    intro:
      "I’m Aadarsh, a BSc CSIT student building practical software for the web.",
    body: "I’m currently focused on web development and AI. I learn through hands-on projects, thoughtful experimentation and collaboration with Nepal’s student technology community.",
    facts: [
      { label: "Based in", value: "Nepal" },
      { label: "Focus", value: "Web development and AI" },
      { label: "Available for", value: "Internships and collaboration" },
    ],
    link: { label: "View GitHub", href: "https://github.com/Aadarshpaudel" },
  },
  tools: {
    title: "Tools I use",
    items: [
      { name: "HTML", icons: ["html"] },
      { name: "CSS", icons: ["css"] },
      { name: "JavaScript", icons: ["js"] },
      { name: "React", icons: ["react"] },
      { name: "Python", icons: ["python"] },
      { name: "Machine learning", icons: ["ml"] },
      { name: "Git & GitHub", icons: ["git"] },
    ],
  },
  projects: {
    title: "Selected work",
    description:
      "Two projects that reflect how I approach community problems and web craft.",
    items: [
      {
        type: "Community platform",
        year: "2025",
        title: "Sajha Samasya",
        description:
          "A civic complaint platform concept that helps citizens report local issues and connect them with the relevant authorities.",
        technologies: ["UI/UX", "Hackathon", "Teamwork"],
        link: {
          label: "Open repository",
          href: "https://github.com/kharalnirmal/codeyatra2.0_pookieBlinders_sajhasamasya",
          style: "primary",
        },
        image: {
          src: "assets/sajha samsaya.png",
          width: 1873,
          height: 885,
          alt: "Sajha Samasya project title screen",
          className: "visual-sajha",
        },
      },
      {
        type: "Web development",
        year: "2026",
        title: "Developer Portfolio",
        description:
          "A fast, responsive personal site designed to present my skills, selected work and community experience clearly.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: {
          label: "View GitHub",
          href: "https://github.com/Aadarshpaudel",
          style: "secondary",
        },
        image: {
          src: "assets/portfolio-preview.png",
          width: 1440,
          height: 900,
          alt: "Desktop preview of Aadarsh's developer portfolio",
          className: "visual-portfolio",
        },
      },
    ],
  },
  experience: {
    title: "Experience",
    description: "A journey from campus representation to chapter leadership.",
    organization: "CSITAN Rupandehi",
    items: [
      {
        period: "Current role",
        role: "Secretary",
        current: true,
        responsibilities: [
          "Prepare monthly reports.",
          "Lead the content team.",
          "Coordinate and monitor events.",
        ],
      },
      {
        period: "2025-2026",
        role: "Executive Body Member",
        responsibilities: [
          "Supported chapter planning and coordination.",
          "Contributed to community initiatives.",
        ],
      },
      {
        period: "2024 – 2025",
        role: "College Representative",
        responsibilities: [
          "Connected the association with my college.",
          "Encouraged communication and student participation.",
        ],
      },
    ],
  },
  contact: {
    title: "Contact",
    description:
      "For internships, collaborations or project conversations, send me an email.",
    email: "aadarshpaudel26@gmail.com",
    profiles: [
      {
        name: "GitHub",
        handle: "@Aadarshpaudel",
        href: "https://github.com/Aadarshpaudel",
        icon: "github",
      },
      {
        name: "LinkedIn",
        handle: "/in/aadarsh26",
        href: "https://www.linkedin.com/in/aadarsh26/",
        icon: "linkedin",
      },
      {
        name: "Instagram",
        handle: "@ig_aadiih",
        href: "https://www.instagram.com/ig_aadiih/",
        icon: "instagram",
      },
      {
        name: "Facebook",
        handle: "Aadarsh Paudel",
        href: "https://www.facebook.com/aadarsh.paudel.5",
        icon: "facebook",
      },
    ],
  },
  footer: {
    credit: "Made by Aadarsh",
    copyright: "© 2026",
    backToTop: "Back to top ↑",
  },
};
