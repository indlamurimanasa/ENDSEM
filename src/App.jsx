import React from "react";

const students = [
  {
    id: 1,
    name: "I.MANASA
    ",
    course: "Full stack web development",
    faculty: "Gobindra Chandra Das",
  },
];

function App() {
  return (
    <main className="page-shell">
      <table className="student-table">
        <thead>
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Course Name</th>
            <th scope="col">Faculty Name</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentRow key={student.id} student={student} />
          ))}
        </tbody>
      </table>
    </main>
  );
}

function StudentRow({ student }) {
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.course}</td>
      <td>{student.faculty}</td>
    </tr>
  );
}

export default App;
