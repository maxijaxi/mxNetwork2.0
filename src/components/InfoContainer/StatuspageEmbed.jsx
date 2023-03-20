import React from "react";
import { Helmet } from "react-helmet";

import "../../scss/info-container/container.scss";

const StatusEmbed = () => {
  return (
    <Helmet>
      <script src="https://mxnetwork1.statuspage.io/embed/script.js" />
    </Helmet>
  );
};

export default StatusEmbed;
