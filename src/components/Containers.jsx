import React, { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import "../styles/containersSection.css";

function Container(props) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className={`${props.className} wrapper `} data-aos="fade-up" data-aos-once="true">
      <div className="content-wrapper">
        <h2>{props.name}</h2>
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
}

export default Container;
