import React from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import SearchBar from './components/SearchBar';
import Stats from './components/Stats';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Student Management System</h1>
      </header>
      <main className="main-content">
        <div className="top-bar">
          <Stats />
          <SearchBar />
        </div>
        <div className="content-grid">
          <div className="form-section">
            <StudentForm />
          </div>
          <div className="list-section">
            <StudentList />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
