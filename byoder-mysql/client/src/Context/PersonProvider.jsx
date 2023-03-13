import { useContext, useState } from "react";
import { getPersonasRequest, getpersonRequest, deletepersonRequest,getAccesoUsuarioRequest } from "../api/persons.api";
import {PersonContext} from "./PersonContext"

export const usePersons = () => {
    const context = useContext(PersonContext);
        if (!context) {
            throw new Error(
            "usePerson puede estar siendo usado sin PersonContextProvider"
            );
        }
    return context;
    }  
    export const PersonContextProvider = ({children}) => {
        const[personas, setPersons] = useState([]);

        async function loadPersons() {
            const response = await getPersonasRequest();
            setPersons(response.data);
        }

        const getPerson = async (id) => {
            try {
                const response = await getpersonRequest(id);
                return response.data;
            } catch (error) {
                console.error(error);
            }
        };
        const deletePersona = async (id) => {
            try {
                const response = await deletepersonRequest(id);
                setPersons(personas.filter((users) => users.id != id));
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        }

        const usuarios = async () => {
            try {
                const response = await getAccesoUsuarioRequest();
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        }
        return (
            <PersonContext.Provider value={{ personas, loadPersons, getPerson, deletePersona, usuarios }}>
            {children}
            </PersonContext.Provider>
            );
};