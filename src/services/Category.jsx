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
  list: `${backUrl}/category/list`,
  createCategory: `${backUrl}/category`,
  filterInstrumentsByCategory: `${backUrl}/category/instruments`,
  deleteCategory: `${backUrl}/category/`,
};

const handlerErrors = (e) => {
  throw new Error(errorMessages[e.status] || e.message);
};

export const getInstrumentsByCategory = async (categoryIdList) => {
  const url = `${
    URL.filterInstrumentsByCategory
  }?categoryIdList=${categoryIdList.join(",")}`;
  const { data } = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};

export const getAllCategories = async () => {
  try {
    const { data } = await axios.get(URL.list);
    return data;
  } catch (e) {
    handlerErrors(e);
  }
};

export const postCategory = async (formData) => {

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${jwt}`
    }
  };
  

  try {
    const { data, status } = await axios.post(URL.createCategory, formData, config);
    return { data, status };
    
  } catch (e) {
    const data = e.response.data;
    const status = "";
    return { data, status };
  }
};

export const deleteCategory = async (id) => {

  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`
    }
  };

  try {
    const { data, status } = await axios.delete(`${URL.deleteCategory}${id}`, config);
    return { data, status };
  } catch (e) {
    const data = e.response.data;
    const status = "";
    return { data, status };
  }
};