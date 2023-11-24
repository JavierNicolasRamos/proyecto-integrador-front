import axios from "axios";

const errorMessages = {
  500: "Error del servidor",
  400: "Error del cliente",
  401: "No autorizado",
  403: "Acceso prohibido",
  404: "No se encontraron productos",
};

const URL = {
  list: "http://localhost:8001/category/list",
  createCategory: "http://localhost:8001/category",
  filterInstrumentsByCategory: "http://localhost:8001/category/instruments",
  deleteCategory: "http://localhost:8001/categoty/",
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
  

  try {
    const { data, status } = await axios.post(URL.createCategory, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return { data, status };
    
  } catch (e) {
    const data = e.response.data;
    const status = "";
    return { data, status };
  }
};

export const deleteCategory = async (id) => {
  try {
    const { data } = await axios.delete(`${URL.deleteCategory}${id}`);
    return data;
  } catch (e) {
    handlerErrors(e);
  }
};