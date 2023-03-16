import React, { useContext } from "react";
import { Link } from "react-router-dom";

import DropdownRight from "./DropdownRight";
import DropdownMobile from "./DropdownMobile";
import { MobileDropdownContext } from "../../contexts/mobileDropdownContext";

import "../../scss/navbar.scss";

function MobileNavbar() {
  const { MsetClick } = useContext(MobileDropdownContext);

  const Mtoggle = () => {
    MsetClick(!MsetClick);
  };
  return (
    <div className="nav-mobile">
      <div className="wrapper">
        <div className="logo-wrapper">
          <Link to="/" className="logo" onClick={Mtoggle}>
            <img src="https://server.maxijaxi.net/images/mxnLogo.png" alt="" />
            mxNetwork
          </Link>
        </div>
        <DropdownMobile className="links">
          <DropdownRight className="links" name="Other Pages" />
        </DropdownMobile>
      </div>
    </div>
  );
}

export default MobileNavbar;
