export const validateDni = (dni) => {
  return dni < 0 || dni.length === 0 
}