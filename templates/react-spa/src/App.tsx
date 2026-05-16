import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          {{PROJECT_NAME}}
        </h1>
        <div className="space-y-4">
          <div className="bg-indigo-50 rounded-lg p-6 text-center">
            <p className="text-6xl font-bold text-indigo-600 mb-2">{count}</p>
            <p className="text-gray-600">Click count</p>
          </div>
          <button
            onClick={() => setCount((count) => count + 1)}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105"
          >
            Increment
          </button>
          <button
            onClick={() => setCount(0)}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition duration-200"
          >
            Reset
          </button>
        </div>
        <p className="mt-6 text-center text-gray-500 text-sm">
          Edit <code className="bg-gray-100 px-2 py-1 rounded">src/App.tsx</code> to get started
        </p>
      </div>
    </div>
  )
}

export default App
