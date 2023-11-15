import {
  validateName,
  validateEmail,
  validatePassword,
} from "./index";

export const validateForm = (data) => {
  const validations = {
    name: [
      validateName, 
      "El nombre debe tener por lo menos 6 caracteres"
    ],
    surname: [
      validateName,
      "El apellido debe tener por lo menos 6 caracteres",
    ],
    password: [
      validatePassword,
      `El password debe tener al menos 10 caracteres, 1 símbolo, 1 mayúscula`,
    ],
    email: [
      validateEmail, 
      "Debe ingresar un email valido"
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
