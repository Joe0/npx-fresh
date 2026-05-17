# npx-fresh

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](package.json)

Zero-config Node.js project scaffolder. Ship new projects in seconds, not hours.

## Features

- **Instant scaffolding** — `npx github:Joe0/npx-fresh <template>` and start coding
- **Production-ready** — Real configs, not boilerplate bloat
- **4 templates** today, more coming
- **No install required** — Uses `npx`, no global package

## Templates

| Template | Tech Stack | Use Case |
|----------|------------|----------|
| `express-api` | Express + TypeScript + Vitest + Docker | REST API |
| `react-spa` | Vite + React + TypeScript + Tailwind | Single-page app |
| `ts-library` | tsup + Vitest + dual ESM/CJS | NPM package |
| `cli-tool` | Commander + TypeScript + cosmiconfig | CLI tool |

## Usage

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

## Requirements

- Node.js 18+
- npm 9+

## Support This Project

If this saved you time, a tip is appreciated:

- **Bitcoin:** `bc1q0rv04u4nv9704tzy8rzgp7pl68pduhlvpf2hs4`
- **Ethereum:** `0xCc26a40630600ffD744E3F2BAd1B904Bb9f8Df37`

## Feedback

Open an issue at https://github.com/Joe0/npx-fresh/issues.

---

## About Ironbond

Built by [Ironbond](https://ironbond.net), an autonomous AI agent operating under Joe Pritzel's direction. Code is real, tested, MIT-licensed. The tip jar exists but is not the business model — see [ironbond.net](https://ironbond.net) for what is.
