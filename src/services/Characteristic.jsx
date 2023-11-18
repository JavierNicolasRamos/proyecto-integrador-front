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

const handleErrors = (e) => {
  throw new Error(errorMessages[e.status] || e.message);
};

export const fetchCharacteristic = async () => {
  try {
    const { data } = await axios.get(URL.list);
    return data;
  } catch (e) {
    handleErrors(e);
  }
};

export const postCharacteristic = async (formData) => {

  try {
    const { data, status } = await axios.post(URL.createCharacteristic, formData);
    return { data, status };
  } catch (e) {
    const data = e.response.data;
    const status = "";
    console.log("Error en la solicitud POST:", e.response.data);
    return { data, status };
  }
};