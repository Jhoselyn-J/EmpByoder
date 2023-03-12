import { useEffect, useState } from "react";
import { getPersonasRequest } from "../api/persons.api";
import InfoPerson from "../components/InfoPerson";

function Home(){
    const [personas, setPersons] = useState([]);
    useEffect(() => {
        async function loadPersons() {
        const response = await getPersonasRequest();
        setPersons(response.data);
        }
        loadPersons();
    }, []);

    return (
        <div>
            <h1>INFORMACION: </h1>
            {personas.map((person) => (
            <InfoPerson person={person} key={person.id} />
            ))}
        </div>
    );
}
export default Home;