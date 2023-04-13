import React from "react";
import { FaTwitch, FaYoutube, FaInstagram, FaDiscord } from "react-icons/fa";

import "../../../scss/mxMe/social.scss";

function Social() {
  return (
    <div className="social">
      <div className="header">
        <h2>Socials</h2>
      </div>
      <div className="content_socials">
        <div className="social-box" style={{ backgroundColor: "#9146FF" }}>
          <div className="banner">
            <img src="path/to/twitch-banner.jpg" alt="Twitch banner" />
          </div>
          <FaTwitch className="social-icon" />
          <p>Follow me on Twitch</p>
          <a
            href="https://www.twitch.tv/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Visit Twitch</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Social;
