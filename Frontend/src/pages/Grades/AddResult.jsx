import React from 'react'

function AddResult() {
  return (
    <>
    
    
    <div className="flex h-screen items-center justify-center basis-4/5">
      
        <form className="bg-transparent flex flex-col items-center gap-4">
          <input
            type="text"
            placeholder="Student ID"
           className="w-96 h-16 p-2 rounded-lg bg-indigo-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Grade ID"
            className="w-96 h-16 p-2  mb-10 rounded-lg bg-indigo-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Sinhala Marks"
            className="w-96 h-12 p-2 rounded-lg bg-indigo-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Mathematics Marks"
            className="w-96 h-12 p-2 rounded-lg bg-indigo-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Parisaraya Marks"
            className="w-96 h-12 p-2 rounded-lg bg-indigo-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="English Marks"
            className="w-96 h-12 p-2 rounded-lg bg-indigo-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Religion Marks"
            className="w-96 h-12 p-2 rounded-lg bg-indigo-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="w-80 h-16 p-2 bg-indigo-900 text-white rounded-lg hover:bg-indigo-800"
          >
            Add Marks
          </button>
        </form>
      </div>

    </>
  )
}

export default AddResult