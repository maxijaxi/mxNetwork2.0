import React from "react";

import NewsletterSignup from "../NewsletterSignup";
import FooterLinks from "./FooterLinks";
import SocialsBar from "./SocialLinks";

import "../../scss/footer.scss";

function Footer() {
  return (
    <footer>
      <div className="socials">
        <NewsletterSignup />
        <SocialsBar />
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Maximilian Schuster. All rights
          reserved.</p>
        </div>
      </div>
      <FooterLinks />
    </footer>
  );
}

export default Footer;
