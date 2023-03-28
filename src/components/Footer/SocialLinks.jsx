import React, { useContext } from "react";
import { FaGithub, FaYoutube, FaTwitch, FaDiscord } from "react-icons/fa";

import { DropdownContext } from "../../contexts/dropdownContext";

function SocialsBar() {
  const { setClick } = useContext(DropdownContext);

  const toggle = () => {
    setClick(!setClick);
  };
  return (
    <div className="social-wrapper">
      <a
        href="https://github.com/maxijaxi"
        rel="noreferrer"
        target="_blank"
        onClick={() => {
          toggle();
        }}
      >
        <FaGithub className="icon" />
      </a>
      <a
        href="https://www.youtube.com/@skrableguy"
        rel="noreferrer"
        target="_blank"
        onClick={() => {
          toggle();
        }}
      >
        <FaYoutube className="icon" />
      </a>
      <a
        href="https://www.twitch.tv/m4x1s_live"
        rel="noreferrer"
        target="_blank"
        onClick={() => {
          toggle();
        }}
      >
        <FaTwitch className="icon" />
      </a>
      <a
        href="https://discord.gg/CyWMAfmYXT"
        rel="noreferrer"
        target="_blank"
        onClick={() => {
          toggle();
        }}
      >
        <FaDiscord className="icon" />
      </a>
    </div>
  );
}

export default SocialsBar;
