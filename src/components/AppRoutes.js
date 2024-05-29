import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import EmployeeDetailPage from '../pages/EmployeeDetailPage';
import AdminPage from '../pages/AdminPage';
import { getUserRole } from './Navigation'; // Assuming this is defined

const AppRoutes = () => {
  const userRole = getUserRole();

  return (
    <Routes>
      <Route path='/employee/:id' element={<EmployeeDetailPage />} />
      <Route path='/admin' element={<AdminPage />} />
      <Route
        path='/'
        element={
          userRole === 'admin' ? (
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
