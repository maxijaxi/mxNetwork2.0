import React, { useEffect, useState } from "react";

import "../scss/mxMe/skillBar.scss";

const SkillBar = (props) => {
  const { name, percentage, color } = props;
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, 100);

    return () => clearTimeout(timer);
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
      <div className="skillBarContainer">
        <div className="skillBarFill" style={skillBarStyle} />
      </div>
    </div>
  );
};

export default SkillBar;
