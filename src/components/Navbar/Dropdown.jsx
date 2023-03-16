import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import DropLinks from "./DropdownLinks";

import { DropdownContext } from "../../contexts/dropdownContext";

const Dropdown = (props) => {
  const { click, setClick } = useContext(DropdownContext);

  const toggle = () => {
    setClick(!click);
  };
  return (
    <div>
      <div className="linksDropdown" onClick={toggle}>
        {props.name}
        <i className="material-icons">
          {click ? "expand_less" : "expand_more"}
        </i>
      </div>
      <CSSTransition
        in={click}
        timeout={300}
        classNames="dropdown-animation"
        unmountOnExit
      >
        <div className="container"><DropLinks /></div>
      </CSSTransition>
    </div>
  );
};

export default Dropdown;
