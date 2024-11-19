import React, { useState } from "react";
import PLayout from "./PLayout";
import axios from "axios";

function AddTeacher() {
  const [GradeID , setGradeID] =useState("");
  const[Grade,setGrade]=useState("");
  const[tName,settName]=useState("");
  const[tPassword,settPassword]=useState("");

  async function submited(e){
    e.preventDefault();
  try { const data ={GradeID, Grade ,tName ,tPassword }
    const response = await axios.post(`http://localhost:4000/addTeacher`,data);
    if (response.data.message === "teacher added.") {
      alert("teacher added.");
     
     } else {
       alert("Invalid inputs");
     }}
    catch (error) {
      console.error("Error during adding teacher:", error);

    
  }
}

  return (
    <div className=" flex ">
      <div className=" basis-1/5 ">
        <PLayout />
      </div>

      <div className="flex h-screen items-center justify-center basis-4/5  ">
      <form className="bg-transparent flex flex-col items-center gap-10 " onSubmit={submited}>
        <input
          type="text"
          placeholder="Grade ID"
          className="w-96 h-16 p-2 rounded-lg bg-indigo-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onChange={(e)=> setGradeID(e.target.value)}
        required/>
        <input
          type="text"
          placeholder="Grade"
          className="w-96 h-16 p-2 rounded-lg bg-indigo-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e)=> setGrade(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Teacher Name"
          className="w-96 h-16 p-2 rounded-lg bg-indigo-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e)=> settName(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-96 h-16 p-2 rounded-lg bg-indigo-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => settPassword(e.target.value)}
          required
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
