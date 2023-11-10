export const validateDni = (dni) => {
  const trimmedDni = dni.trim();
  return trimmedDni === "" || Number(trimmedDni) < 0;
};
