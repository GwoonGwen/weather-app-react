import React from "react";
import "./Search.css";

export default function Search(props) {
  return (
    <div className="Search">
      <form className="SearchForm" id="search-form">
        <div>
          <input
            type="search"
            className="SearchEngine"
            id="search-bar"
            placeholder="Look for a city.."
            autofocus="on"
            autocomplete="off"
          />
          <button
            type="submit"
            className="btn btn-transparant SearchButton p-1"
            id="find-button"
          >👁
          </button>
        </div>
      </form>
    </div>
  );
}