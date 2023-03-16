import React from "react";

import useTitle from "../hooks/useTitle";

import "../scss/err-page.scss";

function Error404() {
  useTitle("404 Not Found");

  const errorTexts = [
    "404 error: The page you're looking for is hiding from us. It's shy like that.",
    "Looks like this page is on vacation. Check back later!",
    "Page not found, but don't worry, we're on it!",
    "Uh oh, it looks like this page is lost. Let's help it find its way back!",
    "We apologize for the inconvenience, but this page seems to have gone rogue. We'll do our best to track it down.",
    "Oops, looks like we took a wrong turn somewhere. Let's regroup and try again!",
    "404 error: the page is missing in action. We're calling in the reinforcements to help us find it!",
    "Page not found. Did you try turning it off and on again?",
    "This page seems to have gone on a vacation. Let's hope it comes back soon!",
    "We searched high and low, but the page you're looking for seems to have vanished into thin air.",
    "Looks like you stumbled into the wrong neighborhood. This page doesn't exist.",
    "Houston, we have a problem. The page you're looking for is lost in space.",
  ];

  const randomErrorText =
    errorTexts[Math.floor(Math.random() * errorTexts.length)];

  return (
    <div className="error-page">
      <div className="error-code">
        <h1>404</h1>
      </div>
      <div className="error-text">
        <div className="error-text-sizer">
          <h2>{randomErrorText}</h2>
        </div>
      </div>
    </div>
  );
}

export default Error404;
