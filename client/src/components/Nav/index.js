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


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { AuthUserContext } from '../Session';
// import SignOutButton from '../SignOut';
// import * as ROUTES from '../../constants/routes';
// import * as ROLES from '../../constants/roles';

// const Navigation = () => (
//   <AuthUserContext.Consumer>
//     {authUser =>
//       authUser ? (
//         <NavigationAuth authUser={authUser} />
//       ) : (
//         <NavigationNonAuth />
//       )
//     }
//   </AuthUserContext.Consumer>
// );

// const NavigationAuth = ({ authUser }) =>{
//   return (
//     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//       <Navbar.Brand href="/">
//         <img
//           src={logo}
//           width="30"
//           height="30"
//           className="d-inline-block align-top"
//           alt="React Bootstrap logo"
//         />
//         {' '} One V1
//   </Navbar.Brand>
//       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//       <Navbar.Collapse id="responsive-navbar-nav">
//         <Nav className="mr-auto">
//         <SignOutButton />
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
  
// }


// (
//   <ul>
//     <li>
//       <Link to={ROUTES.LANDING}>Landing</Link>
//     </li>
//     <li>
//       <Link to={ROUTES.HOME}>Home</Link>
//     </li>
//     <li>
//       <Link to={ROUTES.ACCOUNT}>Account</Link>
//     </li>
//     {!!authUser.roles[ROLES.ADMIN] && (
//       <li>
//         <Link to={ROUTES.ADMIN}>Admin</Link>
//       </li>
//     )}
//     <li>
//       <SignOutButton />
//     </li>
//   </ul>
// );

// const NavigationNonAuth = () =>{
//   return (
//     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//       <Navbar.Brand href="/">
//         <img
//           src={logo}
//           width="30"
//           height="30"
//           className="d-inline-block align-top"
//           alt="React Bootstrap logo"
//         />
//         {' '} One V1
//   </Navbar.Brand>
//       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//       <Navbar.Collapse id="responsive-navbar-nav">
//         <Nav className="mr-auto">
//           {/* <Nav.Link href="#features">Welcome</Nav.Link> */}
//           <Nav.Link to={ROUTES.SIGN_IN}>Sign In</Nav.Link>
//         </Nav>
//         <Nav>
//           <Nav.Link href="/sign-up">Sign Up</Nav.Link>
//           <Nav.Link eventKey={2} href="/">
//             Log Out
//       </Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
  
// }

// (
  
//   <ul>
//     <li>
//       <Link to={ROUTES.LANDING}>Landing</Link>
//     </li>
//     <li>
//       <Link to={ROUTES.SIGN_IN}>Sign In</Link>
//     </li>
//   </ul>

  
// );

// export default Navigation;
