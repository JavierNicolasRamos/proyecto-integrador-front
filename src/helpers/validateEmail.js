export const validateEmail = (email) => {
  
  if(/@.+\.+/.test(email)){
    return false
  }
  
  return true
};
