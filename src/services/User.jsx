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
  "login" : "http://localhost:8001/auth/login",
}

const handlerErrors = (e) => {
  throw new Error(errorMessages[e.status] || e.message);
};

export const postUser = async (formData) => {
  try {
    const { data, status } = await axios.post(URL.register, formData, {
      headers: {
        'Content-Type': 'application/json'
      },
    });
    return ({data, status});
  } catch (e) {
    const data = e.response.data;
    const status = "";
    return { data, status };
  }
};

export const loginUser = async(formData) => {
  try {
    const { data, status } = await axios.post(URL.login, formData)
    const { jwt, name, surname, email, role } = data
    
    if (status === 200) {
      sessionStorage.setItem('jwt', jwt)
      sessionStorage.setItem('role', role)
      sessionStorage.setItem('email', email)
    }

    return ({
      jwt, 
      role, 
      email, 
      name, 
      surname, 
      status
    });
  } catch (e) {
    handlerErrors(e);
  }
}

export const getUserByEmail = async(formData) => {
  try {
    const { data } = await axios.post(URL.login, formData);
    return data;
  } catch (e) {
    handlerErrors(e);
  }
}