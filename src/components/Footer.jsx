import React from "react";
import { Link } from "react-router-dom";

import NewsletterSignup from "./NewsletterSignup";

import "../scss/footer.scss";

function Footer() {
  return (
    <footer>
      <div className="socials">
        <NewsletterSignup />
      </div>
      <div className="linksWrapper">
        <div className="linksContainer">
          <h3>Explore</h3>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Projects</Link>
            <Link to="/">Blog & News</Link>
            <Link to="/">FAQs</Link>
          </div>
        </div>
        <div className="linksContainer">
          <h3>Test2</h3>
          <div className="links">
            <Link to="/">Testo1</Link>
            <Link to="/">Test2</Link>
            <Link to="/">Teste3</Link>
            <Link to="/">Testere4</Link>
          </div>
        </div>
        <div className="linksContainer">
          <h3>Testeer3</h3>
          <div className="links">
            <Link to="/">Testo1</Link>
            <Link to="/">Test2</Link>
            <Link to="/">Teste3</Link>
            <Link to="/">Testere4</Link>
          </div>
        </div>
        <div className="linksContainer">
          <h3>Legal</h3>
          <div className="links">
            <Link to="/legal/privacy">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
            <Link to="/">Copyright Information</Link>
            <Link to="/">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
