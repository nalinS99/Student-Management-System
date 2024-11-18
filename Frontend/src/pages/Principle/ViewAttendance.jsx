import React from 'react'
import PLayout from "./PLayout";

function ViewAttendance() {
  return (
    <div className=" flex ">
      <div className=" basis-1/5 ">
        <PLayout />
      </div>

      <div className="flex h-screen items-center justify-center  basis-4/5">
      <div className="text-center">
        <h1 className="mb-6 text-3xl font-semibold  text-primary">Select a Grade to view</h1>
        <div className="grid grid-cols-2 gap-20 text-2xl">
          <button className="w-64 h-32 bg-indigo-900 text-white rounded-md hover:bg-indigo-800">
            Grade 01
          </button>
          <button className="w-64 h-32 bg-indigo-900 text-white rounded-md hover:bg-indigo-800">
            Grade 02
          </button>
          <button className="w-64 h-32 bg-indigo-900 text-white rounded-md hover:bg-indigo-800">
            Grade 03
          </button>
          <button className="w-64 h-32 bg-indigo-900 text-white rounded-md hover:bg-indigo-800">
            Grade 04
          </button>
          <button className="w-64 h-32 bg-indigo-900 text-white rounded-md hover:bg-indigo-800 col-span-2">
            Grade 05
          </button>
        </div>
      </div>
    </div>
      </div>
  )
}

export default ViewAttendance


