import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import EmployeeDetailPage from '../pages/EmployeeDetailPage';
import AdminPage from '../pages/AdminPage';

// Dummy function to check user role
const getUserRole = () => {
  // This should be replaced with actual user role checking logic
  return 'manager'; // 'manager' or 'employee'
};

const AppRoutes = () => {
  const userRole = getUserRole();

  return (
    <Routes>
      <Route path='/employee/:id' element={<EmployeeDetailPage />} />
      <Route path='/admin' element={<AdminPage />} />
      <Route
        path='/'
        element={
          userRole === 'manager' ? (
            <Navigate to='/admin' />
          ) : (
            <Navigate to='/employee/1' />
          )
        }
      />
    </Routes>
  );
};

export default AppRoutes;
