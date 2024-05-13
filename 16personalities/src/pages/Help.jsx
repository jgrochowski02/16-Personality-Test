import PersonalitiesHeader from "../components/PersonalitiesHeader/PersonalitiesHeader"
import UpperMenu from "../components/UpperMenu/UpperMenu"


const Help = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "white"}}>
            <PersonalitiesHeader />
            <UpperMenu />
            <div style={{marginTop: "10px", fontWeight: "bold", fontSize: "28px", }}>Jak zrobić test?</div>
            <div style={{fontSize: "20px" }}>Aby wykonać test osobowości i poznać swoją osobowość, należy zalogować się do swojego konta lub założyć nowe i przejść do zakładki "Test osobowości".</div>
      <br/>
      <div style={{marginTop: "10px", fontWeight: "bold", fontSize: "28px", }}>Gdzie mogę zobaczyć opisy osobowości?</div>
      <div style={{fontSize: "20px" }}>Opisy osobowości można zobaczyć za pomocą wybrania zakładki "Typy osobowości". Dotyczy to użytkowników zarówno zalogowanych, jak i niezalogowanych.</div>
      <br/>
      <div style={{marginTop: "10px", fontWeight: "bold", fontSize: "28px", }}>Gdzie mogę się zarejestrować?</div>
      <div style={{fontSize: "20px" }}>W celu rejestracji należy wybrać zakładkę "Logowanie", a następnie przejść do opcji "Zarejestruj".</div>
      <br/>
      <div style={{marginTop: "10px", fontWeight: "bold", fontSize: "28px", }}>Gdzie mogę zobaczyć opisy osobowości?</div>
      <div style={{fontSize: "20px" }}>Opisy osobowości można zobaczyć za pomocą wybrania zakładki "Typy osobowości". Dotyczy to użytkowników zarówno zalogowanych, jak i niezalogowanych.</div>
      <br/>
      <div style={{marginTop: "10px", fontWeight: "bold", fontSize: "28px", }}>Czy da się usunąć konto?</div>
      <div style={{fontSize: "20px" }}>Niestety, ale ta platforma nie przewiduje możliwości usunięcia konta.</div>
      <br/>
      <div style={{marginTop: "10px", fontWeight: "bold", fontSize: "28px", }}>Gdzie mogę wysłać informację o znalezionych błędach?</div>
      <div style={{fontSize: "20px" }}>Wszystkie informacje, zauważone błędy, opinie lub zastrzeżenia proszę kierować na e-maila: jgrochowski02@wp.pl.</div>
      <br/>
      
      
        </div>
    )
}

export default Help
