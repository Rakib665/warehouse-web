import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth)
  const logout =  () =>{
    signOut(auth)
  }
  return (
    <>
      <Navbar fixed='top'  bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to='/'>MY-WAR</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
            <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
          {
            user && <>
                        <Nav.Link as={Link} to='/manage'>Manage Item</Nav.Link>
                        <Nav.Link as={Link} to='/additem'>Add Item</Nav.Link>
                        <Nav.Link as={Link} to='/myitem'>My Item</Nav.Link>

            </>
          }
            {
             user ?
             <button onClick={logout}>Logout</button>
             :
             <Nav.Link as={Link} to='/login'>Login</Nav.Link>

              
            }
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;