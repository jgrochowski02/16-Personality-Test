// src/pages/Account.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import personalities from "../personalities.json";
import PersonalitiesHeader from "../components/PersonalitiesHeader/PersonalitiesHeader";
import UpperMenu from "../components/UpperMenu/UpperMenu";

const Account = () => {
  const location = useLocation();
  const { sectionPoints } = location.state || {};
  const [personalityType, setPersonalityType] = useState(null);
  const [personalityDescription, setPersonalityDescription] = useState("");
  const [personalityName, setPersonalityName] = useState("");

  useEffect(() => {
    if (sectionPoints) {
      const totalPoints = sectionPoints.reduce((acc, cur) => acc + cur, 0);
      const type = assignPersonalityType(totalPoints);
      setPersonalityType(type);

      const personality = personalities.find(personality => personality.type === type);
      setPersonalityDescription(personality?.description || "");
      setPersonalityName(personality?.name || "");
    }
  }, [sectionPoints]);

  const assignPersonalityType = (totalPoints) => {
    // Właściwa logika przypisywania typu osobowości na podstawie punktów
    return personalities[totalPoints % personalities.length]?.type || null;
  };

  const handleSaveToFile = () => {
    const resultData = {
      personalityType,
      personalityName,
      personalityDescription,
    };

    const blob = new Blob([JSON.stringify(resultData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "result.json";
    a.click();
    URL.revokeObjectURL(url);
  };


  const resultStyle = {
    container: {
      padding: "20px",
      backgroundColor: "#f0f0f0",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      maxWidth: "600px",
      margin: "20px auto",
      textAlign: "center",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#333",
    },
    name: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#555",
    },
    description: {
      fontSize: "16px",
      color: "#666",
    },
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#4298B4" }}>
      <PersonalitiesHeader />
      <UpperMenu />
      {personalityType && (
        <div style={resultStyle.container}>
          <h2 style={resultStyle.title}>Typ osobowości: {personalityType}</h2>
          <p style={resultStyle.name}>Nazwa osobowości: {personalityName}</p>
          <p style={resultStyle.description}>Opis osobowości: {personalityDescription}</p>
          <button onClick={handleSaveToFile} style={{ fontSize: "16px", padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", marginTop: "20px" }}>
            Zapisz wynik do pliku
          </button>
        </div>
      )}
    </div>
  );
};

export default Account;
