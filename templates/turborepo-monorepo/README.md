# {{projectName}}

Turborepo monorepo with Next.js web app, Express API, and shared UI components.

## What's Inside

This monorepo includes:

- **apps/web**: Next.js 15 application
- **apps/api**: Express.js API server
- **packages/ui**: Shared React component library
- **packages/tsconfig**: Shared TypeScript configurations

## Getting Started

### Install dependencies

```bash
npm install
```

### Development

Run all apps in parallel:

```bash
npm run dev
```

This starts:
- Web app at `http://localhost:3000`
- API at `http://localhost:3001`

### Build

Build all apps and packages:

```bash
npm run build
```

### Other commands

- `npm run lint` - Lint all packages
- `npm run test` - Run tests in all packages
- `npm run type-check` - Type check all packages

## Project Structure

```
{{projectName}}/
├── apps/
│   ├── web/          # Next.js frontend
│   └── api/          # Express backend
├── packages/
│   ├── ui/           # Shared React components
│   └── tsconfig/     # Shared TS configs
├── package.json      # Root package
└── turbo.json        # Turborepo config
```

## Learn More

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Next.js Documentation](https://nextjs.org/docs)
