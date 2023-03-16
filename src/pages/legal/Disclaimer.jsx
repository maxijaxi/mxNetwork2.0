import React from "react";

import useTitle from "../../hooks/useTitle";
import useDesc from "../../hooks/useDesc";
import useKeywords from "../../hooks/useKeywords";

function Disclaimer() {
  useTitle("Hub");
  useDesc(
    "Read our website's disclaimer to understand the limitations of liability and warranties for the information provided on our website."
  );
  useKeywords("disclaimer, legal, website disclaimer, limitation of liability");
  return (
    <div className="legal">
      <div>
        <h1>DISCLAIMER</h1>
        <small>
          <strong>Last updated March 15, 2023</strong>
        </small>
        <br />
        <br />
        <br />
        <p>
          <span style={{ display: "inline" }}>
            The information provided by mxNetwork ("<strong>we</strong>," "
            <strong>us</strong>," and "<strong>our</strong>
            ") on&nbsp;
            <a href="https://maxijaxi.net" rel="noreferrer" target="_blank">
              https://www.maxijaxi.net
            </a>
            &nbsp;(the&nbsp;"<strong>Site</strong>") and our mobile application
            is for general informational purposes only. All information on the
            Site and our mobile application is provided in good faith, however
            we make no representation or warranty of any kind, express or
            implied, regarding the accuracy, adequacy, reliability,
            availability, or completeness of any information on the Site or our
            mobile application. UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY
            LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A
            RESULT OF THE USE OF THE SITE OR OUR MOBILE APPLICATION OR RELIANCE
            ON ANY INFORMATION PROVIDED ON THE SITE AND OUR MOBILE APPLICATION.
            YOUR USE OF THE SITE AND OUR MOBILE APPLICATION AND YOUR RELIANCE ON
            ANY INFORMATION ON THE SITE AND OUR MOBILE APPLICATION IS SOLELY AT
            YOUR OWN RISK.
          </span>
        </p>
      </div>
    </div>
  );
}

export default Disclaimer;
