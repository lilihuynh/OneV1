import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Home";
import Detail from "./pages/MatchInfo";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Home from "./pages/SignIn";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" exact component={Home} />
        <Route exact path="/bets">
          <Books />
        </Route>
        <Route exact path="/books/:id">
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
