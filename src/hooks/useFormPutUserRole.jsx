import { useState, useEffect } from "react";
import { putUser } from "../services";
//import { createLogger } from "vite";

export const useFormPutUserRole = (presentUser) => {
  const [userRole, setUserRole] = useState(presentUser.presentUser.userRole);
  const [showResult, setShowResult] = useState(false);
  const [success, setSuccess] = useState(false);
  const [resultContent, setResultContent] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [jwt, setJwt] = useState("");

  const roles = ["USER", "ADMIN"];

  useEffect(() => {
    const jwtFromSessionStorage = sessionStorage.getItem("jwt");
    jwtFromSessionStorage ? setJwt(jwtFromSessionStorage) : null;
  }, []);

  const submitForm = async () => {
    const user = {
      id: presentUser.presentUser.id,
      // name: presentUser.presentUser.name,
      // surname: presentUser.presentUser.surname,
      // areaCode: presentUser.presentUser.areaCode,
      // prefix: presentUser.presentUser.prefix,
      // phone: presentUser.presentUser.phone,
      // isMobile: presentUser.presentUser.isMobile,
      // email: presentUser.presentUser.email,
      // password: presentUser.presentUser.password,
      role: userRole,
    };

    const { data, status } = await putUser(user, jwt);

    return { data, status };
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();

    setIsFetching(true);
    const { data, status } = await submitForm();
    if (status === 200) {
      setIsFetching(false);
      setSuccess(true);
      setResultContent(
        `El usuario ${data.name} ha sido editado correctamente con el rol ${userRole}`
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
    roles,
    showResult,
    success,
    resultContent,
    isFetching,
  };
};
