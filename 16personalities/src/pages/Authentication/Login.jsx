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
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src={LeftLogin} alt="" style={{ width: "20%", marginLeft: "50px"}} />
                <LoginForm/>
                <img src={RightLogin} alt="" style={{  width: "20%", marginLeft: "50px"}} />
            </div>
        </div>
    )
}

export default Login
