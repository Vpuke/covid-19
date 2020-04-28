import React from "react";
import "./CoronaSearch.css";

const CoronaSearch = (props) => {
  return (
    <div className="CoronaSearch">
      <input
        className="InputField"
        onChange={props.handleChange}
        placeholder="Search by Country"
      ></input>
      <button className="SearchCoronaButton">Search</button>
    </div>
  );
};

export default CoronaSearch;
