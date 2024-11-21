import React from "react";

function ViewStudent({ students }) {
  return (
    <div className="flex h-screen px-32 py-10">
      <div className="container mx-auto mt-10">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th scope="col" className="py-3 px-6 text-left">
                  Student ID
                </th>
                <th scope="col" className="py-3 px-6 text-left">
                  Student Name
                </th>
              </tr>
            </thead>
            <tbody>
              {students.length === 0 ? (
                <tr>
                  <td
                    colSpan="2"
                    className="py-3 px-6 text-center text-gray-500"
                  >
                    No students found.
                  </td>
                </tr>
              ) : (
                students.map((student, index) => (
                  <tr
                    key={student.stdID}
                    className={`${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    } border-b`}
                  >
                    <td className="py-3 px-6">{student?.stdID}</td>
                    <td className="py-3 px-6">{student?.sName}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewStudent;
