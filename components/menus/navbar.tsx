import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import firebase from 'firebase/app';
import 'firebase/auth';

export const NavMenu: React.FC = () => {
  const user = useSelector((state) => state.auth.user);

  const signOut = () => {
    firebase.auth().signOut();
  };

  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Navbar.Brand href='#home'>BG Music</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <span className='nav-link'>
            <Link href={'/'}>Featured</Link>
          </span>
          <span className='nav-link'>
            <Link href={'/categories'}>Categories</Link>
          </span>
        </Nav>
        <Nav>
          <span className='nav-link'>
            <Link href={'/profile'}>Profile</Link>
          </span>
          <span className='nav-link' onClick={user ? signOut : null}>
            {user ? (
              <Link href='/'>Logout</Link>
            ) : (
              <Link href='/login'>Login</Link>
            )}
          </span>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavMenu;
