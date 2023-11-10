import axios from "axios";

export const fetchCharacteristic = async () => {
  const errorMessages = {
    500: "Error del servidor",
    400: "Error del cliente",
    401: "No autorizado",
    403: "Acceso prohibido",
    404: "No se encontraron categorías",
  };

  let res;

  try {
    const { data } = await axios.get(`http://localhost:8001/characteristic/list`);
    res = data;
  } catch (e) {
    if (errorMessages[e.status]) {
      throw new Error(errorMessages[e.status]);
    }
  }
  return res;
};

export const postCharacteristic = async (name, icon) => {
  const errorMessages = {
    500: "Error del servidor",
    400: "Error del cliente",
    401: "No autorizado",
    403: "Acceso prohibido",
    404: "No se encontraron productos",
  };

  const formData = {
    name: name,
    icon: icon,
  }

  let res;

  try {
    const { data } = await axios.post(
      `http://localhost:8001/characteristic`,
      formData,

    );
    res = data;
  } catch (e) {
    if (errorMessages[e.status]) {
      throw new Error(errorMessages[e.status]);
    }
  }

  return res;
};
