import React from 'react';
import logo from './One_v1.png';
import { Navbar, Nav } from 'react-bootstrap';
// import * as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// class Navigationbar extends Component {
//   state = { clicked: false }

//   render() {
function Navigationbar() {
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
          {/* <Nav.Link href="#features">Welcome</Nav.Link> */}
          <Nav.Link href="/sign-up">Sign Up</Nav.Link>
          <Nav.Link href="/sign-in">Sign In</Nav.Link>
          <Nav.Link eventKey={2} href="/">
            Log Out</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
  
}
export default Navigationbar;
