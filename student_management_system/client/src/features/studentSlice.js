import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/students';

// Async Thunks
export const fetchStudents = createAsyncThunk('students/fetchStudents', async () => {
    const response = await axios.get(API_URL);
    return response.data;
});

export const addStudent = createAsyncThunk('students/addStudent', async (studentData) => {
    const response = await axios.post(API_URL, studentData);
    return response.data;
});

export const deleteStudent = createAsyncThunk('students/deleteStudent', async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
});

const studentSlice = createSlice({
    name: 'students',
    initialState: {
        students: [],
        status: 'idle', // idle | loading | succeeded | failed
        error: null,
        searchQuery: '',
    },
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch Students
            .addCase(fetchStudents.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchStudents.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.students = action.payload;
            })
            .addCase(fetchStudents.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // Add Student
            .addCase(addStudent.fulfilled, (state, action) => {
                state.students.push(action.payload);
            })
            // Delete Student
            .addCase(deleteStudent.fulfilled, (state, action) => {
                state.students = state.students.filter((student) => student._id !== action.payload);
            });
    },
});

export const { setSearchQuery } = studentSlice.actions;

export const selectAllStudents = (state) => state.students.students;
export const selectStudentStatus = (state) => state.students.status;
export const selectSearchQuery = (state) => state.students.searchQuery;

export const selectFilteredStudents = (state) => {
    const allStudents = selectAllStudents(state);
    const query = selectSearchQuery(state).toLowerCase();

    if (!query) return allStudents;

    return allStudents.filter(student =>
        student.name.toLowerCase().includes(query)
    );
};

export default studentSlice.reducer;
