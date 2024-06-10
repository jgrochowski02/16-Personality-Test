import React from "react";

const Result = ({ personalityType, personalityDescription, personalityName }) => {
  return (
    <div>
      <h2>Typ osobowości:</h2>
      <p>{personalityType}</p>
      <h2>Nazwa:</h2>
      <p>{personalityName}</p>
      <h2>Opis osobowości:</h2>
      <p>{personalityDescription}</p>
    </div>
  );
};

export default Result;
