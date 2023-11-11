import axios from "axios";

const errorMessages = {
  500: "Error del servidor",
  400: "Error del cliente",
  401: "No autorizado",
  403: "Acceso prohibido",
  404: "No se encontraron productos",
};

const URL = {
  "list" : "http://localhost:8001/category/list",
  "createCategorie" : "http://localhost:8001/category",
  "filterProductsByCategorie" : "http://localhost:8001/category/instruments"
}

const handleErrors = (e) => {
  throw new Error(errorMessages[e.status] || e.message);
};

export const getProductsByCategory = async (params) => {
  
  let res

  try {
    const {data} = await axios.get(`http://localhost:8001/${URL.filterProductsByCategorie}`, params);
    res = data
  } catch (e) {
    if (errorMessages[e.status]) {
        throw new Error(errorMessages[e.status]);
    }
  }
  console.log(res)
  return res;

};


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
  formData.append('name', name);
  formData.append('details', detail);
  formData.append('imageDto.image', image);

  try {
    const { data } = await axios.post(URL.createCategory, formData, {
      headers: { 'Content-Type': "multipart/form-data" }
    });
    return data;
  } catch (e) {
    handleErrors(e);
  }
};
