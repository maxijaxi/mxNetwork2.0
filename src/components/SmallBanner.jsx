import React from "react";

import "../styles/smallBanner.css";

function SmallBanner(props) {
  return (
    <div className="smallBanner-wrapper">
      <img src={props.url} alt="" className="smallBanner" />
    </div>
  );
}

export default SmallBanner;
