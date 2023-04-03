import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { DropdownContext } from "../../contexts/dropdownContext";

const FooterLinks = () => {
  const { setClick } = useContext(DropdownContext);

  const toggle = () => {
    setClick(!setClick);
  };
  return (
    <div className="linksWrapper">
      <div className="linksContainer">
        <h3>Explore</h3>
        <div className="links">
          <Link
            to="/"
            onClick={() => {
              toggle();
            }}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => {
              toggle();
            }}
          >
            About
          </Link>
          <Link
            to="/projects"
            onClick={() => {
              toggle();
            }}
            style={{ color: "red" }}
          >
            Projects
          </Link>
          <Link
            to="/blog"
            onClick={() => {
              toggle();
            }}
            style={{ color: "red" }}
          >
            Blog
          </Link>
          <Link
            to="/form"
            onClick={() => {
              toggle();
            }}
            style={{ color: "red" }}
          >
            Form
          </Link>
          <Link
            to="/faq"
            onClick={() => {
              toggle();
            }}
          >
            FAQs
          </Link>
          <Link
            to="/dev/resources"
            onClick={() => {
              toggle();
            }}
            style={{ color: "red" }}
          >
            Resources
          </Link>
          <Link
            to="/dev/articles"
            onClick={() => {
              toggle();
            }}
            style={{ color: "red" }}
          >
            Articles
          </Link>
        </div>
      </div>

      <div className="linksContainer">
        <h3>This is me</h3>
        <div className="links">
          <Link
            to="/thisIs/mx/profile"
            onClick={() => {
              toggle();
            }}
          >
            Profile
          </Link>
          <Link
            to="/thisIs/mx/services"
            onClick={() => {
              toggle();
            }}
            style={{ color: "red" }}
          >
            Services
          </Link>
          <Link
            to="/thisIs/mx/feedback"
            onClick={() => {
              toggle();
            }}
            style={{ color: "red" }}
          >
            Feedback
          </Link>
          <Link
            to="/thisIs/mx/social"
            onClick={() => {
              toggle();
            }}
            style={{ color: "red" }}
          >
            Social
          </Link>
          <Link
            to="/contact"
            onClick={() => {
              toggle();
            }}
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="linksContainer">
        <h3>Projects</h3>
        <div className="links">
          <a
            href="https://mxnetwork1.statuspage.io/"
            rel="noreferrer"
            target="_blank"
            onClick={() => {
              toggle();
            }}
          >
            Service Status
          </a>
          <a
            href="https://github.com/maxijaxi"
            rel="noreferrer"
            target="_blank"
            onClick={() => {
              toggle();
            }}
          >
            GitHub
          </a>
          <Link
            to="/updates"
            onClick={() => {
              toggle();
            }}
          >
            Updates
          </Link>
          <a
            href="https://cloud.maxijaxi.net"
            rel="noreferrer"
            target="_blank"
            onClick={() => {
              toggle();
            }}
          >
            mxCloud
          </a>
          <a
            href="https://discord.maxijaxi.net"
            rel="noreferrer"
            target="_blank"
            onClick={() => {
              toggle();
            }}
          >
            mxDiscord
          </a>
          <a
            href="https://summer.maxijaxi.net"
            rel="noreferrer"
            target="_blank"
            onClick={() => {
              toggle();
            }}
          >
            SummerServer
          </a>
        </div>
      </div>
      <div className="linksContainer">
        <h3>Legal</h3>
        <div className="links">
          <Link
            to="/legal/privacy"
            onClick={() => {
              toggle();
            }}
          >
            Privacy Policy
          </Link>
          <Link
            to="/legal/cookies"
            onClick={() => {
              toggle();
            }}
          >
            Cookie Policy
          </Link>
          <Link
            to="/legal/disclaimer"
            onClick={() => {
              toggle();
            }}
          >
            Disclaimer
          </Link>
          <Link
            to="/legal/data"
            onClick={() => {
              toggle();
            }}
          >
            DSARF
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
