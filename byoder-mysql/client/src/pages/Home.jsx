import { useEffect, useState } from "react";
import InfoPerson from "../components/InfoPerson";
import { usePersons } from "../Context/PersonProvider";


function Home() {
    const {personas, loadPersons} = usePersons();
    useEffect(() => {
        loadPersons();
    }, []);
    function renderMain() {
        if (personas.length ===0) return <h1> No hay informacion de personas</h1>
        return personas.map((humano) => <InfoPerson humano={humano} key={humano.id} />)
    }

    return (
        <div  className="">
            <h1 className=" font-bold text-center p-5">REGISTRO DE INFORMACION PERSONAL DE USUARIOS:</h1>
            <div className="grid grid-cols-4 gap-3  ">{renderMain()}</div>
        </div>
    );
}
export default Home;