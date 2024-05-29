import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navigation.css'; // Import the CSS file

export const getUserRole = () => {
  // This should be replaced with actual user role checking logic
  return 'admin'; // 'admin' or 'employee'
};

const Navigation = () => {
  const userRole = getUserRole();

  return (
    <Navbar bg='dark' variant='dark' expand='lg' className='navbar'>
      <Container>
        <Navbar.Brand as={Link} to='/' className='navbar-brand'>
          Activity Logger
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            {userRole === 'admin' && (
              <Nav.Link as={Link} to='/admin' className='nav-link'>
                Admin Dashboard
              </Nav.Link>
            )}
            {userRole === 'employee' && (
              <Nav.Link as={Link} to='/' className='nav-link'>
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
