import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllStudents } from '../features/studentSlice';
import { Users } from 'lucide-react';

const Stats = () => {
    const students = useSelector(selectAllStudents);

    return (
        <div className="stats">
            <h3><Users size={24} /> Total Students: {students.length}</h3>
        </div>
    );
};

export default Stats;
