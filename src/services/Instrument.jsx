import axios from "axios";

export const fetchInstrument = async () => {
  const errorMessages = {
    500: "Error del servidor",
    400: "Error del cliente",
    401: "No autorizado",
    403: "Acceso prohibido",
    404: "No se encontraron productos",
  };

  let res;

  try {
    const { data } = await axios.get(`http://localhost:8001/instruments`);
    res = data;
  } catch (e) {
    if (errorMessages[e.status]) {
      throw new Error(errorMessages[e.status]);
    }
  }
  return res;
};

export const postInstrument = async (name, detail, categoryName, images) => {
  const errorMessages = {
    500: "Error del servidor",
    400: "Error del cliente",
    401: "No autorizado",
    403: "Acceso prohibido",
    404: "No se encontraron productos",
  };

  // FALTA que modifiquen para que pida el id de la categoría

  const params = {
    name: name,
    detail: detail,
    category: {
      name: categoryName,
    },
    image: [{ image: images }],
  };

  let res;

  try {
    const { data } = await axios.post(
      `http://localhost:8001/category`,
      params,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    res = data;
  } catch (e) {
    if (errorMessages[e.status]) {
      throw new Error(errorMessages[e.status]);
    }
  }
  return res;
};
