import React, { useState } from 'react'
import axios from "axios";
function AddStudent(props) {
const [stdID,setStdID] = useState("");
const [sPassword, setsPassword]= useState("");
const [sName ,setSName] = useState("");

async function  submitted(e){
     const data = {stdID ,sPassword,sName,GradeID:props.GradeID};
     e.preventDefault();

     try{
      const response = await axios.post(`http://localhost:4000/addStudents` ,data);
      
      if(response.data.massage == "Student added successfully" ){
        alert("Student added successfully");
      }
      else{
        alert("Student added fail");
      }
     } 
     catch(error){
console.error(error);
     }
     
}


  return (
    
    

    <div className="flex h-screen items-center justify-center basis-4/5  ">
    <form className="bg-transparent flex flex-col items-center gap-10 " onSubmit={submitted} >
      <input
        type="text"
        placeholder="Student ID"
        className="w-96 h-16 p-2 rounded-lg bg-indigo-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onChange={(e)=>{setStdID(e.target.value)}}
        
    
      required/>
      <input
        type="text"
        placeholder="Student Name"
        className="w-96 h-16 p-2 rounded-lg bg-indigo-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onChange={(e)=>{setSName(e.target.value)}}
        required
      />
      
      <input
        type="password"
        placeholder="Password"
        className="w-96 h-16 p-2 rounded-lg bg-indigo-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onChange={(e)=>{setsPassword(e.target.value)}}
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