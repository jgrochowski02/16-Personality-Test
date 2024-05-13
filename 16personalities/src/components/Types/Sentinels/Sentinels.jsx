import React from "react";

import cosnul from "./consul.png"
import defender from "./defender.png"
import executive from "./executive.png"
import logistician from "./logistician.png"

const Sentinels = () => {
  return (
    <div style={{ backgroundColor: "#A2B8C8", textAlign: "center" }}>
      <h1 style={{ color: "white", fontSize: "70px" }}>STRAŻNICY</h1>
    
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={cosnul} alt="Opis obrazka" style={{ maxWidth: "100%", marginRight: "10px" }} />
        
        <div>
        <h1 style={{ color: "white", textAlign: "center" }}>Doradca</h1>
      <p style={{ color: "white", textAlign: "center" }}>Niesłychanie troskliwi, towarzyscy, popularni i zawsze chętni do pomocy ludzie.</p>
      </div>

        <img src={defender} alt="Opis obrazka" style={{ maxWidth: "100%", marginRight: "10px" }} />
       
        <div>
        <h1 style={{ color: "white", textAlign: "center" }}>Obrońca</h1>
      <p style={{ color: "white", textAlign: "center" }}>Bardzo oddani i czuli opiekunowie, zawsze gotowi bronić osób, które kochają.</p>
      </div>

        <img src={executive} alt="Opis obrazka" style={{ maxWidth: "100%", marginRight: "10px" }} />
       
        <div>
        <h1 style={{ color: "white", textAlign: "center" }}>Wykonawca</h1>
      <p style={{ color: "white", textAlign: "center" }}>Doskonali administratorzy, którzy lepiej niż ktokolwiek inny potrafią zarządzać różnymi sprawami lub ludźmi.</p>
      </div>
      
        <img src={logistician} alt="Opis obrazka" style={{ maxWidth: "100%" }} />
       
        <div>
        <h1 style={{ color: "white", textAlign: "center" }}>Logistyk</h1>
      <p style={{ color: "white", textAlign: "center" }}>Osoby praktyczne i skupione na faktach, których niezawodności nie da się podważyć.</p>
      </div>

      </div>
    </div>
  );
};

export default Sentinels;
