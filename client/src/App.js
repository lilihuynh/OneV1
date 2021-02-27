import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserHome from "./pages/Home";
import Detail from "./pages/MatchInfo";
import NoMatch from "./pages/NoMatch";
import Navigationbar from "./components/Nav/index";
import Home from "./pages/Welcome";
import fire from './fire'
import Login from './pages/Login'
import "./APP.css";
const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/user-disabled":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("")
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
<<<<<<< HEAD
    <Router>
    <div>
    <Nav/>
      {
   
      
      /* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
        <li>
          <Link to="/signin">signin</Link>
        </li>
      </ul> */}

      <hr />

      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>

        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/about">
          <NoMatch />
        </Route>
        <Route path="/signin">
          <SignInPage/>
        </Route>
        <Route path="/signup">
          <SignUpPage/>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}
=======
    <div className="App">
      {user ? (
        <Router>
          <Navigationbar handleLogout={handleLogout} />
          <Switch>
            <Route exact path="/">
            <Home />
          </Route>
            <Route exact path="/posts">
              <UserHome />
            </Route>
            <Route exact path="/posts/:id">
              <Detail />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      ) : (
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
          />
        )}
    </div>
  );
};

>>>>>>> master
export default App;



// const App = () => (
//   <Router>
//     <div>
//       <Navigation />

//       <hr />

//       <Route exact path={ROUTES.LANDING} component={LandingPage} />
//       <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
//       <Route path={ROUTES.SIGN_IN} component={SignInPage} />
//       <Route
//         path={ROUTES.PASSWORD_FORGET}
//         component={PasswordForgetPage}
//       />
//       {/* <Route path={ROUTES.HOME} component={Home} /> */}
//       <Route path={ROUTES.NOMATCH} component={NoMatch} />
//       <Route path={ROUTES.ACCOUNT} component={AccountPage} />
//       <Route path={ROUTES.ACCOUNT} component={AccountPage} />
//       <Route path={ROUTES.ADMIN} component={AdminPage} />
//     </div>
//   </Router>
// );

// export default withAuthentication(App);




// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// import Navigation from './components/Navigation';
// import Landing from './components/Landing';
// import SignUpPage from './components/SignUp';
// import SignInPage from './components/SignIn';
// import PasswordForgetPage from './components/PasswordForget';
// import AccountPage from './components/AccountPage';
// import AdminPage from './components/Admin';
// import HomePage from "./pages/Home";
// import MatchInfoPage from "./pages/MatchInfo";
// // import NoMatchPage from "./pages/NoMatch";
// // import UserInfoPage from "./pages/UserInfo";
// import Welcome from "./pages/Welcome";
// // import * as ROUTES from './constants/routes';
// // import { withAuthentication } from './components/Session';

// function App  () {

//   <Router>
//     <div>
//       <Navigation />

//       <hr />

//       <Route exact path={ROUTES.Landing} component={LandingPage} />
//       <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
//       <Route path={ROUTES.SIGN_IN} component={SignInPage} />
//       <Route
//         path={ROUTES.PASSWORD_FORGET}
//         component={PasswordForgetPage}
//       />
//       <Route path={ROUTES.HOME} component={HomePage} />
//       <Route path={ROUTES.ACCOUNT} component={AccountPage} />
//       <Route path={ROUTES.ADMIN} component={AdminPage} />
//     </div>
//   </Router>
// };

// export default App;



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