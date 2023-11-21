export const validateName = (name) => {
  if(name === undefined  || null || name.trim().length < 5){
    return true
  }
  return false
};
