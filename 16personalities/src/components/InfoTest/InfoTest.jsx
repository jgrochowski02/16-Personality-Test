import React from "react";


const InfoTest = () => {
  return (
    <div style={{ backgroundColor: "#4298B4", textAlign: "center" }}>
      
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        
        <div>
        <h1 style={{ color: "white", textAlign: "center" }}>Rzetelność</h1>
      <p style={{ color: "white", textAlign: "center" }}>1. Odpowiadaj rzetelnie na pytania.</p>
      </div>

      
        <div>
        <h1 style={{ color: "white", textAlign: "center" }}>Zrozumienie</h1>
      <p style={{ color: "white", textAlign: "center" }}>2. Jeśli pytanie jest niezrozumiałe - zaznacz neutralną odpowiedź.</p>
      </div>
 
        <div>
        <h1 style={{ color: "white", textAlign: "center" }}>Wiedza</h1>
      <p style={{ color: "white", textAlign: "center" }}>3. Dowiedz się jak twój typ osobowości wpływa na ciebie.</p>
      </div>
       

      </div>
    </div>
  );
};

export default InfoTest;
