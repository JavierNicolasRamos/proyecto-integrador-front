import axios from "axios";

const errorMessages = {
  500: "Error del servidor",
  400: "Error del cliente",
  401: "No autorizado",
  403: "Acceso prohibido",
  404: "No se encontraron categorías",
};

const URL = {
  "list" : "http://localhost:8001/characteristic/list",
  "createCharacteristic" : "http://localhost:8001/characteristic",
}

const handlerErrors = (e) => {
  throw new Error(errorMessages[e.status] || e.message);
};

export const fetchCharacteristic = async () => {
  try {
    const { data } = await axios.get(URL.list);
    return data;
  } catch (e) {
    handlerErrors(e);
  }
};

export const postCharacteristic = async (formData, jwt) => {

  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`
    }
  };

  try {
    const { data, status } = await axios.post(URL.createCharacteristic, formData, config);
    return { data, status };
  } catch (e) {
    const data = e.response.data;
    const status = "";
    return { data, status };
  }
};