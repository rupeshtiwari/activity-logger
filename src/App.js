import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import AppRoutes from './components/AppRoutes';

const App = () => {
  return (
    <Router>
      <Navigation />
      <div className='container mt-4'>
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
