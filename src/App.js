import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import AppRoutes from './components/AppRoutes';

// Determine the basename based on the environment
const basename =
  process.env.NODE_ENV === 'production' ? '/activity-logger' : '/';

const App = () => {
  return (
    <Router basename={basename}>
      <Navigation />
      <div className='container mt-4'>
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
