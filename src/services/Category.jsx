import axios from "axios";
import { Header } from "../containers";

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
};

const handleErrors = (e) => {
  throw new Error(errorMessages[e.status] || e.message);
};

export const getInstrumentsByCategory = async (categoryIdList) => {
  const url = `${URL.filterInstrumentsByCategory}?categoryIdList=${categoryIdList.join(',')}`;
  const { data } = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
}

export const getAllCategories = async () => {
  try {
    const { data } = await axios.get(URL.list);
    return data;
  } catch (e) {
    handleErrors(e);
  }
};

export const postCategory = async (name, detail, image) => {
  const formData = new FormData();

  const categoryDto = {
    id: null,
    name: name,
    details: detail,
  };

  formData.append(
    "categoryDto",
    new Blob([JSON.stringify(categoryDto)], { type: "application/json" }),
    "categoryDto.json"
  );
  formData.append(
    "image",
    new Blob([], { type: "multipart/form-data" }),
    image
  );

  try {
    const { data } = await axios.post(URL.createCategory, formData);
    return data;
  } catch (e) {
    handleErrors(e);
  }
};
