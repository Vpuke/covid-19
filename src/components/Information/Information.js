import React from "react";
import "./Information.css";

const Information = (props) => {
  return (
    <div className="information">
      <div className="informationText">
        <h1>Worldwide</h1>
        <h3>Total deaths: {props.TotalDeaths}</h3>
        <h3>Total confirmed cases: {props.TotalConfirmed}</h3>
      </div>
    </div>
  );
};

export default Information;
