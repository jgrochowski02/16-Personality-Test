import React from "react";

const SectionPoints = ({ sectionName, points }) => {
  return (
    <div>
      <h3>{sectionName}</h3>
      <p>Punkty: {points}</p>
    </div>
  );
};

export default SectionPoints;
