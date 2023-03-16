import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FAQTemplate from "../FAQTemplate";

import { DropdownContext } from "../../contexts/dropdownContext";

const FAQsmall = () => {
  const { setClick } = useContext(DropdownContext);

  const toggle = () => {
    setClick(!setClick);
  };
  return (
    <div className="faq">
      <h2>FAQ</h2>
      <FAQTemplate question="Who are you?">
        I'm a student and hobby developer who is passionate about creating
        innovative and user-friendly solutions. If you want to learn more about
        me and my background, please visit my&nbsp;
        <Link to="/about" onClick={toggle}>
          About
        </Link>
        &nbsp;page where you can find more information about my interests,
        projects, and skills.
      </FAQTemplate>
      <FAQTemplate question="What kind of projects do you work on?">
        I work on a variety of projects, including web and mobile applications.
        My three main projects currently are mxNetwork, mxCloud, and mxDiscord.
        For more information about these projects and other smaller projects
        I've worked on or plan to work on, please visit my&nbsp;
        <Link to="/projects" onClick={toggle}>
          Projects
        </Link>
        &nbsp;page.
      </FAQTemplate>
      <FAQTemplate question="What are mxDiscord and mxCloud?">
        mxDiscord is a private, invite-only Discord bot that I have created for
        a select group of clients. It provides moderation, analytics, and other
        features to help communities run smoothly. mxCloud, on the other hand,
        is a private, invite-only file storage service that I have created for a
        select group of clients. It offers secure, reliable file storage and
        sharing capabilities to help individuals and businesses manage their
        files and data.
      </FAQTemplate>
      <FAQTemplate question="How can I access mxDiscord and mxCloud?">
        Unfortunately, mxDiscord and mxCloud are currently only available to a
        select group of clients by invitation only. If you're interested in
        learning more about these services or potentially becoming a client,
        please contact me for more information.
      </FAQTemplate>
      <FAQTemplate question="How can I contact you?">
        You can contact me through the contact form on my website or by sending
        me an email at contact@maxijaxi.net. I typically respond to inquiries
        within 24-48 hours.
      </FAQTemplate>
      <Link to="/faq" onClick={toggle}>
        <button>View more</button>
      </Link>
    </div>
  );
};

export default FAQsmall;
