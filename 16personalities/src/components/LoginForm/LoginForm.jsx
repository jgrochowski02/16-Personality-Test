import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import EmailIcon from "./email.png";
import PasswordIcon from "./password.png";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Dodaj stan do śledzenia stanu uwierzytelnienia

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true); // Ustaw stan uwierzytelnienia na true po pomyślnym zalogowaniu
      console.log("Użytkownik zalogowany pomyślnie.");
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleLogout = () => {
    // Tutaj dodaj kod do wylogowania użytkownika
    // Na przykład, wylogowanie może wyglądać tak:
     auth.signOut();
    setIsLoggedIn(false); // Ustaw stan uwierzytelnienia na false po wylogowaniu
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
      <div className="submit-container">
        <div className="submit" onClick={handleRegisterClick}>
          Zarejestruj
        </div>
        {isLoggedIn ? ( // Dodaj warunek sprawdzający, czy użytkownik jest zalogowany
          <div className="submit" onClick={handleLogout}>
            Wyloguj
          </div>
        ) : (
          <div className="submit" onClick={handleLogin}>
            Zaloguj
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
