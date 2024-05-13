import React from "react";
import { Link } from "react-router-dom";

const PersonalitiesHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#205C70",
        color: "white",
      }}
    >
      <Link to="/mainpage" style={{ textDecoration: "none" }}>
        <button
          style={{
            fontFamily: 'Holtwood One SC',
            fontSize: "56px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "transparent",
            color: "white", 
          }}
        >
          16 OSOBOWOŚCI
        </button>
      </Link>
    </div>
  );
};

export default PersonalitiesHeader;
