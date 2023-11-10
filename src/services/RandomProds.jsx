import axios from "axios";

const errorMessages = {
    500: "Error del servidor",
    400: "Error del cliente",
    401: "No autorizado",
    403: "Acceso prohibido",
    404: "No se encontraron instrumentos",
};

const handleErrors = (e) => {
    throw new Error(errorMessages[e.status] || e.message);
};

export const fetchRandomProds = async () => {
    try {
        const { data } = await axios.get(`http://localhost:8001/instruments`);
        return data;
    } catch (e) {
        handleErrors(e);
    }
};