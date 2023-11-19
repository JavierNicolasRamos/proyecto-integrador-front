import { useState } from "react";
import { postCharacteristic } from "../services/Characteristic";

export const usePostCharacteristic = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [showError, setShowError] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [success, setSuccess] = useState(false);
  const [resultContent, setResultContent] = useState("");

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

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validated = validateForm()

    const formData = {
      name: name,
      icon: icon,
    }

    if (validated === true) {
      setIsFetching(true);
      const {data, status} = await postCharacteristic(formData)
      if (status === 200) {
        setIsFetching(false);
        setSuccess(true);
        setResultContent(`La característica ${data.name} ha sido creada correctamente con el ID ${data.id}`);
        setShowResult(true);
      } else {
        setIsFetching(false);
        setSuccess(false);
        setResultContent(`Ha ocurrido un error: ${data}`);
        setShowResult(true);
      }
    } else {
      setShowError(true)
    }
    
    
  };

  return { isFetching, name, setName, icon, setIcon, handleSubmit, showError, showResult, success, resultContent };
};
