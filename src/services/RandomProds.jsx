import axios from "axios";

export const fetchRandomProds = async () => {
    const errorMessages = {
        500: "Error del servidor",
        400: "Error del cliente",
        401: "No autorizado",
        403: "Acceso prohibido",
        404: "No se encontraron productos"
    };
  
    let res;
    try {
        res = await axios.get(`http://localhost:8001/instrumentos`);
    } catch (e) {
        if (errorMessages[e.status]) {
            throw new Error(errorMessages[e.status]);
        }
    }
    return res.data;
    };