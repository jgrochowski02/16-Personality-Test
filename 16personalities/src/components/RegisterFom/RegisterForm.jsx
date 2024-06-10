import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"; 
import EmailIcon from "./email.png";
import PasswordIcon from "./password.png";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); 
  
  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccessMessage("Rejestracja zakończona sukcesem!");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogin = () => {
    navigate("/login"); 
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Rejestracja</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={EmailIcon} alt="" />
          <input
            type="email"
            placeholder="Podaj e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input">
          <img src={PasswordIcon} alt="" />
          <input
            type="password"
            placeholder="Podaj hasło"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      {error && <div className="error">{error}</div>}
      {successMessage && <div className="success">{successMessage}</div>} {/* Renderowanie komunikatu sukcesu */}
      <div className="submit-container">
        <div className="submit" onClick={handleRegister}>
          Zarejestruj
        </div>
        <div className="submit" onClick={handleLogin}>
          Zaloguj
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
