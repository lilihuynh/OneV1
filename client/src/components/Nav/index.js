import React, { useState } from "react";
import logo from './One_v1.png'

function Nav() {
  return (
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.)
  }

  <nav className="navbar navbar-default navbar-expand-lg navbar-dark " style={{ backgroundColor: "#b7a57a" }} >
    <a className="navbar-brand" href="/">
      <img
        src={logo} alt="logo"
        width="50"
        height="50"
        className="d-inline-block align-top"
      />
      {" "} One V1
      </a>

    <a href="#" type="button" class="btn btn-default navbar-btn ml-auto" style={{ color: "#b7a57a", backgroundColor: "#4b2e83" }}>
      <span class="glyphicon"></span>Logout
      </a>

  </nav>
  );
}

export default Nav;
