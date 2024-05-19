import PersonalitiesHeader from "../components/PersonalitiesHeader/PersonalitiesHeader"
import UpperMenu from "../components/UpperMenu/UpperMenu"
import GreenLoginButton from "../components/GreenLoginButton/GreenLoginButton"
import GreenHelpButton from "../components/GreenHelpButton/GreenHelpButton"

import MainImage from "../MainImage.png"


const MainPage = () => {
   
  
  return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#4298B4"}}>
            <PersonalitiesHeader />
            <UpperMenu />
            <GreenLoginButton />
            <br/>
            <GreenHelpButton />
            <div style={{ marginTop: "auto" }}>
                <img src={MainImage} alt="Main im" style={{ width: "100%" }}/>
            </div>
        </div>
    )
}

export default MainPage
