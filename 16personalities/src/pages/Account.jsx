// src/pages/Account.jsx
import React from "react";
import PersonalitiesHeader from "../components/PersonalitiesHeader/PersonalitiesHeader";
import UpperMenu from "../components/UpperMenu/UpperMenu";
import PersonalityDetail from "../components/PersonalityDetail/PersonalityDetail";

const Account = () => {
  const personalityName = "Architekt";
  const personalityDescription = `
    Architekci są zazwyczaj kreatywnymi myślicielami, którzy uwielbiają strategizować i wymyślać nowe podejścia do problemów.
    Są logiczni, analityczni i mają zdolność widzenia rzeczy z różnych perspektyw.
  `;

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#4298B4" }}>
      <PersonalitiesHeader />
      <UpperMenu />
      <PersonalityDetail name={personalityName} description={personalityDescription} />
    </div>
  );
};

export default Account;
