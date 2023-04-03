import React, { useEffect, useState, useRef } from "react";

import "../scss/mxMe/skillBar.scss";

const SkillBar = (props) => {
  const { name, percentage, color } = props;
  const [width, setWidth] = useState(0);
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const skillBarRef = useRef(null);

  useEffect(() => {
    const checkIfInView = () => {
      const skillBarContainer = skillBarRef.current;
      const top = skillBarContainer.getBoundingClientRect().top;
      const bottom = skillBarContainer.getBoundingClientRect().bottom;

      if (top >= 0 && bottom <= window.innerHeight && !animationPlayed) {
        setWidth(percentage);
        animatePercentage();
        setAnimationPlayed(true);
      }
    };

    const animatePercentage = () => {
      let start = 0;
      const duration = 1600; // 1.6s animation duration
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        setAnimatedPercentage(Math.floor(progress * percentage));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    checkIfInView(); // Check if in view on initial load
    window.addEventListener("scroll", checkIfInView);
    return () => window.removeEventListener("scroll", checkIfInView);
  }, [percentage, animationPlayed]);

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
        <strong>{animatedPercentage}%</strong>
      </div>
      <div className="skillBarContainer" ref={skillBarRef}>
        <div className="skillBarFill" style={skillBarStyle} />
      </div>
    </div>
  );
};

export default SkillBar;
