import {
  validateDni,
  validateName,
  validateEmail,
  validatePassword,
  validateBornDate,
} from "./index";

export const validateForm = (data) => {
  const validations = {
    name: [validateName, "El nombre debe tener por lo menos 6 caracteres"],
    lastName: [
      validateName,
      "El apellido debe tener por lo menos 6 caracteres",
    ],
    email: [validateEmail, "Debe ingresar un email valido"],
    password: [
      validatePassword,
      "La clave debe tener por lo menos 10 caracteres, un símbolo y una mayúscula",
    ],
    bornDate: [
      validateBornDate,
      "La fecha de nacimiento no puede ser mayor o igual a la fecha de hoy y no puede estar vacía",
    ],
    dni: [validateDni, "Ingrese un DNI valido"],
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
