import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FAQTemplate from "../components/FAQTemplate";

import { DropdownContext } from "../contexts/dropdownContext";

import "../scss/faq.scss";

import useTitle from "../hooks/useTitle";
import useDesc from "../hooks/useDesc";
import useKeywords from "../hooks/useKeywords";

function FAQbig() {
  useTitle("FAQ");
  useDesc(
    "The FAQ page is designed to answer some of the most commonly asked questions about my work and services. From how to access mxDiscord and mxCloud, to how to contact me, you'll find the answers you need here. If you have a question that isn't answered on this page, please don't hesitate to reach out to me."
  );
  useKeywords("FAQ, Questions, Answers, mxDiscord, mxCloud, Contact, Services");

  const { setClick } = useContext(DropdownContext);

  const toggle = () => {
    setClick(!setClick);
  };
  return (
    <div className="faq-big">
      <div className="faq">
        <div className="faq-header">
          <h2>FAQ</h2>
          <p>
            <strong>Frequently Asked Question</strong>
          </p>
        </div>
        <div className="faq-section-wrap">
          <h3>Main page questions</h3>
          <FAQTemplate question="Who are you?">
            I'm a student and hobby developer who is passionate about creating
            innovative and user-friendly solutions. If you want to learn more
            about me and my background, please visit my&nbsp;
            <Link to="/about" onClick={toggle}>
              About
            </Link>
            &nbsp;page where you can find more information about my interests,
            projects, and skills.
          </FAQTemplate>
          <FAQTemplate question="What kind of projects do you work on?">
            I work on a variety of projects, including web and mobile
            applications. My three main projects currently are mxNetwork,
            mxCloud, and mxDiscord. For more information about these projects
            and other smaller projects I've worked on or plan to work on, please
            visit my&nbsp;
            <Link to="/projects" onClick={toggle}>
              Projects
            </Link>
            &nbsp;page.
          </FAQTemplate>
          <FAQTemplate question="What are mxDiscord and mxCloud?">
            mxDiscord is a private, invite-only Discord bot that I have created
            for a select group of clients. It provides moderation, analytics,
            and other features to help communities run smoothly. mxCloud, on the
            other hand, is a private, invite-only file storage service that I
            have created for a select group of clients. It offers secure,
            reliable file storage and sharing capabilities to help individuals
            and businesses manage their files and data.
          </FAQTemplate>
          <FAQTemplate question="How can I access mxDiscord and mxCloud?">
            Unfortunately, mxDiscord and mxCloud are currently only available to
            a select group of clients by invitation only. If you're interested
            in learning more about these services or potentially becoming a
            client, please contact me for more information.
          </FAQTemplate>
          <FAQTemplate question="How can I contact you?">
            You can contact me through the contact form on my website or by
            sending me an email at contact@maxijaxi.net. I typically respond to
            inquiries within 24-48 hours.
          </FAQTemplate>
        </div>
        <br />
        <div className="faq-section-wrap">
          <h3>About me</h3>
          <i>[implemented with page]</i>
        </div>
        <br />
        <div className="faq-section-wrap">
          <h3>mxNetwork</h3>
          <i>[implemented with page]</i>
        </div>
        <br />
        <div className="faq-section-wrap">
          <h3>mxCloud</h3>
          <i>[implemented with page]</i>
        </div>
        <br />
        <div className="faq-section-wrap">
          <h3>mxDiscord</h3>
          <i>[implemented with page]</i>
        </div>
        <br />
        <div className="faq-section-wrap">
          <h3>Other</h3>
          <i>[none yet]</i>
        </div>
      </div>
    </div>
  );
}

export default FAQbig;
