import { useState, useEffect } from "react";
import { updateUserRole } from "../services";
//import { createLogger } from "vite";

export const useFormPutUserRole = (user) => {
  const [userRole, setUserRole] = useState(user.userRole);
  const [showResult, setShowResult] = useState(false);
  const [success, setSuccess] = useState(false);
  const [resultContent, setResultContent] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [jwt, setJwt] = useState("");

  useEffect(() => {
    const jwtFromSessionStorage = sessionStorage.getItem("jwt");
    jwtFromSessionStorage ? setJwt(jwtFromSessionStorage) : null;
  }, []);

  const submitForm = async () => {
    const { data, status } = await updateUserRole(user.id, jwt);
    return { data, status };
  };

  const handlerSubmit = async ( ) => {

    setIsFetching(true);
    const { data, status } = await submitForm();
    if (status === 200) {
      setIsFetching(false);
      setSuccess(true);
      setResultContent(
        `El usuario ${user.name} ha cambiado de rol a ${user.userRole === "ADMIN" ? "USER" : "ADMIN"}`
      );
      setShowResult(true);
    } else {
      setIsFetching(false);
      setSuccess(false);
      setResultContent(
        `Ha ocurrido un error. ${
          data
            ? data
            : "Asegúrese de contar con los permisos necesarios para efectuar esta acción"
        }`
      );
      setShowResult(true);
    }
  };

  return {
    userRole,
    setUserRole,
    handlerSubmit,
    showResult,
    success,
    resultContent,
    isFetching,
  };
};
