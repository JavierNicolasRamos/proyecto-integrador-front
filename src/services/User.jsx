import axios from "axios";

const errorMessages = {
  500: "Error del servidor",
  400: "Error del cliente",
  401: "No autorizado",
  403: "Acceso prohibido",
  404: "No se encontraron productos",
};

const URL = {
  "register" : "http://localhost:8001/users/register",
  "login" : "http://localhost:8001/users/login",
}

const handlerErrors = (e) => {
  throw new Error(errorMessages[e.status] || e.message);
};

export const postUser = async (formData) => {
  try {
    const { data, status: statusResponse } = await axios.post(URL.register, formData, {
      headers: {
        'Content-Type': 'application/json'
      },
    });
    return (data, statusResponse);
  } catch (e) {
    const { data, status } = e.response
    return data
  }
};

export const loginUser = async(formData) => {
  try {
    const { data } = await axios.post(URL.login, formData);
    return data;
  } catch (e) {
    handlerErrors(e);
  }

}