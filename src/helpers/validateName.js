export const validateName = (name) => {
  name === undefined  || null || name.trim().length < 5
  return true
};
