import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = ({ userRole }) => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          Employee App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            {userRole === 'admin' && (
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
