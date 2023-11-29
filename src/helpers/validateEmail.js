export const validateEmail = (email) => {

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+\D$/;

  if(emailRegex.test(email)){
    return false
  }
  
  return true
};
