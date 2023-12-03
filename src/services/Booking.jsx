import axios from "axios";

const errorMessages = {
  500: "Error del servidor",
  400: "Error del cliente",
  401: "No autorizado",
  403: "Acceso prohibido",
  404: "No se encontraron productos",
};

const backUrl = import.meta.env.VITE_APIBACKEND

const URL = {
  list: `${backUrl}/booking`,
};

const handlerErrors = (e) => {
  throw new Error(errorMessages[e.status] || e.message);
};

export const getBookings = async (jwt) => {

  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`
    }
  };

  try {
    const { data, status } = await axios.get(`${URL.list}`, config);
    return { data, status };
  } catch (e) {
    const data = e.response.data;
    const status = "";
    return { data, status };
  }
};