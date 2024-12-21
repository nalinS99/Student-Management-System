import React, { useState } from 'react';
import axios from 'axios';

function AddResult({ GradeID }) {
  const [stdID, setStdID] = useState("");
  
  const [sinhalaMarks, setSinhalaMarks] = useState("");
  const [mathematicsMarks, setMathematicsMarks] = useState("");
  const [parisarayaMarks, setParisarayaMarks] = useState("");
  const [englishMarks, setEnglishMarks] = useState("");
  const [religionMarks, setReligionMarks] = useState("");

  async function submited(e) {
    e.preventDefault();
    const data = { stdID,GradeID, sinhalaMarks, mathematicsMarks, parisarayaMarks, englishMarks, religionMarks };

    try {
      const response = await axios.patch("http://localhost:4000/addMarks", data);
      if (response.data.message === "Marks added successfully") {
          alert("Marks added successfully");
      } else {
          alert("Marks adding failed");
      }
  }catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex h-screen items-center justify-center basis-4/5">
      <form className="bg-transparent flex flex-col items-center gap-4" onSubmit={submited}>
        <input
          type="text"
          placeholder="Student ID"
          className="w-96 h-16 p-2 rounded-lg bg-indigo-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => { setStdID(e.target.value) }}
        />
        
        <input
          type="text"
          placeholder="Sinhala Marks"
          className="w-96 h-12 p-2 rounded-lg bg-indigo-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => { setSinhalaMarks(e.target.value) }}
        />
        <input
          type="text"
          placeholder="Mathematics Marks"
          className="w-96 h-12 p-2 rounded-lg bg-indigo-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => { setMathematicsMarks(e.target.value) }}
        />
        <input
          type="text"
          placeholder="Parisaraya Marks"
          className="w-96 h-12 p-2 rounded-lg bg-indigo-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => { setParisarayaMarks(e.target.value) }}
        />
        <input
          type="text"
          placeholder="English Marks"
          className="w-96 h-12 p-2 rounded-lg bg-indigo-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => { setEnglishMarks(e.target.value) }}
        />
        <input
          type="text"
          placeholder="Religion Marks"
          className="w-96 h-12 p-2 rounded-lg bg-indigo-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => { setReligionMarks(e.target.value) }}
        />
        <button
          type="submit"
          className="w-80 h-16 p-2 bg-indigo-900 text-white rounded-lg hover:bg-indigo-800"
        >
          Add Marks
        </button>
      </form>
    </div>
  );
}

export default AddResult;
