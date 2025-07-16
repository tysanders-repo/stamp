# Personal Portfolio & Blog

A modern personal website built with Next.js, featuring a portfolio, blog, and search functionality.

[![CI](https://github.com/tysanders-repo/stamp/actions/workflows/ci.yml/badge.svg)](https://github.com/tysanders-repo/stamp/actions/workflows/ci.yml)

## Features

- 🎨 **Portfolio**: Showcase your projects with filtering and search
- ✍️ **Blog**: Write and publish blog posts with markdown support
- 🔍 **Search**: Global search across projects and blog posts
- 📱 **Responsive**: Mobile-first design with Tailwind CSS
- ⚡ **Fast**: Built with Next.js 15 and optimized for performance

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run linting
npm run lint

# Run type checking
npm run type-check

# Run tests
npm test

# Build for production
npm run build
```

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Content**: Markdown with custom content collections
- **Search**: Fuzzy search with Fuzzysort
- **Testing**: Jest + Testing Library
- **Deployment**: Vercel

## Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/          # React components
├── content/            # Markdown content (blog & projects)
└── lib/               # Utilities and data loading
```

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/)
