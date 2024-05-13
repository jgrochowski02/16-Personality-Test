import React from "react";

import architect from "./architect.png";
import commander from "./commander.png";
import debater from "./debater.png";
import logician from "./logician.png";

const Analysts = () => {
  return (
    <div style={{ backgroundColor: "#C8A2BE", textAlign: "center" }}>
      <h1 style={{ color: "white", fontSize: "70px" }}>ANALITYCY</h1>
    
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={architect} alt="Opis obrazka" style={{ maxWidth: "100%", marginRight: "10px" }} />
        
        <div>
        <h1 style={{ color: "white", textAlign: "center" }}>Architekt</h1>
      <p style={{ color: "white", textAlign: "center" }}>Obdarzeni wyobraźnia, strategiczni myśliciele z planem na wszystko.</p>
      </div>

        <img src={commander} alt="Opis obrazka" style={{ maxWidth: "100%", marginRight: "10px" }} />
       
        <div>
        <h1 style={{ color: "white", textAlign: "center" }}>Dowódca</h1>
      <p style={{ color: "white", textAlign: "center" }}>Odważni, pomysłowi i obdarzeni silną wolą liderzy, którzy zawsze znajdują rozwiązdanie - lub je tworzą.</p>
      </div>

        <img src={debater} alt="Opis obrazka" style={{ maxWidth: "100%", marginRight: "10px" }} />
       
        <div>
        <h1 style={{ color: "white", textAlign: "center" }}>Dyskutant</h1>
      <p style={{ color: "white", textAlign: "center" }}>Inteligentni i ciekawi myśliciele, którzy nie są w stanie oprzeć się intelektualnemu wyzwaniu.</p>
      </div>
      
        <img src={logician} alt="Opis obrazka" style={{ maxWidth: "100%" }} />
       
        <div>
        <h1 style={{ color: "white", textAlign: "center" }}>Logik</h1>
      <p style={{ color: "white", textAlign: "center" }}>Pomysłowi wynalazcy o niezaspokojonym pragnieniu zdobywania wiedzy.</p>
      </div>

      </div>
    </div>
  );
};

export default Analysts;
