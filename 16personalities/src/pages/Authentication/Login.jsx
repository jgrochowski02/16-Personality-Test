import PersonalitiesHeader from "../../components/PersonalitiesHeader/PersonalitiesHeader"
import LoginForm from "../../components/LoginForm/LoginForm"
import UpperMenu from "../../components/UpperMenu/UpperMenu"

import LeftLogin from "./LeftLogin.png"
import RightLogin from "./RightLogin.png"

const Login = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#D9D9D9"}}>
            <PersonalitiesHeader />
            <UpperMenu/>
            <div>
            <img src={LeftLogin} alt="" style={{ maxWidth: "100%", marginRight: "10px" }} />
            <LoginForm/>
            <img src={RightLogin} alt="" style={{ maxWidth: "100%", marginRight: "10px" }} />
            </div>
           
        </div>
    )
}

export default Login
