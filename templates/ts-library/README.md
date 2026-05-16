# {{PROJECT_NAME}}

A TypeScript library built with modern tooling.

## Quick Start

```bash
npm install
npm run build
```

## Available Scripts

- `npm run build` - Build the library (CJS + ESM + types)
- `npm run dev` - Build in watch mode
- `npm test` - Run tests with Vitest
- `npm run test:coverage` - Run tests with coverage
- `npm run lint` - Lint with ESLint
- `npm run format` - Format with Prettier

## Tech Stack

- **TypeScript** - Type-safe code
- **tsup** - Fast bundler powered by esbuild
- **Vitest** - Fast unit testing
- **ESLint** - Code linting
- **Prettier** - Code formatting

## Build Output

The build produces:
- `dist/index.js` - CommonJS bundle
- `dist/index.mjs` - ES Module bundle
- `dist/index.d.ts` - TypeScript declarations

## Usage Example

```typescript
import { add, multiply, greet } from '{{PROJECT_NAME}}'

console.log(add(2, 3))        // 5
console.log(multiply(4, 5))   // 20
console.log(greet('World'))   // Hello, World!
```

## Publishing

1. Update version in `package.json`
2. Run `npm publish`

The `prepublishOnly` script ensures the library is built before publishing.
