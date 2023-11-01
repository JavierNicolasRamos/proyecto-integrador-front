export const validatePassword = (password) => {
  
  //*Expresion regular para el password
  const passwordRegEx = /^(?=.*[!@#$%^&*()-_+=<>?])[A-Za-z0-9!@#$%^&*()-_+=<>?]{10,}$/

  return !passwordRegEx.test(password.trim())  
}

