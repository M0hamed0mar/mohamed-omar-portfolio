```markdown
# Mohamed Omar - Portfolio

A production-grade personal portfolio for **Mohamed Omar**, AI Engineer specializing in RAG pipelines, multi-agent architectures, and cloud-native AI deployment.

**Live Site:** [mohamedomar.dev](https://mohamedomar.dev)

---

## Overview

This portfolio showcases end-to-end AI systems - from hybrid retrieval pipelines to multi-agent orchestration and full cloud deployment on AWS. Every project includes a full case study with architecture diagrams, metrics, and implementation details.

Built with a focus on:

- **Performance** - Static site generation, optimized images (WebP), minimal JavaScript.
- **Design** - Dark-first UI, custom design system, responsive typography.
- **Accessibility** - Semantic HTML, keyboard navigation, reduced-motion support.
- **SEO** - Structured metadata, Open Graph, Twitter Cards, sitemap, and robots.txt.

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [Astro 5](https://astro.build) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com) |
| Language | TypeScript |
| Fonts | Inter, Cal Sans, JetBrains Mono |
| Deployment | Vercel |

---

## Features

- **Dark / Light theme** with system preference detection and localStorage persistence.
- **Five featured projects** with full case studies - architecture, metrics, and tech stack.
- **Responsive design** across mobile, tablet, and desktop.
- **Optimized images** - all assets converted to WebP (95%+ size reduction).
- **Active navigation** with IntersectionObserver.
- **Contact options** - Email (with copy-to-clipboard), WhatsApp, GitHub, LinkedIn.
- **Downloadable CV** integrated into the navigation.
- **Custom 404 page** with quick navigation.
- **Open Graph and Twitter Card** metadata for rich social sharing.
- **Sitemap and robots.txt** for search engine indexing.

---

## Project Structure

```text
portfolio/
├── public/                      # Static assets
│   ├── cv/                      # CV PDF
│   ├── images/
│   │   ├── logos/               # Brand logos (dark + light)
│   │   ├── profile/             # Profile photo
│   │   └── projects/            # Project covers + architecture diagrams
│   ├── favicon.svg              # Favicon
│   ├── og-image.webp            # Open Graph image
│   └── robots.txt               # SEO
├── scripts/                     # Utility scripts (image optimization)
├── src/
│   ├── components/
│   │   ├── layout/              # Navbar, Footer
│   │   ├── sections/            # Hero, About, Projects, Skills, Experience, Contact
│   │   └── ui/                  # Reusable components (Logo, ThemeToggle, ProjectCard)
│   ├── data/                    # Content data (personal, projects, skills, experience)
│   ├── layouts/                 # BaseLayout with SEO metadata
│   ├── pages/
│   │   ├── index.astro          # Home
│   │   ├── 404.astro            # Not found
│   │   └── projects/            # Project listing + dynamic case studies
│   ├── styles/                  # Global CSS + design tokens
│   └── utils/                   # Helpers
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js **18.17+** or **20.3+**
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/M0hamed0mar/mohamed-omar-portfolio.git
cd mohamed-omar-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build production site to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run check` | Run Astro + TypeScript diagnostics |
| `npm run astro` | Access Astro CLI directly |

### Image Optimization

All images are stored as WebP for optimal performance. To convert new PNG/JPG images:

```bash
node scripts/optimize-images.mjs
```

The script resizes images to a max width of 1600px and converts them to WebP at quality 85.

---

## Build and Deployment

### Production Build

```bash
npm run build
```

Generates a static site in `dist/`. The build includes:

- Pre-rendered HTML for all pages.
- Minified CSS and JavaScript.
- Optimized asset bundles.
- Auto-generated sitemap.

### Deploy to Vercel

1. Push the repository to GitHub.
2. Import the project on [Vercel](https://vercel.com).
3. Vercel auto-detects Astro and configures the build.
4. Deploy.

Every push to `main` triggers a new production deployment.

---

## Configuration

### Site URL

Update `site` in `astro.config.mjs` to match your production domain:

```js
export default defineConfig({
  site: 'https://your-domain.com',
  // ...
});
```

### Content Updates

Personal info, projects, skills, and experience are stored in `src/data/`:

- `personal.ts` - Name, bio, contact, socials, principles.
- `projects.ts` - Featured projects with metadata.
- `skills.ts` - Skill categories and tools.
- `experience.ts` - Professional timeline.

Update these files to change content without touching component code.

---

## Design System

### Colors

- **Background:** `#0A0A0B` (dark) / `#FAFAFA` (light)
- **Foreground:** `#FAFAFA` (dark) / `#0A0A0B` (light)
- **Accent:** `#8B5CF6` (Violet)
- **Secondary:** `#06B6D4` (Cyan), `#10B981` (Emerald)

### Typography

- **Sans:** Inter Variable
- **Display:** Cal Sans
- **Mono:** JetBrains Mono

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## Contact

- **Email:** [mohamad.omar.eng@gmail.com](mailto:mohamad.omar.eng@gmail.com)
- **LinkedIn:** [linkedin.com/in/mohamed-omar-eng](https://linkedin.com/in/mohamed-omar-eng)
- **GitHub:** [github.com/M0hamed0mar](https://github.com/M0hamed0mar)
- **WhatsApp:** [+20 109 228 4564](https://wa.me/201092284564)
```
