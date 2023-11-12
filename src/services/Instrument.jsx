import axios from "axios";

const errorMessages = {
  500: "Error del servidor",
  400: "Error del cliente",
  401: "No autorizado",
  403: "Acceso prohibido",
  404: "No se encontraron productos",
};

const URL = {
  "list" : "http://localhost:8001/instruments",
  "createInstrument" : "http://localhost:8001/instruments",
  "getInstrumentById" : "http://localhost:8001/instruments/id/",
}

const handleErrors = (e) => {
  throw new Error(errorMessages[e.status] || e.message);
};

export const fetchInstrument = async () => {
  try {
    const { data } = await axios.get(URL.list);
    return data;
  } catch (e) {
    handleErrors(e);
  }
};

export const postInstrument = async (name, detail, categoryName, images) => {
  const params = {
    name: name,
    detail: detail,
    category: {
      name: categoryName,
    },
    image: [{ image: images }],
  };

  try {
    const { data } = await axios.post(URL.createInstrument, params);
    return data;
  } catch (e) {
    handleErrors(e);
  }
};

export const getInstrumentById = async (id) => {
  try {
    const { data } = await axios.get(URL.getInstrumentById + id);
    return data;
  } catch (e) {
    handleErrors(e);
  }
};
