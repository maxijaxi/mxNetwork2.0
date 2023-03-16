import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { DropdownContext } from "../../contexts/dropdownContext";

import useTitle from "../../hooks/useTitle";
import useDesc from "../../hooks/useDesc";
import useKeywords from "../../hooks/useKeywords";

function Legal() {
  useTitle("Legal Pages");
  useDesc(
    "Find important legal information regarding our website, including Privacy Policy, Cookie Policy, Data Subject Access Request Form and Disclaimer. Learn about your rights and how we collect and use your personal data"
  );
  useKeywords(
    "legal, privacy policy, cookie policy, data subject access request, disclaimer, personal data, rights"
  );

  const { setClick } = useContext(DropdownContext);

  const toggle = () => {
    setClick(!setClick);
  };

  return (
    <div className="legal">
      <div>
        <h1>LEGAL PAGES</h1>
        <br />
        <small>Click on the box to navigate to the page.</small>
        <br />
        <br />
        <br />
        <div className="legal-links">
          <Link to="/legal/privacy" onClick={toggle}>
            <div className="legal-links-container">
              <h2>PRIVACY POLICY</h2>
              <p>
                This outlines how we collect, use, and protect your personal
                information.
              </p>
            </div>
          </Link>
          <Link to="/legal/cookies" onClick={toggle}>
            <div className="legal-links-container">
              <h2>COOKIE POLICY</h2>
              <p>
                This explains how we use cookies and similar technologies on our
                website.
              </p>
            </div>
          </Link>
          <Link to="/legal/disclaimer" onClick={toggle}>
            <div className="legal-links-container">
              <h2>DISCLAIMER</h2>
              <p>
                This details the terms and conditions governing your use of our
                website.
              </p>
            </div>
          </Link>
          <Link to="/legal/data" onClick={toggle}>
            <div className="legal-links-container">
              <h2>DATA SUBJECT ACCESS REQUEST FORM</h2>
              <p>
                This form allows you to request access to the personal data we
                hold about you.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Legal;
