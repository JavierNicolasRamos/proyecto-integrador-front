import axios from "axios";

const errorMessages = {
  500: "Error del servidor",
  400: "Error del cliente",
  401: "No autorizado",
  403: "Acceso prohibido",
  404: "No se encontraron productos",
};

const URL = {
  createInstrument: "http://localhost:8001/instruments",
  putInstrument: "http://localhost:8001/instruments/",
  getAllInstruments: "http://localhost:8001/instruments",
  getInstrumentById: "http://localhost:8001/instruments/id/",
  paginated: "http://localhost:8001/instruments/paginated",
  random: "http://localhost:8001/instruments",
  deleteInstrument: "http://localhost:8001/instruments/",
};

const handleErrors = (e) => {
  console.error("Error:", e);
  throw new Error(errorMessages[e.status] || e.message);
};

export const getAllInstruments = async () => {
  try {
    const { data } = await axios.get(URL.getAllInstruments);
    return data;
  } catch (e) {
    handleErrors(e);
  }
};

export const getRandomInstruments = async () => {
  try {
    const { data } = await axios.get(URL.random);
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

export const getAllInstrumentsPaginated = async (customizedParams) => {
  const standardParams = {
    page: 1,
    size: 10,
  };

  try {
    const { data } = await axios.get(URL.paginated, {
      params: customizedParams ? customizedParams : standardParams,
    });
    return data.content;
  } catch (error) {
    handleErrors(error);
  }
};

export const postInstrument = async (formData) => {
  try {
    const { data, status } = await axios.post(URL.createInstrument, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return { data, status };
  } catch (e) {
    const data = e.response.data;
    const status = "";
    console.log("Error en la solicitud POST:", e.response.data);
    return { data, status };
  }
};

export const putInstrument = async (instrument) => {
  try {
    const { data, status } = await axios.put(`${URL.putInstrument}${instrument.id}`,instrument);
    return { data, status };
  } catch (e) {
    const data = e.response.data;
    const status = "";
    console.log("Error en la solicitud PUT:", e.response.data);
    return { data, status };
  }
};

export const deleteInstrument = async (id) => {
  try {
    const { data } = await axios.delete(`${URL.deleteInstrument}${id}`);
    return data;
  } catch (e) {
    handleErrors(e);
  }
};
