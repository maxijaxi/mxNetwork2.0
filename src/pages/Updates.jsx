import React, { useState, useEffect } from "react";

import useTitle from "../hooks/useTitle";
import useDesc from "../hooks/useDesc";
import useKeywords from "../hooks/useKeywords";

import Version from "../components/Versions";

import "../scss/updates.scss";

function Updates() {
  useTitle("Updates");
  useDesc(
    "The Updates page is where you can find the latest news and progress updates on my projects. This page is regularly updated to keep you informed about new features, bug fixes, and other important developments."
  );
  useKeywords("Updates, Progress, News, Developments, Features, Bug Fixes");

  const [searchQuery, setSearchQuery] = useState("");
  const [versions, setVersions] = useState([]);
  const [error, setError] = useState(false);
  const [sortColumn, setSortColumn] = useState("timestamp");
  const [sortDirection, setSortDirection] = useState("asc");
  const [filteredVersions, setFilteredVersions] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    fetch("https://server.maxijaxi.net/db_versions.php")
      .then((response) => response.json())
      .then((data) => {
        setVersions(data);
        setFilteredVersions(data);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      });
  }, []);

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      const newFilter = searchQuery.trim().toLowerCase();
      if (newFilter.length > 0 && !filters.includes(newFilter)) {
        setFilters([...filters, newFilter]);
        setSearchQuery("");
      }
    }
  };

  useEffect(() => {
    const filteredData = versions.filter((version) => {
      const versionValue = version.version.toLowerCase();
      const tagsValue = version.tags.toLowerCase();
      const contributorsValue = version.contributors.toLowerCase();
      const timestampValue = version.timestamp.toLowerCase();
      return filters.every(
        (filter) =>
          versionValue.includes(filter) ||
          tagsValue.includes(filter) ||
          contributorsValue.includes(filter) ||
          timestampValue.includes(filter)
      );
    });
    setFilteredVersions(filteredData);
  }, [filters, versions]);

  const handleSort = (column) => {
    setSortColumn(column);
    setSortDirection((prevSortDirection) =>
      prevSortDirection === "asc" ? "desc" : "asc"
    );
  };

  const sortedVersions = [...filteredVersions].sort((a, b) => {
    const aValue = sortColumn === "version" ? a.version : a.timestamp;
    const bValue = sortColumn === "version" ? b.version : b.timestamp;
    const compareResult = aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    const direction = sortDirection === "desc" ? compareResult : -compareResult;
    return direction;
  });

  return (
    <div className="updates">
      <section>
        <div className="table-head">
          <h2>Recent updates</h2>
          <div className="search-filter">
            <div className="filters">
              {filters.map((filter, index) => (
                <span key={index} className="filter">
                  {filter}
                  <button
                    className="filter-remove"
                    onClick={() =>
                      setFilters(filters.filter((_, i) => i !== index))
                    }
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>
            <input
              type="text"
              placeholder="Filter your results"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              onKeyDown={handleSearch}
            />
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>
                <h3
                  className="pointer"
                  onClick={() => {
                    handleSort("version");
                  }}
                >
                  Version
                  {sortColumn === "version" && (
                    <i className="material-icons">
                      {sortDirection === "asc" ? "expand_more" : "expand_less"}
                    </i>
                  )}
                </h3>
              </th>
              <th>
                <h3
                  className="pointer"
                  onClick={() => {
                    handleSort("timestamp");
                  }}
                >
                  Release{" "}
                  {sortColumn === "timestamp" && (
                    <i className="material-icons">
                      {sortDirection === "asc" ? "expand_more" : "expand_less"}
                    </i>
                  )}
                </h3>
              </th>
              <th>
                <h3>Tags</h3>
              </th>
              <th></th>
            </tr>
          </thead>
          {error ? (
            <tbody>
              <tr>
                <td colSpan={4} className="versions-error">
                  <h3>
                    Oops, something went wrong while fetching the latest
                    updates. Please try again later.
                  </h3>
                  <p>
                    If the issue persists, please don't hesitate to contact our
                    support team for assistance. Thank you for your patience and
                    understanding.
                  </p>
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {sortedVersions
                .filter((version) => {
                  const searchValue = searchQuery.toLowerCase();
                  const versionValue = version.version.toLowerCase();
                  const tagsValue = version.tags.toLowerCase();
                  const contributorsValue = version.contributors.toLowerCase();
                  const timestampValue = version.timestamp.toLowerCase();

                  return (
                    versionValue.includes(searchValue) ||
                    tagsValue.includes(searchValue) ||
                    contributorsValue.includes(searchValue) ||
                    timestampValue.includes(searchValue)
                  );
                })
                .map((version) => (
                  <Version
                    key={version.id}
                    versionData={version}
                    searchQuery={searchQuery}
                  />
                ))}
            </tbody>
          )}
        </table>
      </section>
    </div>
  );
}

export default Updates;
