import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>{{projectName}}</h1>
      <p>Advanced Vite + TypeScript starter</p>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      <div className="features">
        <p>✓ Vite + TypeScript</p>
        <p>✓ Vitest for unit testing</p>
        <p>✓ Playwright for e2e testing</p>
        <p>✓ Storybook for component dev</p>
        <p>✓ Husky + lint-staged pre-commit hooks</p>
      </div>
    </div>
  );
}

export default App;
