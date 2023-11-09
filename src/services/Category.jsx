import axios from "axios";

export const fetchCategory = async () => {
  const errorMessages = {
    500: "Error del servidor",
    400: "Error del cliente",
    401: "No autorizado",
    403: "Acceso prohibido",
    404: "No se encontraron categorías",
  };

  let res;

  try {
    const { data } = await axios.get(`http://localhost:8001/category/list`);
    res = data;
  } catch (e) {
    if (errorMessages[e.status]) {
      throw new Error(errorMessages[e.status]);
    }
  }
  return res;
};

export const postCategory = async (name, detail, image) => {
  const errorMessages = {
    500: "Error del servidor",
    400: "Error del cliente",
    401: "No autorizado",
    403: "Acceso prohibido",
    404: "No se encontraron productos",
  };

  // FALTA que agreguen atributo detail

  const params = {
    id: null,
    name: name,
    image: {
      id: null,
      image: image,
      deleted: null,
    },
  };

  let res;

  try {
    const { data } = await axios.post(`http://localhost:8001/category`, params, {
      headers: { 'Content-Type': "multipart/form-data" }
    });
    res = data;
  } catch (e) {
    if (errorMessages[e.status]) {
      throw new Error(errorMessages[e.status]);
    }
  }
  return res;
};
