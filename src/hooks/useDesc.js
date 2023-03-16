import { useEffect } from "react";

export const useDesc = (desc) => {
  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", desc);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.setAttribute("name", "description");
      newMeta.setAttribute("content", desc);
      document.head.appendChild(newMeta);
    }

    const ogDescTag = document.querySelector('meta[property="og:description"]');
    if (ogDescTag) {
      ogDescTag.setAttribute("content", desc);
    } else {
      const newOgDescTag = document.createElement("meta");
      newOgDescTag.setAttribute("property", "og:description");
      newOgDescTag.setAttribute("content", desc);
      document.head.appendChild(newOgDescTag);
    }
  }, [desc]);

  return null;
};

export default useDesc;
