const Student = (props) => (
    <>
        <li>
            <br></br>
            <p>Imie: {props.name}</p>
            <p>Opis: {props.description}</p>
            <a href={"mailto:"+props.email}>wyslij wiadomosc</a>
        </li>
        <br></br>
    </>
)

export default Student;