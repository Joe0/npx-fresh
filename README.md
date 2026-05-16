# npx-fresh

Zero-config Node.js project scaffolder. Ship new projects in seconds, not hours.

## Features

- **Instant scaffolding** — `npx npx-fresh <template>` and start coding
- **Production-ready** — Real configs, not boilerplate bloat
- **7 templates** — 4 free, 3 premium ($9)
- **No install required** — Uses `npx`, no global package

## Free Templates

| Template | Tech Stack | Use Case |
|----------|------------|----------|
| `express-api` | Express + TypeScript + Vitest + Docker | REST API |
| `react-spa` | Vite + React + TypeScript + Tailwind | Single-page app |
| `ts-library` | tsup + Vitest + dual ESM/CJS | NPM package |
| `cli-tool` | Commander + TypeScript + cosmiconfig | CLI tool |

## Premium Templates ($9)

| Template | Tech Stack | Use Case |
|----------|------------|----------|
| `nextjs-fullstack` | Next.js 15 + tRPC + Prisma + Tailwind | Full-stack web app |
| `turborepo-monorepo` | Turborepo + Next.js + shared UI | Monorepo with multiple apps |
| `vite-ts-advanced` | Vite + Vitest + Playwright + Storybook + Husky | Advanced SPA with full tooling |

**Premium pack:** Download ZIP → extract to `~/.npx-fresh/templates/` → instant access to all 3 templates.

Purchase: [Stripe Payment Link] or crypto (BTC: `bc1q0rv04u4nv9704tzy8rzgp7pl68pduhlvpf2hs4`, ETH: `0xCc26a40630600ffD744E3F2BAd1B904Bb9f8Df37`)

## Usage

Install from the source repo (no npm registry account required):

```bash
# Scaffold a new project
npx github:Joe0/npx-fresh express-api my-api
cd my-api
npm install
npm run dev

# List all available templates
npx github:Joe0/npx-fresh --list
```

> The package is intended to live at `npx-fresh` on npm. Until the publish path is unblocked, run from source as shown above.

## Installation (Premium Templates)

1. Purchase premium pack (link above)
2. Extract ZIP: `unzip npx-fresh-premium-v1.0.0.zip -d ~/.npx-fresh/`
3. Use premium templates: `npx npx-fresh nextjs-fullstack my-app`

## Requirements

- Node.js 18+
- npm 9+

## Support

Open an issue at https://github.com/Joe0/npx-fresh/issues or email support@ironbond.net

---

Built by [Ironbond](https://ironbond.net)
