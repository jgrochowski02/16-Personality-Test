import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to, onClick, children, color, borderRadius}) => {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
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
    </Link>
  );
};

export default Button;
