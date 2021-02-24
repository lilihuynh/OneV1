// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import UserHome from "./pages/Home";
// import Detail from "./pages/MatchInfo";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
// import Home from "./pages/SignIn";

// function App() {
//   return (
//     <Router>
//       <Nav />
//       <Switch>
//         <Route exact path="/si">
//           <Home />
//         </Route>
//         <Route exact path="/posts">
//           <UserHome/>
//         </Route>
//         <Route exact path="/posts/:id">
//           <Detail />
//         </Route>
//         <Route>
//           <NoMatch />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import LandingPage from './components/Landing';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import PasswordForgetPage from './components/PasswordForget';
import HomePage from './components/Home';
import AccountPage from './components/Account';
import AdminPage from './components/Admin';

import * as ROUTES from './constants/routes';
import { withAuthentication } from './components/Session';

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router>
);

export default withAuthentication(App);
