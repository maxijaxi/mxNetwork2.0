import React, { useEffect, useState, useRef } from "react";

import "../scss/mxMe/skillBar.scss";

const SkillBar = (props) => {
  const { name, percentage, color } = props;
  const [width, setWidth] = useState(0);
  const skillBarRef = useRef(null);

  useEffect(() => {
    const checkIfInView = () => {
      const skillBarContainer = skillBarRef.current;
      const top = skillBarContainer.getBoundingClientRect().top;
      const bottom = skillBarContainer.getBoundingClientRect().bottom;

      if (top >= 0 && bottom <= window.innerHeight) {
        setWidth(percentage);
      }
    };

    window.addEventListener("scroll", checkIfInView);
    return () => window.removeEventListener("scroll", checkIfInView);
  }, [percentage]);

  const isGradient = color.includes("gradient");

  const skillBarStyle = {
    width: `${width}%`,
    background: isGradient ? color : `linear-gradient(${color}, ${color})`,
    transition: "width 1.6s ease",
  };
  return (
    <div className="skillBar">
      <div className="skill-header">
        <h4>{name}</h4>
        <strong>{percentage}%</strong>
      </div>
      <div className="skillBarContainer" ref={skillBarRef}>
        <div className="skillBarFill" style={skillBarStyle} />
      </div>
    </div>
  );
};

export default SkillBar;
