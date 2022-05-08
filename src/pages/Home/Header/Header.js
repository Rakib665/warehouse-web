import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar  bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to='/'>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
            <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
            <Nav.Link as={Link} to='/register'>Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;