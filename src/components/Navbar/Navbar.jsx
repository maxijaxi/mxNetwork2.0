import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Dropdown from "./Dropdown";
import { DropdownContext } from "../../contexts/dropdownContext";

import "../../scss/navbar.scss";

function Navbar() {
  const { setClick } = useContext(DropdownContext);

  const toggle = () => {
    setClick(!setClick);
  };
  return (
    <nav>
      <div className="wrapper">
        <div className="logo-wrapper">
          <Link to="/" className="logo" onClick={toggle}>
            <img src="https://server.maxijaxi.net/images/mxnLogo.png" alt="" />
            mxNetwork
          </Link>
        </div>
        <Link to="/" className="links" onClick={toggle}>
          Home
        </Link>
        <Link
          to="https://cloud.maxijaxi.net/"
          className="links"
          onClick={toggle}
        >
          mxCloud
        </Link>
        <a href="https://discord.maxijaxi.net" className="links" onClick={toggle}>
          mxDiscord
        </a>
        <Dropdown className="links" name="Other Pages" />
        <Link to="/updates" className="links" onClick={toggle}>
          Updates
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
