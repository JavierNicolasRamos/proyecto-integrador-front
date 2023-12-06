import axios from "axios";

const errorMessages = {
  500: "Error del servidor",
  400: "El correo no corresponde a un usuario existente",
  401: "El email no puede estar vacio",
};

const backUrl = import.meta.env.VITE_APIBACKEND

const URL = {
  list : `${backUrl}/emails/resend`,
}

const handlerErrors = (e, data) => {
  if (data === undefined) {
    throw new Error(errorMessages[e.response.status]);
  } else {
    throw new Error(data);
  }
};

export const resendEmail = async (email) => {

  try {
    const { data } = await axios.get(`${URL.list}/${email}`);
    return data;
  } catch (e) {
    handlerErrors(e);
  }

};