// src/components/PersonalityDetail/PersonalityDetail.jsx
import React from 'react';
import { saveAs } from 'file-saver';

const PersonalityDetail = ({ name, description }) => {
  const handleSaveToFile = () => {
    const blob = new Blob([description], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, `${name}.txt`);
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px", textAlign: "center", maxWidth: "600px", margin: "20px auto" }}>
      <h1 style={{ fontSize: "48px", color: "#333" }}>{name}</h1>
      <p style={{ fontSize: "18px", color: "#555" }}>{description}</p>
      <button
        onClick={handleSaveToFile}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "20px"
        }}
      >
        Zapisz do pliku
      </button>
    </div>
  );
};

export default PersonalityDetail;
