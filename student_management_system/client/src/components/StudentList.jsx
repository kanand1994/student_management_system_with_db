import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStudents, deleteStudent, selectFilteredStudents, selectStudentStatus } from '../features/studentSlice';
import { Trash2 } from 'lucide-react';

const StudentList = () => {
    const dispatch = useDispatch();
    const students = useSelector(selectFilteredStudents);
    const status = useSelector(selectStudentStatus);
    const error = useSelector((state) => state.students.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchStudents());
        }
    }, [status, dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteStudent(id));
    };

    if (status === 'loading') {
        return <p>Loading students...</p>;
    }

    if (status === 'failed') {
        return <p>Error loading students. Check console for details.</p>;
    }

    return (
        <div className="student-list">
            <h2>Student List</h2>
            {students.length === 0 ? (
                <p>No students found.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Grade</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student._id}>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.grade}</td>
                                <td>{student.email}</td>
                                <td>
                                    <button onClick={() => handleDelete(student._id)} className="delete-btn">
                                        <Trash2 size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default StudentList;
