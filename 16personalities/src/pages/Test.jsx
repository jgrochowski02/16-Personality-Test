import PersonalitiesHeader from "../components/PersonalitiesHeader/PersonalitiesHeader"
import UpperMenu from "../components/UpperMenu/UpperMenu"
import InfoTest from "../components/InfoTest/InfoTest"
import PersonalityForm from "../components/PersonalityForm/PersonalityForm"

const Test = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "white"}}>
            <PersonalitiesHeader />
            <UpperMenu />
            <InfoTest/>
            <PersonalityForm />
           

        </div>
    )
}

export default Test
