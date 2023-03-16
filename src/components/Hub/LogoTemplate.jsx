import React from "react";

import "../../styles/logoTemplate.css";

function LogoTemp(props) {
  return (
    <div className="logoTemp-Wrapper">
      <div className="logoTemp">
        <img
          src={props.adress}
          alt=""
        ></img>
      </div>
      <h4>{props.name}</h4>
    </div>
  );
}

export default LogoTemp;
