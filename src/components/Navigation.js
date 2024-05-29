import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Dummy function to check user role
const getUserRole = () => {
  // This should be replaced with actual user role checking logic
  return 'manager'; // 'manager' or 'employee'
};

const Navigation = () => {
  const userRole = getUserRole();

  return (
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
  );
};

export default Navigation;
