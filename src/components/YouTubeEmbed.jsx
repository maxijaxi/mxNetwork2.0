import React, { useEffect, useRef } from "react";
import "../styles/YouTubeEmbed.css";

const YouTubeEmbed = () => {
  const ifmRef = useRef(null);

  useEffect(() => {
    function resizeIframe() {
      const ifm = ifmRef.current;
      if (ifm) {
        ifm.style.height = ifm.offsetWidth * (9 / 16) + "px";
      }
    }

    resizeIframe();
    window.addEventListener("resize", resizeIframe);

    return () => {
      window.removeEventListener("resize", resizeIframe);
    };
  }, []);

  return (
    <iframe
      ref={ifmRef}
      className="responsive-iframe"
      style={{ border: "none", width: "100%" }}
      scrolling="no"
      src="https://www.youtube.com/embed/7NK_JOkuSVY"
      title="Lost - Linkin Park"
    />
  );
};

export default YouTubeEmbed;
