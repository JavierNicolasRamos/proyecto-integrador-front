import axios from "axios";

export const fetchRandomProds = async () => {
    const errorMessages = {
        500: "Error del servidor",
        400: "Error del cliente",
        401: "No autorizado",
        403: "Acceso prohibido",
        404: "No se encontraron productos"
    };
  
    let res

    try {
        const {data} = await axios.get(`http://localhost:8001/instruments`);
        res = data
    } catch (e) {
        if (errorMessages[e.status]) {
            throw new Error(errorMessages[e.status]);
        }
    }
    return res;
};