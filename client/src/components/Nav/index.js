import React from 'react';
import logo from './One_v1.png';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LogoutButton} from "../Btn/btn";
import fire from '../../fire'

const handleLogout = () => {
  fire.auth().signOut();
};

const Navigationbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        {' '} One V1
  </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <LogoutButton oncClick={() => handleLogout()}>Log Out</LogoutButton>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
  
}
export default Navigationbar;
