import axios from "axios";

export const getPersonasRequest = async() =>
await axios.get("http://localhost:4000/personas");

export const getAccesosRequest = async() =>
await axios.get("http://localhost:4000/accesos");