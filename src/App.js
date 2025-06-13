// import React from 'react';
// import ContactUs from './ContactUs';

// function App() {
//   return (
//     <div>
//       <ContactUs />
//     </div>
//   );
// }

// export default App;

import React from "react";

// HOC to calculate sum and average
const withMarksCalculation = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    const students = [
      { name: "Alice", marks: [80, 90, 85] },
      { name: "Bob", marks: [70, 75, 78] },
      { name: "Charlie", marks: [88, 89, 90] },
      { name: "David", marks: [60, 65, 70] },
      { name: "Eva", marks: [95, 92, 96] },
    ];

    // Add sum and average to each student
    const updatedStudents = students.map((student) => {
      const sum = student.marks.reduce((a, b) => a + b, 0);
      const average = (sum / student.marks.length).toFixed(2);
      return { ...student, sum, average };
    });

    return <WrappedComponent students={updatedStudents} {...props} />;
  };
};

// Base Component
const StudentMarks = ({ students }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Marks - Sum & Average</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject 1</th>
            <th>Subject 2</th>
            <th>Subject 3</th>
            <th>Sum</th>
            <th>Average</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, idx) => (
            <tr key={idx}>
              <td>{student.name}</td>
              {student.marks.map((mark, i) => (
                <td key={i}>{mark}</td>
              ))}
              <td>{student.sum}</td>
              <td>{student.average}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Enhanced Component
const EnhancedStudentMarks = withMarksCalculation(StudentMarks);

function App() {
  return <EnhancedStudentMarks />;
}

export default App;
