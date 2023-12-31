import { useState, useEffect } from "react";
import { useImageHandlerCreateInstrument } from "./useImageHandlerCreateInstrument";
import { useFetchCategories } from "./useFetchCategories";
import { postInstrument } from "../services";
import { useFetchAdminCharacteristicList } from "./useFetchAdminCharacteristicList";
//import { createLogger } from "vite";

export const useFormCreateInstrument = () => {
  const { images, handlerImageChange } = useImageHandlerCreateInstrument();
  const { categories, selectedCategoryId, setSelectedCategoryId } =
    useFetchCategories();

  const { characteristics } = useFetchAdminCharacteristicList();
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [checkedCharacteristics, setCheckedCharacteristics] = useState([]);
  const [showError, setShowError] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [success, setSuccess] = useState(false);
  const [resultContent, setResultContent] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [adminMail, setAdminEmail] = useState("");
  const [jwt, setJwt] = useState("");

  useEffect(() => {
    const emailFromSessionStorage = sessionStorage.getItem("email");
    emailFromSessionStorage ? setAdminEmail(emailFromSessionStorage) : null
    const jwtFromSessionStorage = sessionStorage.getItem("jwt");
    jwtFromSessionStorage ? setJwt(jwtFromSessionStorage) : null
  }, []);

    const handleCheckboxChange = (event, option) => {
      const { checked } = event.target;
  
      if (checked) {
        setCheckedCharacteristics((prevCheckedCharacteristics) => [...prevCheckedCharacteristics, option]);
      } else {
        setCheckedCharacteristics((prevCheckedCharacteristics) =>
        prevCheckedCharacteristics.filter((item) => item.id !== option.id)
        );
      }
    };

  const validateForm = () => {
    if (
      !name ||
      name.trim().length < 3 ||
      !detail ||
      detail.trim().length < 10 ||
      !selectedCategoryId ||
      images.length === 0
    ) {
      return false;
    } else {
      return true;
    }
  };

  const submitForm = async () => {
    const instrument = {
      id: null,
      name: name,
      detail: detail,
      characteristics: checkedCharacteristics,
      sellerDto: {
        email: adminMail,
      },
      categoryDto: {
        id: selectedCategoryId,
        name: null,
        details: null,
      },
      score: 0.0,
      uploadDate: null,
      updateDate: null,
      available: null,
      deleted: null,
    };

    const formData = new FormData();

    formData.append(
      "instrument",
      new Blob([JSON.stringify(instrument)], { type: "application/json" }),
      "instrument.json"
    );

    images.forEach((image) => {
      formData.append("images", image);
    });

    const { data, status } = await postInstrument(formData, jwt);

    return { data, status };
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const validated = validateForm();

    if (validated === true) {
      setIsFetching(true);
      const { data, status } = await submitForm();
      if (status === 200) {
        setIsFetching(false);
        setSuccess(true);
        setResultContent(
          `El instrumento ${data.name} ha sido creado correctamente con el ID ${data.id}`
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
    name,
    setName,
    detail,
    setDetail,
    handlerImageChange,
    showError,
    handlerSubmit,
    categories,
    selectedCategoryId,
    setSelectedCategoryId,
    showResult,
    success,
    resultContent,
    isFetching,
    characteristics,
    checkedCharacteristics,
    handleCheckboxChange
  };
};
