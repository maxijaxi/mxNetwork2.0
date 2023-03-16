import React from "react";
import GlitchText from "./GlitchText";

import "../../styles/banner.css";
import "../../styles/glitchText.css";

function Banner(props) {
  return (
    <div>
      <div className="banner-wrapper">
        <img src={props.url} alt="" className="banner" />
      </div>
      <GlitchText />
    </div>
  );
}

export default Banner;
