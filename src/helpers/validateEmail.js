export const validateEmail = (email) => {
  return /@.+\.+/.test(email);
};
