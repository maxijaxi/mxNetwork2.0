import React from "react";

import useTitle from "../../hooks/useTitle";
import useDesc from "../../hooks/useDesc";
import useKeywords from "../../hooks/useKeywords";

function Data() {
  useTitle("Data Subject Form");
  useDesc(
    "Use our Data Subject Access Request form to request access to the personal information we hold about you."
  );
  useKeywords(
    "data subject access request form, personal information, privacy, legal"
  );

  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <iframe
        style={{ width: "90%", height: "80vh" }}
        title="data form"
        src="https://app.termly.io/notify/048c858b-ee8c-4af3-9ac4-f66577e91738"
      />
    </div>
  );
}

export default Data;
