import './App.css';
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../src/firebase"; // Zaimportuj swoją instancję firebase/auth
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import PATH from './paths';
import MainPage from './pages/MainPage';
import Help from './pages/Help';
import Account from './pages/Account';
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';
import Test from './pages/Test';
import Types from './pages/Types';

function App() {
  const navigate = useNavigate
 

  useEffect(() => {
    // Wyloguj użytkownika przy ładowaniu aplikacji
    auth.signOut().then(() => {
      // Przekieruj użytkownika na stronę główną lub inną stronę
      navigate("/");
    }).catch((error) => {
      console.error("Błąd podczas wylogowywania:", error);
    });
  }, [navigate]); 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={PATH.MAINPAGE} replace />} />
        <Route path={PATH.MAINPAGE} element={<MainPage />} />
        <Route path={PATH.HELP} element={<Help />} />
        <Route path={PATH.ACCOUNT} element={<Account />} />
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.REGISTER} element={<Register />} />
        <Route path={PATH.TEST} element={<Test />} />
        <Route path={PATH.TYPES} element={<Types />} />
      </Routes>
    </Router>
  );
}

export default App;
