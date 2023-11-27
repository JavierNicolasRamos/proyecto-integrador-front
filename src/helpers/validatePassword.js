export const validatePassword = (password) => {
  const trimmedPassword = password.trim();
  const hasSpecialCharacter = /[!@#$%^&*()-_+=<>?]/.test(trimmedPassword);
  return !hasSpecialCharacter;
};
