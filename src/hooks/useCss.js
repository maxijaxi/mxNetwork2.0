import { useEffect } from "react";

export const useCss = (url) => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `https://maxijaxi.net/styles2.0/${url}`;
    document.body.appendChild(link);

    return () => {
      document.body.removeChild(link);
    };
  }, [url]);
};

export default useCss;
