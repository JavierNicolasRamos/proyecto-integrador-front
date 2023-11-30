export const validateName = (name) => {

  const regex = /[0-9!@#$%^&*()_+={}[\]:;'"<>,.?/\\|~-]/;

  if(name === undefined  || null || name.trim().length < 3 || regex.test(name)){
    return true
  }

  return false
};
