import React, { useEffect, useState } from "react";
import axios from "axios";
import GLayout from "../GLayout";
import ViewStudent from "../ViewStudent";

function GoneStudent() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStd = async () => {
      try {
        const response = await axios.get("http://localhost:4000/getStd/GD1");
        setStudents(response.data);
      } catch (error) {
        console.error("Failed to fetch student data:", error);
      } 
    };
    fetchStd();
  }, []);

  return (
    <div className="flex">
      <div className="basis-1/5">
        <GLayout grade="Grade 01" link1="/GOne" link2="/GoneAddSub" />
      </div>
      <div className="basis-4/5">
        
          <ViewStudent students={students} />
    
      </div>
    </div>
  );
}

export default GoneStudent;
