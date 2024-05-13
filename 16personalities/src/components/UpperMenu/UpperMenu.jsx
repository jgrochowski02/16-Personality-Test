import React from "react";
import Button from "../Button/Button"; 

const UpperMenu = () => {
  return (
    <div style={{ textAlign: "center", backgroundColor: "#D9D9D9", borderRadius: "10px" }}>
      <Button to="/types" color="#D9D9D9" borderRadius="10px 0 0 10px">Typy osobowości</Button>
      <Button to="/test" color="#D9D9D9">Test osobowości</Button>
      <Button to="/login" color="#D9D9D9" borderRadius="0 10px 10px 0">Logowanie</Button>
    </div>
  );
};

export default UpperMenu;
