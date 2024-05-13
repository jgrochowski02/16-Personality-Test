import React from "react";

import adventurer from "./adventurer.png"
import entertainer from "./entertainer.png"
import entrepreneur from "./entrepreneur.png"
import virtuoso from "./virtuoso.png"


const Explorers = () => {
  return (
    <div style={{ backgroundColor: "#C7C8A2", textAlign: "center" }}>
      <h1 style={{ color: "white", fontSize: "70px" }}>ODKRYWCY</h1>
    
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={adventurer} alt="adventurer" style={{ maxWidth: "100%", marginRight: "10px" }} />
        
        <div>
        <h1 style={{ color: "white", textAlign: "center" }}>Poszukiwacz przygód</h1>
      <p style={{ color: "white", textAlign: "center" }}>Elastyczni i uroczy artyści, zawsze gotowi, aby poznawać i doświadczać czegoś nowego.</p>
      </div>

        <img src={entrepreneur} alt="Opis obrazka" style={{ maxWidth: "100%", marginRight: "10px" }} />
       
        <div>
        <h1 style={{ color: "white", textAlign: "center" }}>Przedsiębiorca</h1>
      <p style={{ color: "white", textAlign: "center" }}>Inteligentne, energiczne i spostrzegawcze osoby, które naprawdę lubią żyć na krawędzi.</p>
      </div>

        <img src={entertainer} alt="Opis obrazka" style={{ maxWidth: "100%", marginRight: "10px" }} />
       
        <div>
        <h1 style={{ color: "white", textAlign: "center" }}>Animator</h1>
      <p style={{ color: "white", textAlign: "center" }}>Osoby spontaniczne, energiczne i Entuzjastyczne - przy nich życie nigdy nie jest nudne.</p>
      </div>
      
        <img src={virtuoso} alt="Opis obrazka" style={{ maxWidth: "100%" }} />
       
        <div>
        <h1 style={{ color: "white", textAlign: "center" }}>Wirtuoz</h1>
      <p style={{ color: "white", textAlign: "center" }}>Odważni i praktyczni eksperymentatorzy, mistrzowie wszelkiego rodzaju narzędzi.</p>
      </div>

      </div>
    </div>
  );
};

export default Explorers;
