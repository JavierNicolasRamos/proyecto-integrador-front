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

const handlerErrors = (e) => {
  throw new Error(errorMessages[e.status] || e.message);
};

export const getAllInstruments = async () => {
  try {
    const { data } = await axios.get(URL.getAllInstruments);
    return data;
  } catch (e) {
    handlerErrors(e);
  }
};

export const getRandomInstruments = async () => {
  try {
    const { data } = await axios.get(URL.random);
    return data;
  } catch (e) {
    handlerErrors(e);
  }
};

export const getInstrumentById = async (id) => {
  try {
    const { data } = await axios.get(`${URL.getInstrumentById}${id}`);
    return data;
  } catch (e) {
    handlerErrors(e);
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
    return data;
  } catch (error) {
    handlerErrors(error);
  }
};

export const postInstrument = async (formData, jwt) => {


  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${jwt}`
    }
  };

  try {
    const { data, status } = await axios.post(URL.createInstrument, formData, config);
    return { data, status };
  } catch (e) {
    const data = e.response.data;
    const status = "";
    return { data, status };
  }
};

export const putInstrument = async (instrument, jwt) => {

  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`
    }
  };

  try {
    const { data, status } = await axios.put(`${URL.putInstrument}${instrument.id}`,instrument, config);
    return { data, status };
  } catch (e) {
    const data = e.response.data;
    const status = "";
    return { data, status };
  }
};

export const deleteInstrument = async (id, jwt) => {

  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`
    }
  };

  try {
    const { data } = await axios.delete(`${URL.deleteInstrument}${id}`, config);
    return data;
  } catch (e) {
    handlerErrors(e);
  }
};