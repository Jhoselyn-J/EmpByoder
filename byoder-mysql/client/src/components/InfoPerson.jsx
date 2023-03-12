function InfoPerson({person}){
    return (
        <div>
          <h2>{person.nombre}</h2>
          <p>{person.ap_paterno}</p>
          <p>{person.ci}</p>
          <span>{person.fecha_nac}</span>
          <h4>Tipo:{person.id_acceso == 1 ? "User" : "Admin"}</h4> 
          <button>Borrar</button>
          <button>Editar</button>
        </div>
      );
      
}
export default InfoPerson;