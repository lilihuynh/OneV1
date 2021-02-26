

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
// import LandingPage from './components/Landing';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import PasswordForgetPage from './components/PasswordForget';
// import AccountPage from './components/Account';
// import AdminPage from './components/Admin';
import HomePage from "./pages/Home";
import MatchInfoPage from "./pages/MatchInfo";
// import NoMatchPage from "./pages/NoMatch";
// import UserInfoPage from "./pages/UserInfo";
import Welcome from "./pages/Welcome";
// import * as ROUTES from './constants/routes';
// import { withAuthentication } from './components/Session';

function App  () {
  return(
  <Router>
    <div>
      <Navigation />
      <Switch>
//         <Route  path="/">
//           <Welcome />
//         </Route>
//         <Route  path="/signup">
//           <SignUpPage/>
//         </Route>
//         <Route  path="/signin">
//           <SignInPage />
//         </Route>
            <Route  path="/pfg">
//           <PasswordForgetPage />
//         </Route>
            <Route  path="/signin">
//           <SignInPage />
//         </Route>
//         <Route path="/posts">
//           <HomePage />
//         </Route>
            <Route path="/posts/:id">
//           <MatchInfoPage />
//         </Route>
//       </Switch>
 
    </div> 
  </Router>
  )
};

export default App;



      {/* <Route exact path={ROUTES.Welcome} component={Welcome} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.MatchInfo} component={MatchInfoPage} />
      <Route path={ROUTES.NoMatch} component={NoMatchPage} />
      <Route path={ROUTES.UserInfo} component={UserInfoPage} /> */}

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