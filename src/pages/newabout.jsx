import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { DropdownContext } from "../contexts/dropdownContext";

import useTitle from "../hooks/useTitle";
import useDesc from "../hooks/useDesc";
import useKeywords from "../hooks/useKeywords";

import "../scss/mxMe/about.scss";

function About() {
  useTitle("About me");
  useDesc("This is text");
  useKeywords("This, is, test");

  const { setClick } = useContext(DropdownContext);

  const toggle = () => {
    setClick(!setClick);
  };
  return (
    <div className="about-me">
      <div className="about-header">
        <h2>Creativity. Fresh. Dark. Stylish. This is mxNetwork.</h2>
      </div>
      <div>

      </div>
    </div>
  );
}

export default About;
