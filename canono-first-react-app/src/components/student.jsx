// src/components/student.jsx
import React from 'react';

const Student = ({ student, index, tdStyle }) => {
    return (
        <tr>
            <td style={tdStyle}>{index + 1}</td>
            <td style={tdStyle}>{student.name}</td>
            <td style={tdStyle}>{student.department}</td>
            <td style={tdStyle}>{student.finalGrade !== null ? student.finalGrade : 'N/A'}</td>
            <td style={{ ...tdStyle, color: student.status === 'Pass' ? 'green' : 'red' }}>
                {student.status}
            </td>
        </tr>
    );
};

export default Student;
