import React from "react";
import PLayout from "./PLayout";

function AddTeacher() {
  return (
    <div className=" flex ">
      <div className=" basis-1/5 ">
        <PLayout />
      </div>

      <div className="flex h-screen items-center justify-center basis-4/5  ">
      <form className="bg-transparent flex flex-col items-center gap-10">
        <input
          type="text"
          placeholder="Grade ID"
          className="w-96 h-16 p-2 rounded-lg bg-indigo-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          placeholder="Grade"
          className="w-96 h-16 p-2 rounded-lg bg-indigo-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          placeholder="Teacher Name"
          className="w-96 h-16 p-2 rounded-lg bg-indigo-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-96 h-16 p-2 rounded-lg bg-indigo-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="w-80 h-16 p-2 bg-indigo-900 text-white rounded-lg hover:bg-indigo-800"
        >
          Add Teacher
        </button>
      </form>
    </div>
    </div>
  );
}

export default AddTeacher;
