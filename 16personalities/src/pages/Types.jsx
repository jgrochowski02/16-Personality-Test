import PersonalitiesHeader from "../components/PersonalitiesHeader/PersonalitiesHeader"
import UpperMenu from "../components/UpperMenu/UpperMenu"
import Analysts from "../components/Types/Analysts/Analysts"
import Diplomats from "../components/Types/Diplomats/Diplomats"
import Sentinels from "../components/Types/Sentinels/Sentinels"
import Explorers from "../components/Types/Explorers/Explorers"

const Types = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "white"}}>
            <PersonalitiesHeader />
            <UpperMenu />
            <Analysts/>
            <Diplomats/>
            <Sentinels/>
            <Explorers/>

        </div>
    )
}

export default Types
