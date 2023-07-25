// App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import RegisterPage from './components/RegisterPage';
import CreateCourse from './components/CreateCourse';
import CreateUser from './components/CreateUser';
import UpdateCourse from './components/UpdateCourse';
import UpdateUser from './components/UpdateUser';

// Add react-router-dom routes here if needed

const App: React.FC = () => {
  // Implement routing logic using react-router-dom if needed
  // For example, show LoginPage by default, and after login, show Dashboard or HomePage based on the user role

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/createcourse' element={<CreateCourse />} />
        <Route path='/createuser' element={<CreateUser />} />
        <Route path='/updatecourse/:courseId' element={<UpdateCourse />} />
        <Route path='/updateuser/:userId' element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
