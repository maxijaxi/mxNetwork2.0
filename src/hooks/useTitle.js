import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `mxNetwork | ${title}`;
    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) {
      ogTitleTag.setAttribute("content", `mxNetwork | ${title}`);
    } else {
      const newOgTitleTag = document.createElement("meta");
      newOgTitleTag.setAttribute("property", "og:title");
      newOgTitleTag.setAttribute("content", `mxNetwork | ${title}`);
      document.head.appendChild(newOgTitleTag);
    }
  }, [title]);

  return null;
};

export default useTitle;
