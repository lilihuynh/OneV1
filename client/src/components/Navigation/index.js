import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

import React from 'react';
import logo from './One_v1.png';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';;



const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    {!!authUser.roles[ROLES.ADMIN] && (
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
    )}
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

export default Navigation;


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
//       <Navbar.Brand to={ROUTES.HOME}>
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
//           <Nav.Link  as={Link} to="/signin">Sign In</Nav.Link>
//         </Nav>
//         <Nav>
//           <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
//         </Nav>
//         <Nav>
//           <Nav.Link as={Link} to="/pfg">Password Forget Page</Nav.Link>
          
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
  
// }


// export default Navigation;
