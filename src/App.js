import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import AppRoutes from './components/AppRoutes';

const getUserRole = () => {
  // Replace this with actual user role checking logic
  return 'admin'; // 'admin' or 'employee'
};

const App = () => {
  const userRole = getUserRole();

  return (
    <Router>
      <Navigation userRole={userRole} />
      <div className='container mt-4'>
        <Routes>
          <Route path='/activity-logger' element={<Navigate to='/admin' />} />
          <Route path='/*' element={<AppRoutes userRole={userRole} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
