import PersonalitiesHeader from "../../components/PersonalitiesHeader/PersonalitiesHeader"
import LoginForm from "../../components/LoginForm/LoginForm"

import LeftLogin from "./LeftLogin.png"
import RightLogin from "./RightLogin.png"

const Login = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#D9D9D9"}}>
            <PersonalitiesHeader />
            <div>
            <img src={LeftLogin} alt="Opis obrazka" style={{ maxWidth: "100%", marginRight: "10px" }} />
            <LoginForm/>
            <img src={RightLogin} alt="Opis obrazka" style={{ maxWidth: "100%", marginRight: "10px" }} />
            </div>
           
        </div>
    )
}

export default Login
