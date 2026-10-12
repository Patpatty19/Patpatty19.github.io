# Patrick Miguel Babala — Developer Portfolio

A responsive, single-page developer portfolio built with **React 19**, **TypeScript**, and **Vite**. It highlights my work as a full-stack developer and QA tester across five sections — Hero, About, Experience, Projects, and Contact — with a dark/light theme and animated presentation.

**Live site:** https://patpatty19.github.io/

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Deployed on GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-222222?logo=github&logoColor=white)

## Features

- **Single-page layout** with smooth, section-aware navigation.
- **Experience timeline** covering my internship and earlier roles.
- **Project showcase** with live/code links and per-project tech tags.
- **Dark / light theme** toggle with persisted preference.
- **Contact form** powered by EmailJS.
- **Animated UI** (WebGL background, text and card effects) that stays responsive on mobile.
- **Accessible, semantic markup** with reduced-motion-friendly behavior.

## Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | React 19, TypeScript 5.9 |
| Build | Vite 7 |
| Animation | Framer Motion, `ogl` (WebGL) |
| Icons | react-icons |
| Forms | @emailjs/browser |
| Styling | Plain CSS with custom properties (theme tokens) |
| Quality | ESLint, `tsc` type-checking |

## Getting Started

### Prerequisites

- **Node.js 18+** (LTS recommended) and **npm**

### Install

```bash
git clone https://github.com/Patpatty19/Patpatty19.github.io.git
cd Patpatty19.github.io
npm install
```

### Environment variables

Copy the example file and fill in your EmailJS credentials. These are required for the contact form to send messages.

```bash
cp .env.example .env
```

| Variable | Description |
| --- | --- |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |

> `.env` is git-ignored. Never commit real credentials.

### Run locally

```bash
npm run dev
```

Then open the URL printed in the terminal (default: http://localhost:5173/).

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Type-check (`tsc -b`) and build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint over the project |
| `npm run deploy` | Build and publish `dist/` to the `gh-pages` branch |

## Deployment

The site is published with **GitHub Pages** (served from the `gh-pages` branch). Publishing is manual:

```bash
npm run deploy
```

This builds the project and pushes the output to `gh-pages`, which GitHub Pages then serves. After deploying, allow a few seconds for the CDN to update and do a hard refresh.

## Project Structure

```
.
├── public/                 # Static assets (images, resume.pdf, favicon)
├── src/
│   ├── components/         # Page sections (Hero, About, Experience, Projects, Contact, ...)
│   │   └── reactbits/      # Reusable animated UI primitives
│   ├── styles/             # Global styles and theme CSS variables
│   ├── App.tsx             # Page composition
│   └── main.tsx            # App entry point
├── index.html
├── vite.config.ts
└── package.json
```

## Contact

- **Email:** babalapatrick@gmail.com
- **LinkedIn:** https://linkedin.com/in/patrick-miguel-babala
- **GitHub:** https://github.com/Patpatty19

## License

This is a personal portfolio. The code is available for reference, but the content, design, and assets are not licensed for reuse without permission.
