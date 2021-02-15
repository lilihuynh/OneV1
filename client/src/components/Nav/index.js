import React from "react";
import logo from './One_v1.png'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={backgroundColor: ""}>
      <a className="navbar-brand" href="/">
      <img src = {logo} alt="Logo"/>;
        React Reading List
      </a>
    </nav>
  );
}

export default Nav;
