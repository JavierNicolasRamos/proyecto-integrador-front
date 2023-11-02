import { validateDni, validateName, validateEmail, validatePassword, validateBornDate } from './index';

export const validateForm = (data) =>{
  
  //?Creamos un objeto vacio que se ira llenando con los errores
  const errors = {}

  //?Validacion del nombre
  validateName(data.name) ? errors.name = 'El nombre debe tener por lo menos 6 caracteres' : ''
  //?Validacion del apellido
  validateName(data.lastName) ? errors.lastName = 'El apellido debe tener por lo menos 6 caracteres' : ''
  //?Validacion del email
  validateEmail(data.email) ? errors.email = 'Debe ingresar un email valido' : ''
  //?Validacion del password
  validatePassword(data.password) ? errors.password = 'La clave debe tener por lo menos 10 caracteres, un simbolo y una mayuscula' : ''  
  //?Validacion de la fecha de nacimiento
  validateBornDate(data.bornDate) ? errors.bornDate = 'La fecha de nacimiento no puede ser mayor o igual a la fecha de hoy y no puede estar vacia' : ''
  //?Validacion del dni
  validateDni(data.dni) ? errors.dni = 'Ingrese un DNI valido' : '' 

  return errors
}