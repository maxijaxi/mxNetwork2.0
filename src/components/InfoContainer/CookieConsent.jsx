import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

import { DropdownContext } from "../../contexts/dropdownContext";

import "../../scss/info-container/cookie.scss";

const CookieConsent = () => {
  const { setClick } = useContext(DropdownContext);

  const toggle = () => {
    setClick(!setClick);
  };

  const [cookies, setCookie] = useCookies(["CookieConsent"]);

  if (cookies.CookieConsent) {
    return null;
  }

  const handleClick = () => {
    setCookie("CookieConsent", true, { path: "/", maxAge: 86400 * 30 });
  };

  return (
    <div className="cookie">
      <h4>Cookies</h4>
      <p>We use cookies to improve functionality and performance.</p>
      <div>
        <button onClick={handleClick}>I agree</button>
        <Link to="/legal/cookies" onClick={toggle} className="link-cookie">
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default CookieConsent;
