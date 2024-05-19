
import React from "react";

const PersonalityQuestion = ({ question, options, onOptionChange }) => {
  return (
    <div style={{ margin: "20px 0" }}>
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>{question}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {options.map((option, index) => (
          <label key={index} style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              value={option}
              onChange={(e) => onOptionChange(index, e.target.checked)}
              style={{ marginRight: "10px" }}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default PersonalityQuestion;
