export const validateName = (name) => {
  return name.trim() < 5 ? true : false
}