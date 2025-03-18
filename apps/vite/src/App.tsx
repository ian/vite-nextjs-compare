import { useState, useEffect } from 'react'

interface ApiResponse {
  message: string
}

function App() {
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data: ApiResponse) => setMessage(data.message))
      .catch((err) => console.error('Error fetching data:', err))
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Vite + React + Hono
        </h1>
        <p className="text-gray-600">
          Message from API: {message || 'Loading...'}
        </p>
      </div>
    </div>
  )
}

export default App 