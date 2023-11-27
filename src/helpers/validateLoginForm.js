import {
  validateEmail,
  validatePassword,
} from "./index";

export const validateLoginForm = (data) => {
  const validations = {
    password: [
      validatePassword,
      "El password no puede estar vacio",
    ],
    email: [
      validateEmail, 
      "Debe ingresar un email"
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
