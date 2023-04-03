import React, { useEffect, useRef, useState } from "react";

import "../scss/mxMe/skillBar.scss";

const SkillBar = (props) => {
  const { name, percentage, color } = props;
  const [width, setWidth] = useState(0);
  const skillBarRef = useRef(null);

  const onIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setWidth(percentage);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    if (skillBarRef.current) {
      observer.observe(skillBarRef.current);
    }

    return () => {
      if (skillBarRef.current) {
        observer.unobserve(skillBarRef.current);
      }
    };
  }, [percentage, skillBarRef]);

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
