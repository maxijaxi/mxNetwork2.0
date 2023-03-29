import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { DropdownContext } from "../../contexts/dropdownContext";
import { MobileDropdownContext } from "../../contexts/mobileDropdownContext";

const DropLinks = () => {
  const { setClick } = useContext(DropdownContext);

  const toggle = () => {
    setClick(!setClick);
  };
  const { Mclick, MsetClick } = useContext(MobileDropdownContext);

  const Mtoggle = () => {
    MsetClick(!Mclick);
  };
  return (
    <React.Fragment>
      <div className="dropdown-wrapper">
        <div>
          <h3>Explore</h3>
          <div className="dropdown-container">
            <Link
              to="/about"
              className="items"
              onClick={() => {
                toggle();
                Mtoggle();
              }}
            >
              About
            </Link>
            <br />
            <Link
              to="/projects"
              className="items"
              onClick={() => {
                toggle();
                Mtoggle();
              }}
              style={{ color: "red" }}
            >
              Projects
            </Link>
            <br />
            <Link
              to="/blog"
              className="items"
              onClick={() => {
                toggle();
                Mtoggle();
              }}
              style={{ color: "red" }}
            >
              Blog
            </Link>
            <br />
            <Link
              to="/form"
              className="items"
              onClick={() => {
                toggle();
                Mtoggle();
              }}
              style={{ color: "red" }}
            >
              Form
            </Link>
            <br />
            <Link
              to="/faq"
              className="items"
              onClick={() => {
                toggle();
                Mtoggle();
              }}
            >
              FAQs
            </Link>
          </div>
        </div>
        <div>
          <div className="dropdown-container">
            <h3>This is me</h3>
            <Link
              to="/thisIs/mx/profile"
              className="items"
              onClick={() => {
                toggle();
                Mtoggle();
              }}
              style={{ color: "red" }}
            >
              Profile
            </Link>
            <br />
            <Link
              to="/thisIs/mx/services"
              className="items"
              onClick={() => {
                toggle();
                Mtoggle();
              }}
              style={{ color: "red" }}
            >
              Services
            </Link>
            <br />
            <Link
              to="/thisIs/mx/feedback"
              className="items"
              onClick={() => {
                toggle();
                Mtoggle();
              }}
              style={{ color: "red" }}
            >
              Feedback
            </Link>
            <br />
            <Link
              to="/thisIs/mx/social"
              className="items"
              onClick={() => {
                toggle();
                Mtoggle();
              }}
              style={{ color: "red" }}
            >
              Social
            </Link>
            <br />
            <Link
              to="/contact"
              className="items"
              onClick={() => {
                toggle();
                Mtoggle();
              }}
            >
              Contact
            </Link>
          </div>
        </div>
        <div>
          <h3>Development</h3>
          <div className="dropdown-container">
          <a
              href="https://mxnetwork1.statuspage.io/"
              className="items"
              rel="noreferrer"
              target="_blank"
              onClick={() => {
                toggle();
                Mtoggle();
              }}
            >
              Service Status
            </a>
            <br />
            <Link
              to="/dev/resources"
              className="items"
              onClick={() => {
                toggle();
                Mtoggle();
              }}
              style={{ color: "red" }}
            >
              Resources
            </Link>
            <br />
            <Link
              to="/dev/articles"
              className="items"
              onClick={() => {
                toggle();
                Mtoggle();
              }}
              style={{ color: "red" }}
            >
              Articles
            </Link>
            <br />
            <a
              href="https://github.com/maxijaxi"
              className="items"
              rel="noreferrer"
              target="_blank"
              onClick={() => {
                toggle();
                Mtoggle();
              }}
            >
              GitHub
            </a>
            <br />
            <Link
              to="/updates"
              className="items"
              onClick={() => {
                toggle();
                Mtoggle();
              }}
            >
              Updates
            </Link>
          </div>
        </div>
        <div>
          <h3>More</h3>
          <div className="dropdown-container">
            <Link
              to="/legal"
              className="items"
              onClick={() => {
                toggle();
                Mtoggle();
              }}
            >
              Legal
            </Link>
            <br />
            <Link
              to="/thisIs/mx/social/events"
              className="items"
              onClick={() => {
                toggle();
                Mtoggle();
              }}
              style={{ color: "red" }}
            >
              Events
            </Link>
            <br />
            <a
              href="https://summer.maxijaxi.net/"
              className="items"
              onClick={() => {
                toggle();
                Mtoggle();
              }}
            >
              SummerServer
            </a>
            <br />
            <Link
              to="/"
              className="items"
              onClick={() => {
                toggle();
                Mtoggle();
              }}
              style={{ color: "gray" }}
            >
              [unreleased]
            </Link>
            <br />
            <Link
              to="/"
              className="items"
              onClick={() => {
                toggle();
                Mtoggle();
              }}
              style={{ color: "gray" }}
            >
              [unreleased]
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DropLinks;
