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
  getReviewsUser: `${backUrl}/reviews/user`,
  getReviewsInstrument: `${backUrl}/reviews/instrument`,
  postReview: `${backUrl}/reviews`,
  };

const handlerErrors = (e) => {
  throw new Error(errorMessages[e.status] || e.message);
};

export const getReviewsByInstrument = async (id) => {

  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`
    }
  };

  try {
    const { data, status } = await axios.get(`${URL.getReviewsInstrument}?id=${id}`, config);
    return { data, status };
  } catch (e) {
    const data = e.response.data;
    const status = "";
    return { data, status };
  }
};

export const postReview = async (formData) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`
    }
  };

  try {
    const { data, status } = await axios.post(URL.postReview, formData, config);
    return { data, status };
  } catch (e) {
    const data = e.response.data;
    const status = "";
    return { data, status };
  }
};

