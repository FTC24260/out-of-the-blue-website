# Out Of the Blue · FTC #24260 — Team Website

A modern, fully responsive marketing site for **Out Of the Blue**, FIRST Tech
Challenge (FTC) Team **#24260** from Raleigh, NC — a student robotics team
powered by [Biome Robotics](https://www.biome-robotics.org), a 501(c)(3)
nonprofit.

Built with **React + Vite + Tailwind CSS**. Single-page, smooth-scrolling,
mobile-first, accessible (WCAG AA), and dependency-light.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

Requires Node.js 18+.

---

## What's where

```
.
├── index.html               # HTML shell, fonts, meta tags, favicon
├── tailwind.config.js       # Theme tokens (the light-blue palette) + animations
├── .env.example             # Copy to .env to plug in real endpoints/URLs
├── public/
│   └── favicon.svg          # Robot-mark favicon
└── src/
    ├── App.jsx              # Page composition + skip link
    ├── index.css           # Design tokens (CSS vars), base styles, components
    ├── main.jsx            # React entry point
    ├── components/         # One file per section + shared UI
    ├── hooks/              # useScrollReveal, useCountUp, useActiveSection
    ├── lib/scroll.js       # Smooth-scroll helpers (header-aware)
    └── data/               # 👈 ALL swappable content lives here
        ├── site.js         # Team info, nav, socials, contact, donate URL
        ├── team.js         # Roster (members + mentors)
        ├── content.js      # Mission, design process, stats, sponsor tiers
        └── gallery.js      # Outreach gallery items
```

---

## Plugging in your real data

Everything you'll want to customize is centralized in **`src/data/`** and the
**`.env`** file. Search the codebase for `TODO` to find every placeholder.

### 1. Environment variables (`.env`)

Copy `.env.example` → `.env` and fill in:

| Variable                | Purpose                                                                 |
| ----------------------- | ----------------------------------------------------------------------- |
| `VITE_CONTACT_ENDPOINT` | Contact-form endpoint. **Web3Forms** access key _or_ full **Formspree** URL. Leave blank for demo mode. |
| `VITE_DONATE_URL`       | The "Donate" / "Support Us" link (opens in a new tab).                   |

> Restart `npm run dev` after editing `.env`.

**Contact form:** the form validates inline and shows a success state in all
cases. With no endpoint set it runs in **demo mode** (nothing is actually sent).
To receive real submissions, create a free form at
[web3forms.com](https://web3forms.com) (paste the access key) or
[formspree.io](https://formspree.io) (paste the full `https://formspree.io/f/...`
URL) into `VITE_CONTACT_ENDPOINT`. Both formats are auto-detected.

### 2. Team info & links — `src/data/site.js`

- Contact email (`CONTACT.email`)
- Social links (`SOCIALS`) — **the Instagram URL is a placeholder; confirm it**
- Donate URL fallback, parent-org link, meeting location

### 3. Roster — `src/data/team.js`

Replace the placeholder members/mentors. To add a photo, drop the image in
`public/team/` and set `photo: '/team/name.jpg'`. Leave `photo: null` to use the
clean monogram avatar fallback (no broken images).

### 4. Content — `src/data/content.js`

Mission values, the engineering-design timeline, robot specs, **achievement
stats** (verify against [FTCScout](https://ftcscout.org/teams/24260) and
[FTC Events](https://ftc-events.firstinspires.org)), and sponsor tiers.

### 5. Photos

- **Robot photo:** see the TODO in `src/components/Robot.jsx` — drop
  `public/robot.jpg` and swap the placeholder block for an `<img>`.
- **Gallery:** set each item's `src` in `src/data/gallery.js`
  (files in `public/gallery/`).
- **Sponsor logos:** replace the "Your logo here" tiles in
  `src/components/Sponsors.jsx` (files in `public/sponsors/`).

> ⚠️ Anything labeled `TODO` / "placeholder" is **unverified** — confirm real
> figures and assets before publishing so nothing unverified is shown as fact.

---

## Design system

The light-blue "Out of the Blue" palette is defined once as CSS variables in
`src/index.css` and mirrored as Tailwind colors in `tailwind.config.js`:

| Token            | Hex       | Use                          |
| ---------------- | --------- | ---------------------------- |
| `sky`            | `#E8F4FB` | Page background              |
| `powder`         | `#BDE3F5` | Soft fills, cards            |
| `blue`           | `#4FB3E8` | Primary accent / buttons     |
| `azure`          | `#2D8FD4` | Hover / links                |
| `deep`           | `#0F4C81` | Headings / footer            |
| `ink`            | `#12263A` | Body text                    |
| `cloud`          | `#F7FBFE` | Alt background               |
| `glow`           | `#7FD0FF` | Highlights / focus rings     |

Fonts: **Outfit** (body) + **Poppins** (display), loaded from Google Fonts.

---

## Accessibility & UX features

- Semantic HTML landmarks, skip-to-content link, labeled controls
- Visible focus rings, full keyboard navigation
- Active-section highlighting in the nav (scroll spy)
- Smooth scrolling that accounts for the fixed header
- Scroll-reveal animations + count-up stats that respect
  `prefers-reduced-motion`
- Lightbox gallery with Escape + arrow-key support and focus management
- Mobile hamburger menu (closes on link tap, Escape, or backdrop click)
- Working "back to top" button, auto-updating copyright year

---

## Deployment

Any static host works. The repo ships ready-to-go configs:

- **Vercel** — [`vercel.json`](vercel.json) (framework auto-detected as Vite).
  Import the repo at [vercel.com/new](https://vercel.com/new); no extra setup.
- **Netlify** — [`netlify.toml`](netlify.toml) (build command + publish dir set).
  Import at [app.netlify.com](https://app.netlify.com).
- **Other hosts** (GitHub Pages, Cloudflare Pages, etc.):

  ```bash
  npm run build      # outputs static files to dist/
  ```

Both configs set long-cache headers on the fingerprinted `/assets/*` bundle and
basic security headers (`X-Content-Type-Options`, `X-Frame-Options`,
`Referrer-Policy`).

> **Set environment variables on the host.** In your Vercel/Netlify dashboard,
> add `VITE_CONTACT_ENDPOINT` and `VITE_DONATE_URL` (same values as your local
> `.env`). They're baked in at build time, so trigger a fresh deploy after
> changing them.

This is a single-page site (anchor scrolling, no client-side router), so no SPA
fallback/redirect rules are required.

---

_© Out Of the Blue · FTC #24260 — part of Biome Robotics (501(c)(3)).
Gracious professionalism._
