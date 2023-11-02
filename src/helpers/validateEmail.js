export const validateEmail = (email) => {
  //Expresion regular para el mail
  const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  
  return emailRegEx.test(email)  
}