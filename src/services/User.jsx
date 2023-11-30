import axios from "axios";

const errorMessages = {
  500: "Alguno de los datos ingresados es incorrecto",
  400: "Error del cliente",
  401: "No autorizado",
  403: "Alguno de los datos ingresados es incorrecto",
  404: "No se encontraron productos",
};

const backUrl = import.meta.env.BACKEND_URL;

const URL = {
  register: `${backUrl} /users/register`,
  login: `${backUrl}/auth/login`,
  getAll: `${backUrl}/users`,
  putUser: `${backUrl}/users/`,
}

const handlerErrors = (e, data) => {
  if (data === undefined) {
    throw new Error(errorMessages[e.response.status]);
  } else {
    throw new Error(data);
  }
};

export const postUser = async (formData) => {
  try {
    const { data, status } = await axios.post(URL.register, formData, {
      headers: {
        'Content-Type': 'application/json'
      },
    });
    return {data, status};
  } catch (e) {
    const { data } = e.response
    if (data !== undefined) {
      handlerErrors(e, data)
    } else {
      handlerErrors(e)
    }
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
    handlerErrors(e)
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

export const getAllUsers = async (jwt) => {

  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`
    }
  };

  try {
    const { data } = await axios.get(URL.getAll, config);
    return data;
  } catch (e) {
    handlerErrors(e);
  }
};

export const putUser = async (user, jwt) => {

  const config = {
    headers: {
      'Authorization': `Bearer ${jwt}`
    }
  };


  try {
    const { data, status } = await axios.put(`${URL.putUser}${user.id}`,user, config);
    return { data, status };
  } catch (e) {
    const data = e.response.data;
    const status = "";
    return { data, status };
  }
};