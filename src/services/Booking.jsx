import axios from "axios";

const errorMessages = {
  500: "Error del servidor",
  400: "No se puede reservar un instrumento que usted creo",
};

const backUrl = import.meta.env.VITE_APIBACKEND
const jwt = sessionStorage.getItem('jwt')

const URL = {
  list: `${backUrl}/booking`,
};

const handlerErrors = (e) => {
  throw new Error(e.response.status);
};

export const getBookings = async () => {

  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`
    }
  };

  try {
    const { data, status } = await axios.get(`${URL.list}`, config);
    return { data, status };
  } catch (e) {
    const data = e.response.data;
    const status = "";
    return { data, status };
  }
};

export const postBooking = async (formData) => {

  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`
    }
  };

  try {
    const { data, status } = await axios.post(`${URL.list}`, formData, config);
    return { data, status };
  } catch (e) {
    handlerErrors(e)
  }
};