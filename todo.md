# ✅ Personal Site To-Do – Next.js + Contentlayer + Notion-style Portfolio

## 🔧 Setup Project

- [x] `npx create-next-app my-site` (use TypeScript, Tailwind, Turbopack)
- [x] Set up basic folder structure (`/app`, `/components`, `/content`)
- [x] Install Tailwind CSS
- [x] Install and configure `shadcn/ui` or `radix-ui`
- [x] Install Contentlayer
- [x] Configure `contentlayer.config.ts` for `Blog` and `Portfolio` content types

## 🧱 Content Models (Contentlayer)

- [x] Create `/content/blog/*.mdx` — posts with `title`, `slug`, `date`, `tags`, `summary`
- [x] Create `/content/portfolio/*.mdx` — projects with `title`, `slug`, `date`, `description`, `cover`, `tags`
- [x] Write 1–2 test blog posts and projects

## 🎨 Data

- [ ] Fix filtering on blog and portfolio pages
- [ ] Change from contentlayer to probably content collections?
- [ ] Connect dynamic data to portfolio and blog pages
- [ ] Connect search to blog and portfolio pages

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
- [ ] Add search/filter on blog or portfolio
- [ ] Add social meta tags and share buttons
