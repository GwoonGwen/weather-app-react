import React from "react";
import "./Search.css";

export default function Search(props) {
  return (
    <div className="Search">
      <form className="SearchForm" id="search-form">
        <div>
          <input
            type="search"
            className="SearchBar"
            id="search-bar"
            placeholder="Find a city.."
            autofocus="on"
            autocomplete="off"
          />
          <button
            type="submit"
            className="btn btn-transparant SearchButton p-0"
            id="find-button"
          >
            👁
          </button>
        </div>
      </form>
    </div>
  );
}