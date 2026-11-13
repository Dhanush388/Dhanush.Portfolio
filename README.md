# Dhanush Rao Dugyala — React Portfolio (Midnight Tech + 3D Cloud)

A modern, high-performance portfolio built with **React**, **Vite**, and **Three.js**, designed in the **Midnight Tech** aesthetic.

---

## 🚀 How to Run Using the Terminal

### 1. Start Development Server (with Live Hot-Reloading)
Run this command from the project root:
```bash
npm run dev
```
Your browser will open automatically at:
[http://localhost:3000](http://localhost:3000)

---

### 2. Build for Production
To bundle and optimize the portfolio for production deployment (Vercel, Netlify, GitHub Pages, or AWS S3/CloudFront):
```bash
npm run build
```
Production assets are generated in the `dist/` directory.

---

### 3. Preview Production Build
```bash
npm run preview
```

---

## 🎨 Midnight Tech Design Features
- **3D Volumetric Cloud Background (`Cloud3D.jsx`)**: Built using Three.js with soft cumulus cloud clusters, internal electric-blue & cyan data pulses, orbital telemetry rings, and interactive mouse parallax orientation.
- **Hero Section**: Profile photo on the left (`public/profile.jpg`) with rotating orbital rings and live status indicator; introduction and tech metrics on the right.
- **Bento-Grid Toolkit (`Skills.jsx`)**: Categorized tech stacks featuring AWS, GCP, Docker, Kubernetes, Terraform, Prometheus, Grafana, and backend/AI tooling.
- **Featured Projects (`Projects.jsx`)**: Dark glass cards with blue hover glow and interactive Case Study modals.
- **Engineering Journey (`Journey.jsx`)**: Minimal vertical timeline with electric-blue track and cyan glowing pulses.
- **Open Source Rhythm (`GithubActivity.jsx`)**: Heatmap visualization and direct repository links.
- **Contact (`Contact.jsx`)**: Validated contact form and direct communication channels.

