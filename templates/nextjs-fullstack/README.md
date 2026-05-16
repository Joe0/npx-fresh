# {{projectName}}

Next.js 15 fullstack application with tRPC, Prisma, and Tailwind CSS.

## Features

- ✅ **Next.js 15** with App Router
- ✅ **tRPC** for end-to-end type safety
- ✅ **Prisma ORM** with PostgreSQL
- ✅ **Tailwind CSS** for styling
- ✅ **TypeScript** throughout
- ✅ **Auth scaffold** ready (NextAuth.js)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up database

Copy `.env.example` to `.env` and configure your PostgreSQL connection:

```bash
cp .env.example .env
```

Then push the Prisma schema:

```bash
npm run db:push
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── server/           # tRPC routers and procedures
│   ├── trpc.ts       # tRPC initialization
│   └── routers/      # API routes
└── utils/            # Client-side tRPC setup
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check
- `npm run db:push` - Push Prisma schema to database
- `npm run db:studio` - Open Prisma Studio

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [tRPC Documentation](https://trpc.io)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
