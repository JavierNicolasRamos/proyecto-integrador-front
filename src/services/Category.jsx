import axios from "axios";

const errorMessages = {
  500: "Error del servidor",
  400: "Error del cliente",
  401: "No autorizado",
  403: "Acceso prohibido",
  404: "No se encontraron productos",
};

const URL = {
  "list" : "http://localhost:8001/category/list",
  "createCategorie" : "http://localhost:8001/category",
}

export const getAllCategories = async () => {

  let res;

  try {
    const { data } = await axios.get(URL.list);
    res = data;
  } catch (e) {
    if (errorMessages[e.status]) {
      throw new Error(errorMessages[e.status]);
    }
  }
  return res;
};

export const postCategory = async (name, detail, image) => {

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
    const { data } = await axios.post(URL.createCategorie, params, {
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
