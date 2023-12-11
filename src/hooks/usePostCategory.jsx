import { useState, useEffect } from "react";
import { postCategory } from "../services";

export const usePostCategory = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [image, setImage] = useState(null);
  const [showError, setShowError] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [success, setSuccess] = useState(false);
  const [resultContent, setResultContent] = useState("");
  const [jwt, setJwt] = useState("");

  useEffect(() => {
    const jwtFromSessionStorage = sessionStorage.getItem("jwt");
    jwtFromSessionStorage ? setJwt(jwtFromSessionStorage) : null
    }, []);


  const validateForm = () => {
    if (
      !name ||
      name.trim().length < 3 ||
      !detail ||
      detail.trim().length < 3 ||
      !image
    ) {
      return false;
    } else {
      return true;
    }
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();

    const validated = validateForm();

    const categoryDto = {
      id: null,
      name: name,
      details: detail,
    };

    const formData = new FormData();

    formData.append(
      "categoryDto",
      new Blob([JSON.stringify(categoryDto)], { type: "application/json" }),
      "categoryDto.json"
    );

    formData.append("image", image);

    if (validated === true) {
      setIsFetching(true);
      const { data, status } = await postCategory(formData, jwt);
      if (status === 200) {
        setIsFetching(false);
        setSuccess(true);
        setResultContent(
          `La categoría ${data.name} ha sido creada correctamente con el ID ${data.id}`
        );
        setShowResult(true);
      } else {
        setIsFetching(false);
        setSuccess(false);
        setResultContent(`Ha ocurrido un error. ${data ? data : "Asegúrese de estar logueado como administrador para efectuar esta acción"}`);
        setShowResult(true);
      }
    } else {
      setShowError(true);
    }
  };

  return {
    isFetching,
    name,
    setName,
    detail,
    setDetail,
    setImage,
    handlerSubmit,
    showError,
    showResult,
    success,
    resultContent,
  };
};
