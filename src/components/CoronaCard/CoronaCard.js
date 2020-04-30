import React from "react";
import "./CoronaCard.css";

const CoronaCard = (props) => {
  return (
    <div className="CoronaCard">
      <h1>{props.Country}</h1>
      <div className="CoronaInformation">
        <p>Deaths: {props.Deaths}</p>
        <p>Confirmed cases: {props.ConfirmedCases}</p>
        <p>Recovered from Covid-19: {props.RecoveredCases}</p>
      </div>
    </div>
  );
};

export default CoronaCard;
