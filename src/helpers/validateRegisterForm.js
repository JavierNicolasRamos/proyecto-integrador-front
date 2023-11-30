import {
  validateName,
  validateEmail,
  validatePassword,
} from "./index";

export const validateRegisterForm = (data) => {
  const validations = {
    name: [
      validateName, 
      "Por favor, ingresa solo letras y espacios en blanco para el NOMBRE"
    ],
    surname: [
      validateName,
      "Por favor, ingresa solo letras y espacios en blanco para el APELLIDO",
    ],
    password: [
      validatePassword,
      "La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra mayúscula, una letra minúscula y un número",
    ],
    email: [
      validateEmail, 
      "Ingresa una dirección de correo electrónico válida"
    ],
  };

  const errors = {};
  
  for (const field in validations) {
    const [validate, message] = validations[field];
    if (validate(data[field])) {
      errors[field] = message;
    }
  }
  
  return errors;
};
