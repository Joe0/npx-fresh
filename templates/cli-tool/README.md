# {{PROJECT_NAME}}

A CLI tool built with TypeScript and Commander.

## Quick Start

```bash
npm install
npm run build
npm start -- greet World
```

## Available Scripts

- `npm run build` - Build the CLI tool
- `npm run dev` - Build in watch mode
- `npm start` - Run the CLI (after building)
- `npm test` - Run tests with Vitest
- `npm run lint` - Lint with ESLint
- `npm run format` - Format with Prettier

## Tech Stack

- **TypeScript** - Type-safe code
- **Commander.js** - CLI framework
- **Vitest** - Fast unit testing
- **ESLint** - Code linting
- **Prettier** - Code formatting

## Usage Examples

```bash
# Greet someone
{{PROJECT_NAME}} greet Alice

# Greet loudly
{{PROJECT_NAME}} greet Bob --loud

# Count to 5
{{PROJECT_NAME}} count 5

# Show help
{{PROJECT_NAME}} --help
```

## Development

1. Make changes in `src/`
2. Run `npm run dev` for watch mode
3. Test with `npm start -- <command>`

## Adding New Commands

Edit `src/index.ts` and add a new command:

```typescript
program
  .command('mycommand')
  .description('My custom command')
  .action(() => {
    console.log('Hello from my command!')
  })
```

## Publishing

1. Update version in `package.json`
2. Run `npm publish`
3. Users can install with `npm install -g {{PROJECT_NAME}}`
