import { generateActualDate } from "./generateActualDate";

export const validateBornDate = (bornDate) => {
  const todayDate = generateActualDate();
  return bornDate > todayDate || !bornDate;
};
