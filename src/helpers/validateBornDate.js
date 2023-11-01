import { generateActualDate } from "./generateActualDate";

export const validateBornDate = (bornDate) => {
  
  //Obtenemos la fecha de hoy formateada
  const todayDate = generateActualDate();

  return bornDate > todayDate || !bornDate

}