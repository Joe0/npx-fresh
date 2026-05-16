import { Button } from 'ui';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">{{projectName}} - Web App</h1>
      <Button>Click me</Button>
    </main>
  );
}
