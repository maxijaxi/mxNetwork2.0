import React, { useState, useRef, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

import "../scss/faq.scss";

const FAQTemplate = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  const toggleOpen = () => setIsOpen(!isOpen);

  const arrowStyles = {
    size: "1.4rem",
    strokeWidth: "1",
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleOpen}>
        <div className="question-text">{props.question}</div>
        <div className="icon-wrapper">
          {isOpen ? <FaMinus {...arrowStyles} /> : <FaPlus {...arrowStyles} />}
        </div>
      </div>
      <div ref={contentRef} className="faq-answer" style={{ height: height }}>
        <div style={{ padding: "1rem" }}>{props.children}</div>
      </div>
    </div>
  );
};

export default FAQTemplate;
