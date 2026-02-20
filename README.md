<h1 align="center"> Personal Portfolio Website </h1>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-blue?logo=react" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.x-38bdf8?logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Vite-fast-646CFF?logo=vite" />
  <img src="https://img.shields.io/badge/EmailJS-integrated-orange" />
  <img src="https://img.shields.io/badge/PDFjs-integrated-yellow?logo=adobeacrobatreader" />
  <img src="https://img.shields.io/badge/react--pdf-viewer-yellowgreen" />
  <img src="https://img.shields.io/badge/Responsive-Yes-success" />
  <img src="https://img.shields.io/badge/Status-Active-brightgreen" />
</p>

This repository contains the source code for my **personal portfolio website**, built using **React**, **Tailwind CSS**, and a clean, component-driven architecture.

<p align="center">
  <a href="https://sayantanpachal.vercel.app">
    <img src="https://img.shields.io/badge/Portfolio-Website-0A66C2?logo=vercel&logoColor=white" alt="Portfolio Website" width="170" />
  </a>
</p>

The project focuses on **clarity, scalability, and maintainability**, keeping UI, data, and logic well separated.

<hr>

<h2> 📁 Project Architecture </h2>

```txt
PORTFOLIO-ARCHITECTURE
│
├── public/
│   └── favicon.svg
│
├── src/
│   │
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── pdf/
│   │       └── resume.pdf
│   │
│   ├── Components/
│   │   │
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── ThemeToggle.jsx
│   │   │
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Components/
│   │   │       ├── Social.jsx
│   │   │       └── Resources.jsx
│   │   │
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Parts/
│   │   │       ├── HomeIntro.jsx
│   │   │       ├── HomeWork.jsx
│   │   │       └── HomeEdu.jsx
│   │   │
│   │   ├── About/
│   │   │   └── About.jsx
│   │   │
│   │   ├── Blog/
│   │   │   └── Blog.jsx
│   │   │
│   │   ├── Projects/
│   │   │   ├── Project.jsx
│   │   │   └── ProjectGrid/
│   │   │       └── ProjectGrid.jsx
│   │   │
│   │   ├── Education/
│   │   │   ├── Education.jsx
│   │   │   ├── Institution/
│   │   │   │   ├── Institution1.jsx
│   │   │   │   └── Institution2.jsx
│   │   │   ├── Achievements/
│   │   │   │   ├── Achievements1.jsx
│   │   │   │   └── Achievements2.jsx
│   │   │   └── Certifications/
│   │   │       ├── Certifications1.jsx
│   │   │       └── Certifications2.jsx
│   │   │
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Containers/
│   │   │       ├── ContactForm.jsx
│   │   │       └── ContactGrid.jsx
│   │   │
│   │   ├── Resume/
│   │   │   └── Resume.jsx
│   │   │
│   │   └── Edgecase.jsx
│   │
│   ├── Data/
│   │   ├── About/
│   │   │   └── about.js
│   │   ├── BlogPost/
│   │   │   └── blogPost.js
│   │   ├── Contact/
│   │   │   └── contact.js
│   │   ├── Education/
│   │   │   └── education.js
│   │   ├── HomeIntro/
│   │   │   └── homeintro.js
│   │   └── Projects/
│   │       └── projects.js
│   │
│   ├── utils/
│   │   └── scrollAnimation.js
│   │
│   ├── styles/
│   │   └── animations.css
│   │
│   ├── index.css
│   ├── Layout.jsx
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

<h2>🧠 Design Philosophy</h2>

- Component-first approach for clean UI separation
- Data-driven rendering using mapped data files
- Reusable layout patterns across pages
- Responsive-first design with Tailwind CSS
- Minimal logic inside UI components

<h2>📌 Key Features</h2>

- Fully responsive layout
- Dark / light mode support
- Scroll-based animations
- Project showcase with live & source links
- Resume PDF viewer + download
- Contact form with auto-reply
- Toast notifications for user feedback
- Graceful 404 / error handling

<h2>✉️ Contact System</h2>

- Built using EmailJS
- Supports:
- Direct email sending
- Auto-reply confirmation
- Loading states
- Success / error notifications

<h2>📄 Resume Section</h2>

- Implemented using react-pdf
- Responsive rendering for all devices
- Downloadable PDF resume

<h2>🎨 Styling & Animation</h2>

- Tailwind CSS for utility-first styling
- Custom keyframe animations
- Reusable scroll animation helper
- Smooth UI transitions

<h2>🚧 Error Handling</h2>

- Dedicated Edgecase component
- Handles:
  - Invalid routes
  - Unexpected navigation errors

<h2>⚠️ Important Note</h2>

**The code of this repository is made with ChatGPT(An AI).**

> It is a replica of the original project — not the same code, but structured and written in a similar way.

<hr>

👤 Author
<br>
**Sayantan Pachal**
<br>
*Aspiring CSE Student • Full-Stack Developer • AI Learner*
