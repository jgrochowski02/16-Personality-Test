import React from "react";

import advocate from "./advocate.png"
import campaigner from "./campaigner.png"
import mediator from "./mediator.png"
import protagonist from "./protagonist.png"




const Diplomats = () => {
  return (
    <div style={{ backgroundColor: "#AAC8A2", textAlign: "center" }}>
      <h1 style={{ color: "white", fontSize: "70px" }}>DYPLOMACI</h1>
    
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={advocate} alt="Opis obrazka" style={{ maxWidth: "100%", marginRight: "10px" }} />
        
        <div>
        <h1 style={{ color: "white", textAlign: "center" }}>Rzecznik</h1>
      <p style={{ color: "white", textAlign: "center" }}>Spokojni i tajemniczy, a jednocześnie bardzo inspirujący i niestrudzeni idealiści.</p>
      </div>

        <img src={campaigner} alt="Opis obrazka" style={{ maxWidth: "100%", marginRight: "10px" }} />
       
        <div>
        <h1 style={{ color: "white", textAlign: "center" }}>Działacz</h1>
      <p style={{ color: "white", textAlign: "center" }}>Entuzjastyczne, kreatywne i towarzyskie wolne duchy, które zawsze potrafią znaleźć powód, żeby się uśmiechnąć.</p>
      </div>

        <img src={mediator} alt="Opis obrazka" style={{ maxWidth: "100%", marginRight: "10px" }} />
       
        <div>
        <h1 style={{ color: "white", textAlign: "center" }}>Pośrednik</h1>
      <p style={{ color: "white", textAlign: "center" }}>Uprzejmi i altruistyczni ludzie o poetyckiej duszy, zawsze chętni pomóc w dobrym celu.</p>
      </div>
      
        <img src={protagonist} alt="Opis obrazka" style={{ maxWidth: "100%" }} />
       
        <div>
        <h1 style={{ color: "white", textAlign: "center" }}>Protagonista</h1>
      <p style={{ color: "white", textAlign: "center" }}>Charyzmatyczni i inspirujący liderzy, którzy są w stanie oczarować swoich słuchaczy.</p>
      </div>

      </div>
    </div>
  );
};

export default Diplomats;
