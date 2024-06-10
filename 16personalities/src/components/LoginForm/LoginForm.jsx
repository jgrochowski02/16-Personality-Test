import React from "react";
import { useNavigate } from "react-router-dom";

import EmailIcon from "./email.png";
import PasswordIcon from "./password.png";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register"); // Użyj odpowiedniej ścieżki dla strony rejestracji
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Logowanie</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={EmailIcon} alt="" />
          <input type="email" placeholder="Podaj e-mail" />
        </div>

        <div className="input">
          <img src={PasswordIcon} alt="" />
          <input type="password" placeholder="Podaj hasło" />
        </div>
      </div>
      <div className="submit-container">
        <div className="submit" onClick={handleRegisterClick}>
          Zarejestruj
        </div>
        <div className="submit">Zaloguj</div>
      </div>
    </div>
  );
};

export default LoginForm;
