import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../hooks/useUserContext';
import { useLogout } from '../hooks/useLogout';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/style/navbar.css';

const DashNavbar = () => {
  const { user, isLoading } = useUserContext();
  const navigate = useNavigate();
  const logout = useLogout();

  const handleLogout = () => {
    logout();
    navigate('/');
  }

  if (isLoading) {
    return null;
  }

  return (
    <Navbar collapseOnSelect expand="lg" className='navbar' style={{padding: "20px"}}>
      <Container>
      <Navbar.Brand className='small-caps-font24'>Nu-Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='me-auto'>
            <Nav.Link href='/' className='small-caps-font24'>Dashboard</Nav.Link>
            <Nav.Link href='/add-entry' className='small-caps-font24'>Add Entry</Nav.Link>
          </Nav>
      
      </Navbar.Collapse>
      {user && (
        <>
          <div className="user">
            <p>Welcome, {user.username}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </>
      )}
      </Container>
    </Navbar>
  );
};

export default DashNavbar;


