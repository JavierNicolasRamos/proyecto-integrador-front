import { useState, useEffect } from "react";
import { putCharacteristic } from "../services";
//import { createLogger } from "vite";

export const useFormPutCharacteristic = (presentCharacteristic) => {
  const [name, setName] = useState(presentCharacteristic.presentCharacteristic.name);
  const [icon, setIcon] = useState(presentCharacteristic.presentCharacteristic.icon);
  const [showError, setShowError] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [success, setSuccess] = useState(false);
  const [resultContent, setResultContent] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [jwt, setJwt] = useState("");

  console.log("Present caracteric desde UseFormPresentCharacteristic", presentCharacteristic);

  const icons = [
    "https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1700269359389-1170628_1.png",
    "https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1700269361412-acabdo_1.png",
    "https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1700269361773-año_1.png",
    "https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1700269362133-CAMARA_1.png",
    "https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1700269362489-camion_1.png",
    "https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1700269362858-color_1.png",
    "https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1700269363217-compartir_1.png",
    "https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1700269363574-credito1_1.png",
    "https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1700269363929-estuche_1.png",
    "https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1700269364287-marca_1.png",
    "https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1700269364653-medi1_1.png",
    "https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1700269365007-mp-2_1.png",
    "https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1700269365376-music1_1.png",
    "https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1700269365749-origen_1.png",
    "https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1700269366113-peso1_1.png",
    "https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1700269366474-VERI_1.png",
    "https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1700269366834-vol1_1.png"
]
  

  useEffect(() => {
    const jwtFromSessionStorage = sessionStorage.getItem("jwt");
    jwtFromSessionStorage ? setJwt(jwtFromSessionStorage) : null
    }, []);

    const handlerIconSelection = (event) => {
      const src = event.target.src;
      setIcon(src);
    };

    const validateForm = () => {
      if (
        !name ||
        name.trim().length < 3 ||
        !icon
      ) {
        return false;
      } else {
        return true
      }
    };

    const handlerSubmit = async (e) => {
      e.preventDefault();
      const validated = validateForm()
  
      const formData = {
        id: presentCharacteristic.presentCharacteristic.id,
        name: name,
        icon: icon,
      }
  
      if (validated === true) {
        setIsFetching(true);
        const {data, status} = await putCharacteristic(formData, jwt)
        if (status === 200) {
          setIsFetching(false);
          setSuccess(true);
          setResultContent(`La característica ${data.name} ha sido editadad correctamente`);
          setShowResult(true);
        } else {
          setIsFetching(false);
          setSuccess(false);
          setResultContent(`Ha ocurrido un error. ${data ? data : "Asegúrese de estar logueado como administrador para efectuar esta acción"}`);
          setShowResult(true);
        }
      } else {
        setShowError(true)
      }
      
      
    };

  return {
    name,
    setName,
    icon,
    handlerIconSelection,
    showError,
    handlerSubmit,
    showResult,
    success,
    resultContent,
    icons,
    isFetching
  };
};
