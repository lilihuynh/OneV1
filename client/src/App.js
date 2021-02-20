import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserHome from "./pages/Home";
import Detail from "./pages/MatchInfo";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Home from "./pages/SignIn";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/si">
          <Home />
        </Route>
        <Route exact path="/posts">
          <UserHome/>
        </Route>
        <Route exact path="/posts/:id">
          <Detail />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
