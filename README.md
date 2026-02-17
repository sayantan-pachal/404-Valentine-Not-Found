# Personal Portfolio Website

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-38bdf8?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-fast-646CFF?logo=vite)
![EmailJS](https://img.shields.io/badge/EmailJS-integrated-orange)
![PDF.js](https://img.shields.io/badge/PDF.js-integrated-yellow?logo=adobeacrobatreader)
![React PDF](https://img.shields.io/badge/react--pdf-viewer-yellowgreen)
![Responsive](https://img.shields.io/badge/Responsive-Yes-success)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)

This repository contains the source code for my **personal portfolio website**, built using **React**, **Tailwind CSS**, and a clean, component-driven architecture.

The project focuses on **clarity, scalability, and maintainability**, keeping UI, data, and logic well separated.

---

## 📁 Project Architecture

```txt
src/
│
├── Components/
│   ├── Home/
│   │   ├── Home.jsx
│   │   └── Parts/
│   │       ├── HomeIntro.jsx
│   │       ├── HomeWork.jsx
│   │       └── HomeEdu.jsx
│   │
│   ├── Contact/
│   │   ├── Contact.jsx
│   │   └── Containers/
│   │       ├── ContactGrid.jsx
│   │       └── ContactForm.jsx
│   │
│   ├── Projects/
│   │   ├── Project.jsx
│   │   └── ProjectGrid/
│   │       └── ProjectGrid.jsx
│   │
│   ├── Resume/
│   │   └── Resume.jsx
│   │
│   ├── Achievements/
│   │   └── Achievements1.jsx
│   │
│   ├── Common/
│   │   └── Logo.jsx
│   │
│   └── Edgecase/
│       └── Edgecase.jsx
│
├── Data/
│   ├── About/
│   │   └── about.js
│   ├── Blog/
│   │   └── blogPosts.js
│   ├── Contact/
│   │   └── social_contacts.js
│   ├── Education/
│   │   └── educations.js
│   ├── HomeIntro/
│   │   └── homeintro.js
│   └── Project/
│       └── projects.js
│
├── styles/
│   └── animations.css
│
├── scrollAnimation.js
│
├── App.jsx
└── main.jsx
```

# 🧠 Design Philosophy
- Component-first approach for clean UI separation
- Data-driven rendering using mapped data files
- Reusable layout patterns across pages
- Responsive-first design with Tailwind CSS
- Minimal logic inside UI components

# 📌 Key Features
- Fully responsive layout
- Dark / light mode support
- Scroll-based animations
- Project showcase with live & source links
- Resume PDF viewer + download
- Contact form with auto-reply
- Toast notifications for user feedback
- Graceful 404 / error handling

# ✉️ Contact System
- Built using EmailJS
- Supports:
- Direct email sending**
- Auto-reply confirmation
- Loading states
- Success / error notifications

# 📄 Resume Section
- Implemented using react-pdf
- Responsive rendering for all devices
- Downloadable PDF resume

# 🎨 Styling & Animation
- Tailwind CSS for utility-first styling
- Custom keyframe animations
- Reusable scroll animation helper
- Smooth UI transitions

# 🚧 Error Handling
- Dedicated Edgecase component
- Handles:
  - Invalid routes
  - Unexpected navigation errors

# ⚠️ Important Note
**The code of this repository is made with ChatGPT.**
> It is a replica of the original project — not the same code, but structured and written in a similar way.

# 👤 Author
**Sayantan Pachal**
<br>
*Aspiring CSE Student • Full-Stack Developer • AI Learner*