import React from "react";
import Button from "../Button/Button"; 

const GreenLoginButton = () => {

  return (
    <div style={{textAlign: "center"}}>
          <div style={{ textAlign: "center", color: "white", fontSize: "48px", fontWeight:"bold"}}>"To takie niesamowite w końcu być zrozumianym."</div>
          <div style={{ textAlign: "center", marginBottom: "5px", color: "white", fontSize: "25px", }}>Tylko kilka minut dzieli Cię od uzyskania opisu tego, kim jesteś i dlaczego robisz takie rzeczy właśnie tak, jak robisz </div>
     
      <Button to="/login" color="#49C279" borderRadius="10px" >Zaloguj się, aby wykonać test</Button>
     </div>
  );
};

export default GreenLoginButton;
