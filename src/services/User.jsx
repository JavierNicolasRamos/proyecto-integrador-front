import axios from "axios";

const errorMessages = {
  500: "Error del servidor",
  400: "Error del cliente",
  401: "No autorizado",
  403: "Acceso prohibido",
  404: "No se encontraron productos",
};

const URL = {
  "register" : "http://localhost:8002/users/register",
  "login" : "http://localhost:8002/users/login",
}

const handleErrors = (e) => {
  throw new Error(errorMessages[e.status] || e.message);
};

export const postUser = async (formData) => {
  try {
    const { data, status: statusResponse } = await axios.post(URL.register, formData, {
      headers: {
        'Content-Type': 'application/json'
      },
    });
    console.log(data, statusResponse)
    return (data, statusResponse);
  } catch (e) {
    const { data, status } = e.response
    console.log(data, status)
    return data
  }
};

export const loginUser = async(formData) => {
  console.log(formData)
  try {
    const { data } = await axios.post(URL.login, formData);
    return data;
  } catch (e) {
    handleErrors(e);
  }

}