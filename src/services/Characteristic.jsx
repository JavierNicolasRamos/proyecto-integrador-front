import axios from "axios";

const errorMessages = {
  500: "Error del servidor",
  400: "Error del cliente",
  401: "No autorizado",
  403: "Acceso prohibido",
  404: "No se encontraron categorías",
};

const backUrl = import.meta.env.VITE_APIBACKEND
// const jwt = sessionStorage.getItem('jwt')


const URL = {
  list : `${backUrl}/characteristic/list`,
  createCharacteristic : `${backUrl}/characteristic`,
  putCharacteristic: `${backUrl}/characteristic/`,
  deleteCharacteristic: `${backUrl}/characteristic/`,
}

const handlerErrors = (e) => {
  throw new Error(errorMessages[e.status] || e.message);
};

export const getCharacteristic = async (jwt) => {

  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`
    }
  };

  try {
    const { data } = await axios.get(URL.list, config);
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

export const putCharacteristic = async (characteristic, jwt) => {

  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`
    }
  };


  try {
    const { data, status } = await axios.put(`${URL.putCharacteristic}${characteristic.id}`,characteristic, config);
    return { data, status };
  } catch (e) {
    const data = e.response.data;
    const status = "";
    return { data, status };
  }
};

export const deleteCharacteristic = async (id, jwt) => {

  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`
    }
  };

  try {
    const { data, status } = await axios.delete(`${URL.deleteCharacteristic}${id}`, config);
    return { data, status };
  } catch (e) {
    const data = e.response.data;
    const status = "";
    return { data, status };
  }
};