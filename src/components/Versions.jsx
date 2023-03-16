import React, { useState } from "react";

function Version({ versionData }) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <React.Fragment>
      <tr key={versionData.id} onClick={handleClick}>
        <td>
          <h4>{versionData.version}</h4>
        </td>
        <td>
          <h4>{versionData.timestamp}</h4>
        </td>
        <td>
          <h4>{versionData.tags}</h4>
        </td>
        <td>
          <i className="material-icons">
            {expanded ? "expand_less" : "expand_more"}
          </i>
        </td>
      </tr>
      {expanded && (
        <tr key={versionData.id} className="version-details">
          <td>
            <h4>Changes:</h4>
            <ul>
              {versionData.changes.split(", ").map((change, index) => (
                <li key={index}>{change}</li>
              ))}
            </ul>
          </td>
          <td>
            <h4>Description:</h4>
            <p>{versionData.description}</p>
          </td>
          <td className="side-details" colSpan={2}>
            <div>
              <h4>Contributors:</h4>
              <ul>
                {versionData.contributors.split(", ").map((change, index) => (
                  <li key={index}>{change}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Additional notes:</h4>
              <p>{versionData.notes}</p>
            </div>
          </td>
        </tr>
      )}
    </React.Fragment>
  );
}

export default Version;
