import axios from "axios";

const errorMessages = {
  500: "Error del servidor",
  400: "Error del cliente",
  401: "No autorizado",
  403: "Acceso prohibido",
  404: "No se encontraron productos"
};

const URL = {
  random : "instruments",
  paginated : "instruments/paginated"
}

//Obtener todos los productos paginados
export const getAllProducts = async() => {

  let res
  
  const params = {
    "page": 1,
    "size": 10,
  }
  
  try {
    const {data} = await axios.get(`http://localhost:8001/${URL.paginated}`, params);
    res = data
  } catch (e) {
    if (errorMessages[e.status]) {
        throw new Error(errorMessages[e.status]);
    }
  }

  return res;

}

//Obtener 10 Productos aleatorios
export const getRandomProds = async () => {
  
  let res

  try {
    const {data} = await axios.get(`http://localhost:8001/${URL.random}`);
    res = data
  } catch (e) {
    if (errorMessages[e.status]) {
        throw new Error(errorMessages[e.status]);
    }
  }
  
  return res;

};