import PersonalitiesHeader from "../components/PersonalitiesHeader/PersonalitiesHeader"
import UpperMenu from "../components/UpperMenu/UpperMenu"
import Analysts from "../components/Types/Analysts/Analysts"
import Diplomats from "../components/Types/Diplomats/Diplomats"



const Types = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "white"}}>
            <PersonalitiesHeader />
            <UpperMenu />
            <Analysts/>
            <Diplomats/>
      

        </div>
    )
}

export default Types
