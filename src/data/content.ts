export const profile = {
  name: "Prince Edwin Nyarko",
  title: "Computer engineering · Web & mobile",
  tagline:
    "I ship interfaces people actually use — then wire them to solid backends. Recently that’s meant Vue and Laravel, React and Django, and React Native for campus products.",
  email: "princenyarkoedwin@gmail.com",
  phone: "+233 24 129 9168",
  location: "Accra, Ghana",
  linkedin: "https://www.linkedin.com/in/prince-nyarko-510077311",
  github: "https://github.com/Unknown-strange",
};

/** Short, site-first copy — facts still match your CV. */
export const aboutParagraphs = [
  "I study computer engineering at KNUST and spend most of my time turning ideas into software: dashboards, auth flows, APIs, and the occasional mobile screen. I like problems where the UI has to feel obvious even when the system underneath is not.",
  "Outside class I gravitate toward teams that care about craft — clear components, sensible data models, and tools like Git and Postman used so the next person can pick up where I left off. If you’re building something real for users in Ghana or beyond, I’d love to hear about it.",
];

export const experience = [
  {
    role: "Software development intern",
    company: "Npontu Technologies",
    location: "Accra",
    period: "Oct 2025 – Dec 2025",
    highlights: [
      "Shipped Laravel + Vue features, including auth with middleware-based access control.",
      "Helped build a Twi chatbot on Khaya AI and Gemini.",
      "Worked on procurement inside the Kedebah ERP — multi-tenant data, REST APIs, Vue wired to Laravel, APIs exercised in Postman.",
    ],
  },
  {
    role: "Intern",
    company: "Kaliz GH",
    location: "Ayaa",
    period: "Sep 2024 – Dec 2024",
    highlights: ["Software rebuild and deployment support.", "Graphics and Figma support when the team needed an extra pair of hands."],
  },
];

export const projects = [
  {
    name: "VoteWave",
    description:
      "Online voting with a React front end I owned for responsiveness and clarity. Paired with teammates on a Django API so the whole flow felt seamless end to end.",
    stack: ["React", "Django", "REST"],
  },
  {
    name: "TekMart",
    description:
      "A campus marketplace app: React Native with Expo on the client, Django behind it — buy, sell, and browse without leaving the student bubble.",
    stack: ["React Native", "Expo", "Django"],
  },
  {
    name: "Farmer voice NLP",
    description:
      "Hackathon build: farmers speak in their own language, the model answers in kind. I focused on the mobile shell and plugging in Khaya AI / GhanaNLP.",
    stack: ["Mobile", "Khaya AI", "GhanaNLP"],
  },
];

/** One card per group — reads as a portfolio grid, not a résumé skills table. */
export const skillCategories = [
  {
    title: "Languages",
    blurb: "What I reach for first.",
    items: ["Python", "JavaScript", "TypeScript", "PHP"],
  },
  {
    title: "Frameworks & UI",
    blurb: "Where most of my shipped work lives.",
    items: ["Django", "Laravel", "Vue.js", "React", "React Native"],
  },
  {
    title: "Systems & delivery",
    blurb: "How things stay shippable.",
    items: ["Git & GitHub", "REST APIs", "Postman", "Figma"],
  },
  {
    title: "How I work",
    blurb: "The non-stack part.",
    items: ["Team coordination", "Public speaking", "Time management", "Problem solving"],
  },
];
