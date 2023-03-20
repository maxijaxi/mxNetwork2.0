import React from "react";

import CookieConsent from "./CookieConsent";
import StatusEmbed from "./StatuspageEmbed";

import "../../scss/info-container/container.scss"

function InfoContainer() {
  return (
    <div className="info-wrapper">
      <div className="info-container">
        <StatusEmbed />
        <CookieConsent />
      </div>
    </div>
  );
}

export default InfoContainer;
