import React from 'react'

function SLogin() {

    const [studetId, setStudentId] = useState('');
    const [password, setPassword] = useState('');

    
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-gray-200 rounded-lg px-8 py-10 shadow-md pb-20">
        <h1 className="text-center text-2xl font-bold mb-2 text-indigo-900">
          <span className="text-yellow-500">S </span>
          <span className="text-indigo-900">M </span>
          <span className="text-yellow-500">S</span>
        </h1>
        <h2 className="text-center text-4xl font-bold mb-8 text-gray-900">
          Student
        </h2>
        <form>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Student ID"
              className="w-full px-4 py-2 bg-indigo-200 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 bg-indigo-200 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-900 text-white py-2 rounded font-medium hover:bg-indigo-800"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default SLogin