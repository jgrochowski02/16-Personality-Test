import PersonalitiesHeader from "../../components/PersonalitiesHeader/PersonalitiesHeader"
import RegisterForm from "../../components/RegisterFom/RegisterForm"
import UpperMenu from "../../components/UpperMenu/UpperMenu"

import LeftRegister from "./LeftRegister.png"
import RightRegister from "./RightRegister.png"

const Login = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#D9D9D9"}}>
            <PersonalitiesHeader />
            <UpperMenu/>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src={LeftRegister} alt="" style={{ width: "20%", marginLeft: "50px"}} />
                <RegisterForm/>
                <img src={RightRegister} alt="" style={{  width: "20%", marginLeft: "50px"}} />
            </div>
        </div>
    )
}

export default Login
