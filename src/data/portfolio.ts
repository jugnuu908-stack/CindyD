export const profile = {
  name: "Cindy Deariska",
  firstName: "CINDY",
  lastName: "DEARISKA",
  role: "Software Engineer & Web Developer",
  email: "cindydea05@gmail.com",
  phoneDisplay: "+62 821-3306-7835",
  phoneTel: "+6282133067835",
  location: "Banguntapan, Yogyakarta, Indonesia",
};

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  label: "Software Engineer / Web Developer",
  subheadline:
    "Informatics Engineering graduate focused on web development and software solutions.",
  supporting:
    "I have experience developing web-based systems through academic projects, personal projects, and professional internship experience.",
};

export const tickerItems = [
  "WEB DEVELOPMENT",
  "BACKEND SYSTEMS",
  "HTML",
  "CSS",
  "PHP",
  "SQL",
  "DECISION SUPPORT",
  "SOFTWARE ENGINEERING",
];

export const about = {
  heading: "A background in Informatics.",
  paragraphs: [
    "Cindy Deariska is an Informatics Engineering graduate from Adisutjipto Aerospace Technology Institute. Her background combines academic study, practical web development experience, personal projects, and organizational experience.",
    "Her technical foundation includes HTML, CSS, PHP, and SQL, supported by problem solving, coordination, public speaking, and people management skills.",
  ],
};

export const aboutFacts = [
  { label: "Education", value: "S1 Informatics Engineering" },
  { label: "University", value: "Adisutjipto Aerospace Technology Institute" },
  { label: "Location", value: "Banguntapan, Yogyakarta, Indonesia" },
  { label: "Studies", value: "2018 — 2023" },
];

export const snapshot = [
  { value: 2, label: "Web-based projects developed" },
  { value: 4, label: "Core technologies — HTML, CSS, PHP, SQL" },
  { value: 5, label: "Years of informatics studies" },
  { value: 1, label: "Professional web developer internship" },
];

export const techSkills = [
  {
    id: "01",
    name: "HTML",
    level: "Intermediate",
    desc: "Semantic markup for structuring web-based interfaces and content.",
    snippet: '<main class="system">\n  <h1>Admissions</h1>\n</main>',
  },
  {
    id: "02",
    name: "CSS",
    level: "Intermediate",
    desc: "Layout, styling, and responsive presentation for web pages.",
    snippet: ".system {\n  display: grid;\n  gap: 1rem;\n}",
  },
  {
    id: "03",
    name: "PHP",
    level: "Beginner",
    desc: "Server-side logic used across backend and full-stack development.",
    snippet: "<?php\n$data = query(\"SELECT * FROM applicants\");",
  },
  {
    id: "04",
    name: "SQL",
    level: "Beginner",
    desc: "Structured querying and management of relational data.",
    snippet: "SELECT name, program\nFROM applicants\nWHERE status = 'verified';",
  },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  period?: string;
  description: string;
  context: string;
  image: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: "01",
    title: "Campus Admission Backend System",
    category: "Backend System",
    description:
      "A website-based backend system developed for the campus to manage data related to new student admissions.",
    context:
      "A backend-focused web system built on the core foundation of HTML, CSS, PHP, and SQL — handling structured admission data, server-side logic, and the interface used to manage the admission process.",
    image: "/images/project-campus.jpg",
    tags: ["HTML", "CSS", "PHP", "SQL"],
  },
  {
    id: "02",
    title: "ARAS Decision Support System",
    category: "Full-Stack Web Project",
    period: "March 2022 — September 2022",
    description:
      "A full-stack website-based Decision Support System developed as a personal project using the ARAS method.",
    context:
      "A full-stack implementation where the ARAS method — an approach for multi-criteria decision analysis — drives the system's evaluation logic through a website-based interface built with HTML, CSS, PHP, and SQL.",
    image: "/images/project-dss.jpg",
    tags: ["HTML", "CSS", "PHP", "SQL", "ARAS Method"],
  },
];

export type ExperienceEntry = {
  kind: "Internship" | "Organization";
  org: string;
  role: string;
  period?: string;
  description?: string;
  bullets?: string[];
};

export const experience: ExperienceEntry[] = [
  {
    kind: "Internship",
    org: "PT Kanalab Karya Van",
    role: "Web Developer Intern",
    period: "July 2022 — May 2023",
    description:
      "Internship experience as a Web Developer, contributing to practical experience in web development and programming.",
  },
  {
    kind: "Organization",
    org: "PMK — ITDA",
    role: "Leader of PMK",
    description:
      "Provided administrative services related to programming, reporting, and general affairs.",
  },
  {
    kind: "Organization",
    org: "PMK — ITDA",
    role: "PMK Secretary",
    bullets: [
      "Created work programs related to academics, arts, and sports in the spiritual field.",
      "Monitored the progress of work programs.",
      "Conducted periodic evaluations.",
      "Prepared monthly reports regarding work-program progress.",
    ],
  },
];

export const education = {
  institution: "Adisutjipto Aerospace Technology Institute",
  degree: "S1 Informatics Engineering",
  period: "2018 — 2023",
};

export const foundation = {
  heading: "Software Engineering Foundation",
  text: "My background in Informatics Engineering provides a foundation in programming, web development, systems, and problem solving. My experience includes developing web-based systems and working with HTML, CSS, PHP, and SQL.",
};

export const interestsNote =
  "Outside of technology and development, I enjoy culinary, badminton, swimming, and traveling.";

export const interests = ["Culinary", "Badminton", "Swimming", "Traveling"];

export const contactSupporting =
  "Interested in connecting with Cindy about a professional opportunity, collaboration, or web development project?";
