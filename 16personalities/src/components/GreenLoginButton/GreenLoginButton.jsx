import React from "react";
import Button from "../Button/Button"; 

const GreenLoginButton = () => {

  return (
    <div style={{textAlign: "center"}}>
      <Button to="/login" color="#49C279" borderRadius="10px" >Zaloguj się, aby wykonać test</Button>
     </div>
  );
};

export default GreenLoginButton;
