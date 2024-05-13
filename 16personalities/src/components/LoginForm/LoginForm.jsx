import React from "react";

import EmailIcon from "./email.png"
import PasswordIcon from "./password.png"

const LoginForm=()=>{

return(
    <div className="container">
        <div className="header">
            <div className="text">Logowanie</div>
            <div className="underline"></div>
            </div>
<div className="inputs">
    <div className="input">
        <img src={EmailIcon} alt=""/>
        <input type="E-mail" placeholder="Podaj e-mail"/>
           </div>

           <div className="input">
        <img src={PasswordIcon} alt=""/>
        <input type="Hasło" placeholder="Podaj hasło"/>
           </div>
      </div>
      <div className="submit-container">
        <div className="submit">Zarejestruj</div>
        <div className="submit">Zaloguj</div>
      </div>
    </div>

)

}

export default LoginForm