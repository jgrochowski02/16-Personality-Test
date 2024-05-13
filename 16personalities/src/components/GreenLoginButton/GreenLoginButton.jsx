import React from "react";
import Button from "../Button/Button"; 

const GreenLoginButton = () => {
  const handleClick = () => {
    alert("Kliknięto przycisk!");
  };

  return (
    <div style={{textAlign: "center"}}>
          <div style={{ textAlign: "center", marginBottom: "10px", color: "white", fontSize: "48px", fontWeight:"bold"}}>"To takie niesamowite w końcu być zrozumianym."</div>
          <div style={{ textAlign: "center", marginBottom: "40px", color: "white", fontSize: "28px", }}>Tylko kilka minut dzieli Cię od uzyskania opisu tego, kim jesteś i dlaczego robisz takie rzeczy właśnie tak, jak robisz </div>
     
      <Button onClick={handleClick} color="#49C279" borderRadius="10px" >Zaloguj się, aby wykonać test</Button>
     </div>
  );
};

export default GreenLoginButton;
