export const validateEmail = (email) => {
  
  if(/@.+\.+/.test(email) && email.length > 0){
    return false
  }
  
  return true
};
