import React from "react";
import { Link } from "react-router-dom";

const PLayout = () => {
  return (
    <div className="flex h-screen fixed top-0 left-0">
      <div className="bg-indigo-900 text-center text-white p-6">
      <h1 className=" text-2xl font-bold mb-2 text-indigo-900">
          <span className="text-yellow-500">S </span>
          <span className="text-white">M </span>
          <span className="text-yellow-500">S</span>
        </h1>
        <nav>
          <ul >
            <li >
              <Link
                to="/addteachers"
                className="block text-lg hover:bg-indigo-800 p-10 rounded  text-center  border-b-2 border-yellow-400"
              >
                Add Teachers
              </Link>
            </li>
            <li>
              <Link
                to="/viewattendance"
                className="block text-lg hover:bg-indigo-800 p-10 rounded  text-center border-b-2 border-yellow-400"
              >
                View Attendance
              </Link>
            </li>
            <li>
              <Link
                to="/viewresult"
                className="block text-lg hover:bg-indigo-800 p-10 rounded  text-center border-b-2 border-yellow-400"
              >
                View Result
              </Link>
            </li>
            <li>
              <Link
                to="/Option"
                className="block text-lg hover:bg-indigo-800 p-10 rounded  text-center border-b-2 border-yellow-400"
              >
                Log Out
              </Link>
            </li>
          </ul>
        </nav>
      </div>
  
    </div>
  );
};1
export default PLayout;
