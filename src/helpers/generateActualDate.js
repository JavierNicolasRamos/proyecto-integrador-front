export const generateActualDate = () => {
  //Creamos la fecha actual para comprar con la de nacimiento
  const todayDay = new Date().getDate()
  const todayMonth = new Date().getMonth() + 1
  const todayYear = new Date().getFullYear()

  const todayDate = `${todayYear}-${todayMonth}-${todayDay}`

  return todayDate
}