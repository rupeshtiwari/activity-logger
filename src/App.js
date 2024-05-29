import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from 'react-router-dom';
import EmployeeDetailPage from './pages/EmployeeDetailPage';
import AdminPage from './pages/AdminPage'; // Updated import
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

// Dummy function to check user role
const getUserRole = () => {
  // This should be replaced with actual user role checking logic
  return 'manager'; // 'manager' or 'employee'
};

const App = () => {
  const userRole = getUserRole();

  return (
    <Router>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            Employee App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              {userRole === 'manager' && (
                <Nav.Link as={Link} to='/admin'>
                  Admin Dashboard
                </Nav.Link>
              )}
              {userRole === 'employee' && (
                <Nav.Link as={Link} to='/'>
                  Employee Dashboard
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className='mt-4'>
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
      </Container>
    </Router>
  );
};

export default App;
