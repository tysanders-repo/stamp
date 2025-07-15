# ✅ Personal Site To-Do – Next.js + Content Collections + Portfolio

## 🔧 Setup Project

- [x] `npx create-next-app my-site` (use TypeScript, Tailwind, Turbopack)
- [x] Set up basic folder structure (`/app`, `/components`, `/content`)
- [x] Install Tailwind CSS
- [x] Install and configure `shadcn/ui` or `radix-ui`
- [x] ~~Install Contentlayer~~ → Migrated to custom content collections
- [x] Configure content loading from markdown files

## 🧱 Content Models & Data

- [x] Create `/content/blog/*.md` — posts with `title`, `slug`, `date`, `tags`, `summary`
- [x] Create `/content/projects/*.md` — projects with `title`, `slug`, `date`, `description`, `cover`, `tags`
- [x] Write test blog posts and projects
- [x] Fix filtering on projects page (client-side state)
- [x] ~~Change from contentlayer to probably content collections?~~ → ✅ Done
- [x] Connect dynamic data to portfolio and blog pages
- [x] Connect search to blog and portfolio pages

## 🎨 UI Components & Features

- [x] Create search overlay with keyboard navigation
- [x] Implement fuzzy search for blog posts and projects
- [x] Add category filtering for projects
- [x] Add search and filtering for blog page
- [x] Create working contact form with validation
- [x] Add real social links (GitHub, LinkedIn, Email)

## ✍️ Blog/MDX Features

- [ ] Install and configure `remark-math` + `rehype-katex` for LaTeX math
- [ ] Add `rehype-prism-plus` or `shiki` for code syntax highlighting
- [ ] Add support for images in MDX (`next/image` override)
- [ ] Optional: Add Mermaid diagram support (`rehype-mermaid` or `<Mermaid />` component)

## ⚙️ Observability & Analytics

- [ ] Install and configure **Datadog RUM** for frontend session tracking
- [ ] Add pageview logging via PostHog or Vercel analytics
- [ ] Wire up IP-to-company enrichment via Clearbit or IPinfo in middleware
- [ ] Cache IP lookups with Upstash Redis or edge KV

## 🚀 CI/CD & Deployment

- [ ] Push repo to GitHub
- [ ] Set up GitHub Actions for lint/test/build
- [ ] Configure Vercel project (enable preview URLs, analytics, edge functions)
- [ ] Add `robots.txt`, sitemap (`next-sitemap`), and RSS feed

## 🧪 Bonus Improvements

- [ ] Add `prose` styling for blog/portfolio content
- [ ] Enable dark mode toggle
- [ ] Add OG image generation using `@vercel/og`
- [ ] Add social meta tags and share buttons
