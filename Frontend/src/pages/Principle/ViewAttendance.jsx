import React, { useEffect, useState } from 'react';
import PLayout from "./PLayout";
import axios from "axios";

function ViewAttendance() {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    async function fetchGrades() {
      try {
        const response = await axios.get("http://localhost:4000/getGrade");
        setGrades(response.data);
      } catch (error) {
        console.error("Error fetching grades.");
        alert("Failed to load.");
      }
    }

    fetchGrades();
  }, []);

  return (
    <div className="flex">
      <div className="basis-1/5">
        <PLayout />
      </div>

      <div className="flex h-screen items-center justify-center basis-4/5">
        <div className="text-center">
          <h1 className="mb-6 text-3xl font-semibold text-primary">Select a Grade to View</h1>

          <div className="grid grid-cols-2 gap-20 text-2xl">
            {grades.length > 0 ? (
              grades.map(grade => (
                <button 
                  key={grade.GradeID} 
                  className="w-64 h-32 bg-indigo-900 text-white rounded-md hover:bg-indigo-800">
                  {grade.Grade}
                </button>
              ))
            ) : (
              <p className="text-red-600 text-xl">No grades available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewAttendance;
