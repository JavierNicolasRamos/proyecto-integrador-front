export const generateActualDate = () => {
  const today = new Date();
  return today.toISOString().slice(0, 10);
};
