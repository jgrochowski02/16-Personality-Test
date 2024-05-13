import React from "react";

const Button = ({ onClick, children, color, borderRadius}) => {
  return (
    <button
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: color || "#D9D9D9", 
        color: "black",
        border: "none",
        cursor: "pointer",        
        borderRadius: borderRadius || "0px",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
