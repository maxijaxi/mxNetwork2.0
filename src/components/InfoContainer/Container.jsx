import React from "react";

import CookieConsent from "./CookieConsent";

import "../../scss/info-container/container.scss"

function InfoContainer() {
  return (
    <div className="info-wrapper">
      <div className="info-container">
        <CookieConsent />
      </div>
    </div>
  );
}

export default InfoContainer;
