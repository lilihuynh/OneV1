import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserHome from "./pages/Home";
import Detail from "./pages/MatchInfo";
import NoMatch from "./pages/NoMatch";
import Navigationbar from "./components/Nav";
import Home from "./pages/SignIn";

function App() {
  return (
    <Router>
      <Navigationbar />
      <Switch>
        <Route exact path="/">
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
