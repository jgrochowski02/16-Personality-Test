import React from "react";
import Button from "../Button/Button"; 

const UpperMenu = () => {
  const handleClick = () => {
    alert("Kliknięto przycisk!");
  };

  return (
    <div style={{textAlign: "center"}}>
      <Button onClick={handleClick} color="#D9D9D9" >Typy osobowości</Button>
      <Button onClick={handleClick} color="#D9D9D9" >Test osobowości</Button>
      <Button onClick={handleClick} color="#D9D9D9" >Logowanie</Button>
    </div>
  );
};

export default UpperMenu;
