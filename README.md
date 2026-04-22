# Portfolio website

A single-page personal portfolio for **Prince Edwin Nyarko** — built with **React**, **TypeScript**, and **Vite**. It highlights selected projects, work experience, skills, and contact details, with a light/dark theme toggle and content driven from `src/data/content.ts` so you can update copy without touching layout code.

---

## Live site

Paste your production URL here after you deploy (GitHub Pages, Vercel, Netlify, etc.):

**`https://YOUR_DEPLOYMENT_URL_HERE`**

---

## Local development

```bash
npm install
npm run dev
```

Then open the URL Vite prints in the terminal (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

Static output is in the `dist/` folder — upload that to your host, or connect the repo to a platform that runs `npm run build` for you.

---

## Project layout (short)

| Path | Purpose |
| :--- | :--- |
| `src/App.tsx` | Page structure, theme toggle, sections |
| `src/data/content.ts` | Bio, experience, projects, skills text |
| `public/portrait.png` | About-section photo (replace if you update the image) |
