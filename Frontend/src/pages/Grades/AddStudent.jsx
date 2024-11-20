import React from 'react'

function AddStudent(props) {
  return (
    
    

    <div className="flex h-screen items-center justify-center basis-4/5  ">
    <form className="bg-transparent flex flex-col items-center gap-10 " >
      <input
        type="text"
        placeholder="Student ID"
        className="w-96 h-16 p-2 rounded-lg bg-indigo-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    
      required/>
      <input
        type="text"
        placeholder="Student Name"
        className="w-96 h-16 p-2 rounded-lg bg-indigo-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      
        required
      />
      
      <input
        type="password"
        placeholder="Password"
        className="w-96 h-16 p-2 rounded-lg bg-indigo-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
       
        required
      />
      <button
        type="submit"
        className="w-80 h-16 p-2 bg-indigo-900 text-white rounded-lg hover:bg-indigo-800"
      >
        Add Student
      </button>
    </form>
  </div>

  )
}

export default AddStudent