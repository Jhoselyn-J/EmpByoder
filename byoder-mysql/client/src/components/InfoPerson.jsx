/* import { useNavigate } from "react-router-dom"; */
import { usePersons } from "../Context/PersonProvider";

function InfoPerson({humano}){
  const {deletePersona} = usePersons();
/*   const navigate = useNavigate() */
    return (
        
          <div className="bg-pink-400 text-white rounded-md p-5 font-mono  ">
            <header className="text-center">
              <h2 className=" font-bold">INFORMACION PERSONAL:</h2>
            </header>
          <h2 className="flex justify-between">Nombre: {humano.nombre}</h2>
          <p>Apellido: {humano.ap_paterno}</p>
          <p>CI: {humano.ci}</p>
         {/*  <h4>Tipo:{humano.id_acceso == 1 ? "User" : "Admin"}</h4> */}
          <h1>{humano.usuario}</h1> 
          <div className="flex gap-x-5  justify-end ">
          <button onClick={()=> deletePersona(humano.id)}
          className="bg-amber-500 px-5  py-1 text-white  rounded-lg shadow-sm transition duration-700 ease-in-out transform hover:scale-105">Eliminar</button>
          <button className="bg-amber-700 px-5 py-1 text-white  rounded-lg shadow-sm transition duration-700 ease-in-out transform hover:scale-105">Editar</button>
          </div>
          
          
          
        </div>
        );
      
}
export default InfoPerson;