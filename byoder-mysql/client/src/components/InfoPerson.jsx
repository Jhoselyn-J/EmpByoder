/* import { useNavigate } from "react-router-dom"; */
import { usePersons } from "../Context/PersonProvider";

function InfoPerson({person}){
  const {deletePersona} = usePersons();
/*   const navigate = useNavigate() */
    return (
        
          <div className="bg-pink-400 text-white rounded-md p-5 font-mono  ">
            <header className="text-center">
              <h2 className=" font-bold">INFORMACION PERSONAL:</h2>
            </header>
          <h2 className="flex justify-between">Nombre: {person.nombre}</h2>
          <p>Apellido: {person.ap_paterno}</p>
          <p>CI: {person.ci}</p>
          <span>Fecha N:{person.fecha_nac}</span>
          <h4>Tipo:{person.id_acceso == 1 ? "User" : "Admin"}</h4> 
          <div className="flex gap-x-5  justify-end ">
          <button onClick={()=> deletePersona(person.id)}
          className="bg-amber-500 px-5  py-1 text-white  rounded-lg shadow-sm transition duration-700 ease-in-out transform hover:scale-105">Eliminar</button>
          <button className="bg-amber-700 px-5 py-1 text-white  rounded-lg shadow-sm transition duration-700 ease-in-out transform hover:scale-105">Editar</button>
          </div>
          
          
          
        </div>
        );
      
}
export default InfoPerson;