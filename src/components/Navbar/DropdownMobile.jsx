import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import { MobileDropdownContext } from "../../contexts/mobileDropdownContext";

const Dropdown = (props) => {
  const { Mclick, MsetClick } = useContext(MobileDropdownContext);

  const Mtoggle = () => {
    MsetClick(!Mclick);
  };
  return (
    <div>
      <div className="mobile-linksDropdown" onClick={Mtoggle}>
        <i className="material-icons">menu</i>
      </div>
      <CSSTransition
        in={Mclick}
        timeout={300}
        classNames="dropdown-animation"
        unmountOnExit
      >
        <div className="mobile-container">
          <div className="mobile-dropdown-wrapper">
            <Link to="/" className="links" onClick={Mtoggle}>
              Home
            </Link>
            <Link
              to="https://cloud.maxijaxi.net/"
              className="links"
              onClick={Mtoggle}
            >
              mxCloud
            </Link>
            <a href="https://discord.maxijaxi.net" className="links" onClick={Mtoggle}>
              mxDiscord
            </a>
            {props.children}
            <Link to="/updates" className="links" onClick={Mtoggle}>
              Updates
            </Link>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Dropdown;
