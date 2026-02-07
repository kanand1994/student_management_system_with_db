import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../features/studentSlice';
import { UserPlus } from 'lucide-react';

const StudentForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [grade, setGrade] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addStudent({ name, age, grade, email }));
        setName('');
        setAge('');
        setGrade('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit} className="student-form">
            <h2><UserPlus size={20} /> Add Student</h2>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Grade"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Student</button>
        </form>
    );
};

export default StudentForm;
