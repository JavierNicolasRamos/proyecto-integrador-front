
import axios from "axios";

const errorMessages = {
  500: "Error del servidor",
  400: "Error del cliente",
  401: "No autorizado",
  403: "Acceso prohibido",
  404: "No se encontraron productos",
};

const backUrl = import.meta.env.VITE_APIBACKEND
const jwt = sessionStorage.getItem('jwt')

const URL = {
  deleteFav: `${backUrl}/favourite/remove`,
  addFav: `${backUrl}/favourite/add`,
  getAllFavs: `${backUrl}/favourite`,
};

const handlerErrors = (e) => {
  throw new Error(errorMessages[e.response.status] || e.message);
};

export const getAllFavs = async (email) => {

  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`
    }
  };

  try {
    const { data } = await axios.get(`${URL.getAllFavs}?email=${encodeURIComponent(email)}`, config);
    console.log(data)
    return {data};
  } catch (e) {
    handlerErrors(e)
  }

};

export const postFav = async (id, email) => {

  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`
    }
  };

  const formData = {
    "email": email,
    "idInstrument": id,
  }

  try {
    const { data, status } = await axios.put(URL.addFav, formData, config);
    return {data, status};
  } catch (e) {
    const data = e.response.data;
    const status = "";
    return { data, status };
  }
};

export const deleteFav = async (id, email) => {

    const config = {
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    };
  
    const formData = {
      "email": email,
      "idInstrument": id,
    }
  
    try {
      const { data, status } = await axios.put(URL.deleteFav, formData, config);
      return {data, status};
    } catch (e) {
      const data = e.response.data;
      const status = "";
      return { data, status };
    }
  };

