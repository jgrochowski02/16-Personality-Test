import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase"; // Popraw ścieżkę importu
import PersonalitiesHeader from "../components/PersonalitiesHeader/PersonalitiesHeader";
import UpperMenu from "../components/UpperMenu/UpperMenu";
import GreenLoginButton from "../components/GreenLoginButton/GreenLoginButton";
import GreenHelpButton from "../components/GreenHelpButton/GreenHelpButton";
import MainImage from "../MainImage.png";
import WelcomeWritings from "../components/WelcomeWritings/WelcomeWritings";

const MainPage = () => {
  const [user] = useAuthState(auth);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#4298B4"}}>
      <PersonalitiesHeader />
      <UpperMenu />
      <WelcomeWritings />
      <br />
      <br />

      {!user && <GreenLoginButton />} {/* Wyświetl GreenLoginButton tylko gdy użytkownik jest niezalogowany */}
      <br/>
      <GreenHelpButton />
      <div style={{ marginTop: "auto" }}>
        <img src={MainImage} alt="Main im" style={{ width: "100%" }}/>
      </div>
    </div>
  );
};

export default MainPage;
