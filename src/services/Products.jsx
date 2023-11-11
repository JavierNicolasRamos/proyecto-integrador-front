import axios from "axios";

const errorMessages = {
  500: "Error del servidor",
  400: "Error del cliente",
  401: "No autorizado",
  403: "Acceso prohibido",
  404: "No se encontraron productos",
};

const URL = {
  "random" : "http://localhost:8001/instruments",
  "paginated" : "http://localhost:8001/instruments/paginated",
  "byId" : "http://localhost:8001/instruments/id/",
}

const handleErrors = (e) => {
  throw new Error(errorMessages[e.status] || e.message);
};

export const getAllProducts = async () => {
  const params = {
    "page": 1,
    "size": 10,
  };

  try {
    const { data } = await axios.get(URL.paginated, { params });
    return data;
  } catch (e) {
    handleErrors(e);
  }
};

export const getRandomProds = async () => {
  try {
    const { data } = await axios.get(URL.random);
    return data;
  } catch (e) {
    handleErrors(e);
  }
};

export const getProductById = async (id) => {
  try {
    const { data } = await axios.get(URL.byId + id);
    return data;
  } catch (e) {
    handleErrors(e);
  }
}