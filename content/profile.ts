export const profile = {
  name: "Umair Farooq",
  role: "Senior Frontend Engineer",
  photo: "/umair-farooq.jpg",
  intro:
    "I’m a senior frontend engineer with ten years of experience building web applications that handle a lot of data and still feel fast. Most recently, at Yaak in Berlin, I built the interface ML engineers use to search, review and curate thousands of hours of driving data for physical AI, with video, telemetry charts and GNSS maps kept in sync in one view.",
  about: [
    "Before Yaak, I built real-time fleet safety dashboards at Motive, an accessible component library at Morressier, and products from scratch at VentureDive, where I was technical lead on an oil and gas asset platform and helped build Pakistan’s COVID-19 telehealth service.",
    "I like planning work in design docs before writing code, building components other engineers can reuse, and reviewing code and mentoring along the way. I’ve worked remotely with international teams for most of my career.",
  ],
  availability:
    "Based in Lahore, Pakistan (UTC+5). Open to remote roles worldwide.",
  email: "umairfarooq44@gmail.com",
  cvPath: "/Umair-Farooq-CV.pdf",
  recommendationsUrl:
    "https://www.linkedin.com/in/umairfarooq44/details/recommendations/",
  links: [
    { label: "GitHub", href: "https://github.com/umairfarooq44" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/umairfarooq44" },
  ] as const,
};

export const sections = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "recommendations", title: "Recommendations" },
  { id: "contact", title: "Contact" },
];

export type Job = {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  summary?: string;
  points: string[];
  stack: string[];
};

export const experience: Job[] = [
  {
    company: "Yaak",
    role: "Senior Software Engineer",
    start: "Oct 2024",
    end: "Present",
    location: "Remote, Berlin",
    summary:
      "Built the web interface for Nutron, Yaak's platform for managing datasets and training physical AI models for automotive and robotics.",
    points: [
      "Built the dataset browser and search across 200+ expert and student drives and 3,830+ hours of recordings, so engineers could find specific sessions and scenarios quickly.",
      "Built session and scenario dashboards that keep video feeds, uPlot telemetry charts and Mapbox GNSS maps in sync side by side.",
      "Owned the migration of every telemetry chart from LightningChart to uPlot.",
      "Built collection workflows to group scenarios, add training instructions, and launch evaluation and training runs from the UI.",
      "Integrated fleet-recorded sessions so they appear in Nutron's datasets automatically after processing and upload.",
      "Wrote end-to-end tests with Playwright, and used Claude Code day to day for AI-assisted development.",
    ],
    stack: ["React", "TypeScript", "uPlot", "Mapbox", "Playwright"],
  },
  {
    company: "Motive",
    role: "Senior Frontend Engineer",
    start: "Sep 2023",
    end: "Oct 2024",
    location: "Remote, Lahore",
    summary:
      "Worked on Motive's enterprise web app, which fleet managers use daily for safety, vehicle tracking and compliance.",
    points: [
      "Built and maintained Angular and TypeScript dashboard modules that handle real-time telematics and vehicle sensor data.",
      "Managed complex state with RxJS and NgRx across data tables, live map updates and reporting tools.",
      "Planned projects, split them into milestones and tasks, and wrote technical design documents for the team.",
      "Built reusable, accessible UI components to speed up feature work and keep the product consistent.",
      "Reviewed code and mentored 2-3 mid-level and junior developers.",
    ],
    stack: ["Angular", "TypeScript", "RxJS", "NgRx"],
  },
  {
    company: "Morressier",
    role: "Senior Frontend Engineer",
    start: "Feb 2022",
    end: "Mar 2023",
    location: "Remote, Berlin",
    summary:
      "A remote-first platform that helps early-stage researchers manage events, handle submissions, check research integrity and publish journals.",
    points: [
      "Built the new home page and enriched researcher profiles in a Next.js micro-frontend.",
      "Built accessible, reusable UI components from scratch with semantic HTML and Reach UI.",
      "Reviewed code to keep it maintainable and in line with team standards.",
      "Worked with product, design and backend teams to define, design and ship new features.",
    ],
    stack: ["React", "Next.js", "TypeScript", "styled-components", "SWR"],
  },
  {
    company: "Retailo",
    role: "Senior Software Engineer",
    start: "Aug 2021",
    end: "Jan 2022",
    location: "Lahore",
    summary:
      "A regional B2B marketplace for small and medium-sized retailers, including kiryana and baqala stores.",
    points: [
      "Led the frontend team building new features and fixing bugs in the React Native app.",
      "Planned and built the Buy Now Pay Later feature.",
      "Cut app loading time by about 5 seconds through code optimization.",
    ],
    stack: ["React Native", "Redux", "styled-components"],
  },
  {
    company: "VentureDive",
    role: "Senior Software Engineer",
    start: "Nov 2018",
    end: "Jul 2021",
    location: "Lahore",
    points: [
      "DNow (oil and gas): architected the frontend from scratch and led a team of three as technical lead. Built role-based permissions, surveys, reports, and valve, flange and repair lifecycles.",
      "Pakistan Telehealth: helped build from scratch the platform the Government of Pakistan used during COVID-19, where verified doctors consult patients.",
      "ePharma: led the frontend team on a B2B e-commerce web app, working closely with design and product.",
      "Droobi: added features, fixed bugs and refactored legacy code to improve performance in a healthcare app connecting patients with doctors and dietitians.",
      "Worked in two-week sprints with business analysts, designers and backend teams.",
    ],
    stack: [
      "React",
      "Redux",
      "Node.js",
      "Ant Design",
      "Material UI",
      "Webpack",
    ],
  },
  {
    company: "Crewlogix",
    role: "Software Engineer",
    start: "Feb 2018",
    end: "Nov 2018",
    location: "Lahore",
    points: [
      "hubii: worked with a remote team on the hubii crypto wallet desktop app (Electron, React, Next.js, web3.js), including the wallet manager.",
      "Bridger: built a React Native app for vehicle and tyre insurance.",
      "Donaco: built an embeddable charity donation widget and its dashboard.",
    ],
    stack: [
      "React",
      "Next.js",
      "Electron",
      "React Native",
      "Redux",
      "Ant Design",
    ],
  },
  {
    company: "BlueEast",
    role: "JavaScript Developer",
    start: "Nov 2016",
    end: "Jan 2018",
    location: "Lahore",
    summary:
      "Worked on Mevris, an IoT product from ORIENT Group's technology wing for controlling home appliances like air conditioners over the internet.",
    points: [
      "Built web features and UI components with React, Redux and Apollo GraphQL.",
      "Built the Android app with React Native and the desktop app with Electron.",
      "Worked on backend services with Node.js and LoopBack GraphQL.",
    ],
    stack: ["React", "Redux", "GraphQL", "React Native", "Electron", "Node.js"],
  },
];

export type Project = {
  name: string;
  context: string;
  summary: string;
  stack: string[];
  href?: string;
  image?: { src: string; alt: string };
};

// Newest first. Older, closed products (hubii, Bridger, Mevris) live in Experience.
export const work: Project[] = [
  {
    name: "Nutron",
    context: "Yaak, 2024 to present",
    summary:
      "Helps ML engineers find the right moments in thousands of hours of driving data. I built dataset search, a session viewer that keeps video, telemetry and GNSS in sync, and collections that launch training runs.",
    stack: ["React", "TypeScript", "uPlot", "Mapbox"],
    href: "https://nutron.yaak.ai/",
    image: {
      src: "/projects/yaak-nutron.jpg",
      alt: "Nutron session viewer with three synced camera feeds, a Mapbox route map and a telemetry plot over a shared timeline",
    },
  },
  {
    name: "Fleet safety dashboards",
    context: "Motive, 2023 to 2024",
    summary:
      "Fleet managers watch live vehicle data all day. I built Angular modules for safety, tracking and compliance that stay fast as data streams into maps and tables.",
    stack: ["Angular", "RxJS", "NgRx"],
    href: "https://gomotive.com/",
    image: {
      src: "/projects/motive.jpg",
      alt: "Motive compliance dashboard with log, trip and inspection summaries and top HOS violations",
    },
  },
  {
    name: "Morressier research platform",
    context: "Morressier, 2022 to 2023",
    summary:
      "Where researchers discover scientific events and early-stage research. I built the new home page and researcher profiles in a Next.js micro-frontend, on an accessible component library I built from scratch.",
    stack: ["React", "Next.js", "TypeScript", "SWR"],
    href: "https://www.morressier.com/",
    image: {
      src: "/projects/morressier.jpg",
      alt: "Morressier home page with search and featured scientific events",
    },
  },
  {
    name: "Retailo ordering app",
    context: "Retailo, 2021 to 2022",
    summary:
      "Store owners order stock through the app. I led the frontend team, built Buy Now Pay Later, and cut loading time by about 5 seconds.",
    stack: ["React Native", "Redux"],
    href: "https://retailo.co/retailers",
    image: {
      src: "/projects/retailo.jpg",
      alt: "Four screens of the Retailo app: home, orders, a product and categories",
    },
  },
  {
    name: "DNow valve and survey management",
    context: "VentureDive, 2019 to 2021",
    summary:
      "Tracks valves, flanges and repairs on oil and gas rigs. I architected the frontend from scratch and led a team of three: permissions, surveys, reports and asset lifecycles.",
    stack: ["React", "Redux", "Ant Design"],
    image: {
      src: "/projects/dnow.jpeg",
      alt: "Sign-in screen of the DNow TVS Management portal",
    },
  },
  {
    name: "Pakistan Telehealth",
    context: "VentureDive, 2020",
    summary:
      "Let patients reach verified doctors without visiting a clinic during COVID-19. I was part of the small team that built it from scratch for the Government of Pakistan.",
    stack: ["React", "Node.js"],
  },
];

export type Testimonial = {
  name: string;
  title: string;
  photo: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Tim Koch-Grunberg",
    title: "Engineering Manager, Morressier",
    photo: "/testimonials/tim-koch-grunberg.jpeg",
    quote:
      "I had the pleasure of having Umair on my team during our time at Morressier. He demonstrated deep knowledge of modern React patterns and best practices, delivering clean and readable code, well-abstracted and on time. He actively participated in shaping our work for the better, initiating and participating in open and constructive collaboration with colleagues from engineering, product, and design. His professionalism, attitude, and personality made him a well-liked team member, and I believe he will be a great asset to any team.",
  },
  {
    name: "Anton Stepanov",
    title: "Director of Engineering, Morressier",
    photo: "/testimonials/anton-stepanov.jpeg",
    quote:
      "I had the pleasure of working with Umair as a full-stack developer and I can confidently say that they are one of the most talented and dedicated developers. Umair has a deep understanding of full-stack development process and is highly proficient in technologies such as React, Next.js, Node.js. I highly recommend Umair for any full-stack development role. He will be a highly valuable asset to any organization and will bring a level of technical expertise and dedication that is hard to find.",
  },
  {
    name: "Madalina Pop",
    title: "Product Manager, Morressier",
    photo: "/testimonials/madalina-pop.jpeg",
    quote:
      "I had the pleasure of working with Umair for a few months. As I had just joined the team, he immediately supported me with any information I needed. He was able to quickly and efficiently deal with any implementation challenge we faced, even when working with new technology. Moreover, he was always open to provide valuable input to help improve our team's way of working. I would recommend Umair as a highly dedicated developer and a great team player.",
  },
  {
    name: "Muhammad Adeel Akram",
    title: "Senior Full Stack Engineer, VentureDive",
    photo: "/testimonials/muhammad-adeel-akram.jpeg",
    quote:
      "It was a real pleasure to work together with Umair Farooq, who was exceptional in his skills. He was well respected and everyone loved working with him. Excellent and result-driven. Works towards maximal customer satisfaction. Umair Farooq possesses a winning combination of solid tech skills and business sense, I certainly would recommend him.",
  },
];

export const skills = [
  {
    group: "Frontend",
    items:
      "React, TypeScript, Next.js, Angular, RxJS, NgRx, Redux, React Native, Electron",
  },
  {
    group: "Data and maps",
    items: "uPlot, Mapbox, real-time telemetry, video sync",
  },
  { group: "Backend", items: "Node.js, Express, GraphQL, REST, MongoDB" },
  {
    group: "Quality",
    items:
      "Playwright, Jest, accessibility, code review, technical design docs",
  },
];

// Privacy-friendly visit counts. Sign up at https://www.goatcounter.com, then put
// your site code here (the "yourcode" in yourcode.goatcounter.com). Empty = off.
export const analytics = {
  goatcounter: "umairfarooq44",
};
