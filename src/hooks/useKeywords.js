import { useEffect } from "react";

export const useKeywords = (keywords) => {
  useEffect(() => {
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywords);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "keywords";
      newMeta.content = keywords;
      document.head.appendChild(newMeta);
    }
  }, [keywords]);

  return null;
};

export default useKeywords;
