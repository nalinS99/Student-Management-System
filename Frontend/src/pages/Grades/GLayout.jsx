import React from 'react'
import { Link } from 'react-router-dom'

function GLayout(props) {
  return (
    <div className="flex h-screen fixed top-0 left-0">
      <div className="bg-indigo-900 text-center text-white p-6">
      <h1 className=" text-2xl font-bold mb-2 text-indigo-900">
          <span className="text-yellow-500">S </span>
          <span className="text-white">M </span>
          <span className="text-yellow-500">S</span>
        </h1>
        <h2 className="text-2xl">{props.grade}</h2>
        <nav>
          <ul >
            <li >
              <Link
                to={props.link1}
                className="block text-lg hover:bg-indigo-800 p-10 rounded  text-center  border-b-2 border-yellow-400"
              >
                Add Student
              </Link>
            </li>
            
            <li>
              <Link
                to={props.link3}
                className="block text-lg hover:bg-indigo-800 p-10 rounded  text-center border-b-2 border-yellow-400"
              >
                Add Result
              </Link>
            </li>

            <li>
              <Link
                to={props.link4}
                className="block text-lg hover:bg-indigo-800 p-10 rounded  text-center border-b-2 border-yellow-400"
              >
               Mark Attendance
              </Link>
            </li>
            <li>
              <Link
                to={props.link5}
                className="block text-lg hover:bg-indigo-800 p-10 rounded  text-center border-b-2 border-yellow-400"
              >
               View Students
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
  )
}

export default GLayout