'use client';

import { trpc } from '@/utils/trpc';

export default function Home() {
  const { data } = trpc.hello.useQuery({ name: 'World' });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to {{projectName}}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {data?.greeting || 'Loading...'}
        </p>
        <div className="space-y-2 text-sm text-gray-500">
          <p>✓ Next.js 15 with App Router</p>
          <p>✓ tRPC for type-safe APIs</p>
          <p>✓ Prisma ORM</p>
          <p>✓ Tailwind CSS</p>
        </div>
      </div>
    </main>
  );
}
