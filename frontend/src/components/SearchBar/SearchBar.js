import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="searchBarContainer">
      <input type="text" placeholder="Search..." className="searchInput" />
      <FontAwesomeIcon icon={faSearch} className="searchIcon" />
    </div>
  );
}

export default SearchBar;
