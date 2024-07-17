// src/components/App.jsx
import React from 'react';
import Student from './components/student';

const tableStyle = {
    width: '80%',
    margin: '20px auto',
    borderCollapse: 'collapse',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)'
};

const thStyle = {
    background: '#4CAF50',
    color: 'white',
    padding: '10px',
    border: '1px solid #ddd'
};

const tdStyle = {
    padding: '10px',
    border: '1px solid #ddd',
    textAlign: 'center'
};

const Students = () => {
    const students = [
        { name: "Alex", department: "History", finalGrade: 88, status: "Pass" },
        { name: "Taylor", department: "Biology", finalGrade: 82, status: "Pass" },
        { name: "Jordan", department: "Physics", finalGrade: 91, status: "Pass" },
        { name: "Morgan", department: "Literature", finalGrade: 67, status: "Pass" },
        { name: "Casey", department: "Chemistry", finalGrade: 73, status: "Pass" },
        { name: "Riley", department: "Algebra", finalGrade: 85, status: "Pass" },
        { name: "Dana", department: "Geometry", finalGrade: 89, status: "Pass" },
        { name: "Avery", department: "Programming", finalGrade: 70, status: "Pass" },
        { name: "Jamie", department: "Statistics", finalGrade: null, status: "Fail" },
        { name: "Robin", department: "Economics", finalGrade: null, status: "Fail" }
    ];

    return (
        <div>
            <h1 style={{ textAlign: 'center', color: '#333' }}>Student List</h1>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>No.</th>
                        <th style={thStyle}>Student Names</th>
                        <th style={thStyle}>Department</th>
                        <th style={thStyle}>Final Grade</th>
                        <th style={thStyle}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <Student key={index} student={student} index={index} tdStyle={tdStyle} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

function App() {
    return (
        <div className="App">
            <Students />
        </div>
    );
}

export default App;
