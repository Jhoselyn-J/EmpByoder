import axios from "axios";

export const getPersonasRequest = async() =>
await axios.get("http://localhost:4000/personas");

export const getAccesosRequest = async() =>
await axios.get("http://localhost:4000/accesos");

export const getpersonRequest = async(id) => 
await axios.get ("http://localhost:4000/persona/" + id) ;

export const deletepersonRequest = async(id) => 
await axios.delete ("http://localhost:4000/personas/" + id) ;

export const getAccesoUsuarioRequest = async() => 
await axios.get ("http://localhost:4000/accesUsers");
