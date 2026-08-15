# Neurolynx

> Practical AI Education for Individuals and Organizations

Neurolynx is a single-page marketing and community site that delivers clear AI insights, practical guidance, focused learning resources, and a community-driven approach to keeping professionals moving forward in the AI era.

---

## Key Features

- **AI Insights** — Curated, up-to-date perspectives on the evolving AI landscape
- **Learning Resources** — Structured materials designed for practical application
- **Practical Guidance** — Actionable frameworks and tools for individuals and teams
- **Learning Community** — A space to connect, follow conversations, and grow together
- **Responsive Design** — Mobile-first layout built with the Cisco Figma V3 Design System
- **Smooth Animations** — Scroll-reveal effects and a rotating headline hero section
- **Accessible** — Keyboard-navigable, screen-reader-friendly ARIA labels throughout

---

## Technology Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (`index.html`) |
| Styling | Cisco Figma V3 Design System (`_ds/`) + custom inline styles |
| Logic | Vanilla JavaScript (DC Web Component framework via `ds-base.js`) |
| Support | `support.js` — polyfills and DC runtime bootstrap |
| Fonts | Google Fonts — Mulish |
| Hosting | Vercel (production) + GitHub Pages (`gh-pages` branch) |
| Version Control | Git / GitHub (`github.com/neurolynx-global/neurolynx`) |

---

## Folder Structure

```
neurolynx/
├── index.html              # Main entry point (single-page site)
├── ds-base.js              # DC framework base loader
├── support.js              # Runtime polyfills and bootstrap
├── vercel.json             # Vercel deployment configuration
├── package-lock.json       # Dependency lock file
├── .gitignore              # Git ignore rules
├── README.md               # This file
├── LICENSE                 # Proprietary license
├── _ds/                    # Cisco Figma V3 Design System bundle
│   └── cisco-fig-v3-design-system-*/
│       ├── _ds_bundle.js
│       ├── styles.css
│       ├── _ds_manifest.json
│       └── tokens/
│           ├── aliases.css
│           ├── fig-tokens.css
│           ├── fig-typography.css
│           └── fonts.css
├── assets/                 # Static media assets
│   ├── hero-video.mp4
│   ├── hero-poster.jpg
│   ├── nx-mark-dark.png
│   ├── nx-mark-light.png
│   └── nx-word-light.png
└── uploads/                # Supplementary uploaded assets
```

---

## Local Setup

This is a static site — no build step required.

**Prerequisites:** Any local HTTP server (required for proper module loading).

```bash
# Clone the repository
git clone https://github.com/neurolynx-global/neurolynx.git
cd neurolynx

# Option 1: Python built-in server
python3 -m http.server 3000

# Option 2: Node.js (npx)
npx serve .

# Option 3: VS Code Live Server extension
# Open index.html → right-click → "Open with Live Server"
```

Then open `http://localhost:3000` in your browser.

> **Note:** Opening `index.html` directly as a `file://` URL may cause asset loading issues due to browser security policies. Always use a local HTTP server.

---

## Build

There is no build step. The site is pure static HTML/CSS/JS and deploys as-is.

---

## Vercel Deployment

The site deploys automatically to Vercel on every push to the `main` branch.

**Manual deployment:**

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy from the project root:
   ```bash
   vercel --prod
   ```

**Vercel project settings:**
- **Framework Preset:** Other (static)
- **Root Directory:** `/` (repository root)
- **Build Command:** *(none)*
- **Output Directory:** `/` (repository root)

The `vercel.json` in the repository root handles clean URLs and long-term asset caching headers automatically.

---

## GitHub Pages Deployment

A `gh-pages` branch is maintained for GitHub Pages hosting.

**Live URL:** `https://neurolynx-global.github.io/neurolynx/`

To update:
```bash
git checkout gh-pages
git merge main
git push origin gh-pages
git checkout main
```

---

## Environment Variables

No environment variables are required. This is a fully static site with no server-side logic or API integrations.

---

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| 404 on Vercel | Entry point not found | Ensure `index.html` exists at the repo root |
| Assets not loading locally | `file://` protocol restriction | Use a local HTTP server (see Local Setup) |
| Fonts not loading | Google Fonts blocked | Check network connectivity or CSP headers |
| Video not playing | Browser codec support | `hero-video.mp4` uses H.264 — supported in all modern browsers |
| LinkedIn button navigates to wrong page | Cached old URL | Hard-refresh (`Cmd+Shift+R`) to clear cached JavaScript |

---

## Contribution Policy

This repository is proprietary. External contributions are not accepted.

Internal contributors must:
1. Branch from `dev` (never directly from `main`)
2. Follow the branch naming convention: `feature/`, `fix/`, `chore/`
3. Obtain written approval before merging to `main`
4. Ensure no third-party code with open-source licenses is introduced without prior written approval from Neurolynx

---

## License

**Copyright © 2026 Neurolynx. All rights reserved.**

This repository is proprietary and confidential. No use, copying, modification, distribution, or commercial exploitation is permitted without explicit prior written permission from Neurolynx. See the [LICENSE](./LICENSE) file for full terms.

This is **not** an open-source project. No open-source license (MIT, Apache, GPL, or otherwise) applies.
