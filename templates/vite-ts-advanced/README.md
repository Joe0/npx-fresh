# {{projectName}}

Advanced Vite + TypeScript starter with comprehensive testing and tooling.

## Features

- ✅ **Vite** - Lightning fast build tool
- ✅ **TypeScript** - Full type safety
- ✅ **React 18** - Latest React features
- ✅ **Vitest** - Fast unit testing
- ✅ **Playwright** - Reliable e2e testing
- ✅ **Storybook** - Component development environment
- ✅ **ESLint + Prettier** - Code quality
- ✅ **Husky + lint-staged** - Pre-commit hooks

## Getting Started

### Install dependencies

```bash
npm install
```

### Development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

### Development
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Testing
- `npm run test` - Run unit tests
- `npm run test:ui` - Run unit tests with UI
- `npm run test:e2e` - Run e2e tests
- `npm run test:e2e:ui` - Run e2e tests with UI

### Storybook
- `npm run storybook` - Start Storybook
- `npm run build-storybook` - Build Storybook for deployment

### Code Quality
- `npm run lint` - Lint code
- `npm run type-check` - Check TypeScript types

## Project Structure

```
src/
├── App.tsx           # Main component
├── main.tsx          # Entry point
└── index.css         # Global styles

tests/
└── example.spec.ts   # E2E tests

.storybook/           # Storybook config
.husky/               # Git hooks
```

## Learn More

- [Vite Documentation](https://vite.dev)
- [Vitest Documentation](https://vitest.dev)
- [Playwright Documentation](https://playwright.dev)
- [Storybook Documentation](https://storybook.js.org)
