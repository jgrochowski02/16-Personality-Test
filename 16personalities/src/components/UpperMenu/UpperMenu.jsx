import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import Button from "../Button/Button"; 

const UpperMenu = () => {
  const [user] = useAuthState(auth);

  return (
    <div style={{ textAlign: "center", backgroundColor: "#D9D9D9", borderRadius: "10px" }}>
      <Button to="/types" color="#D9D9D9" borderRadius="10px 0 0 10px">Typy osobowości</Button>
      <Button to="/test" color="#D9D9D9">Test osobowości</Button>
      {user ? ( 
        <Button to="/account" color="#D9D9D9" borderRadius="0 10px 10px 0">Konto</Button>
      ) : (
        <Button to="/login" color="#D9D9D9" borderRadius="0 10px 10px 0">Logowanie</Button>
      )}
    </div>
  );
};

export default UpperMenu;
