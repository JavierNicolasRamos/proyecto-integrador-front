import { useState, useEffect } from "react";
import { useFetchCategories } from "./useFetchCategories";
import { putInstrument } from "../services";
import { useFetchAdminCharacteristicList } from "./useFetchAdminCharacteristicList";
//import { createLogger } from "vite";

export const useFormPutInstrument = (presentInstrument) => {

  const { categories, selectedCategoryId, setSelectedCategoryId } = useFetchCategories();
  const { characteristics } = useFetchAdminCharacteristicList();
  const [name, setName] = useState(presentInstrument.presentInstrument.name);
  const [detail, setDetail] = useState(
    presentInstrument.presentInstrument.detail
  );
  const [checkedCharacteristics, setCheckedCharacteristics] = useState(
    presentInstrument.presentInstrument.characteristics || []
  );
  const [showError, setShowError] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [success, setSuccess] = useState(false);
  const [resultContent, setResultContent] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const handleCheckboxChange = (event, option) => {
    const { checked } = event.target;

    if (checked) {
      if (!checkedCharacteristics.some((item) => item.id === option.id)) {
        setCheckedCharacteristics((prevCheckedCharacteristics) => [
          ...prevCheckedCharacteristics,
          option,
        ]);
      }
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
      detail.trim().length < 10
    ) {
      return false;
    } else {
      return true;
    }
  };

  const submitForm = async () => {
    const instrument = {
      id: presentInstrument.presentInstrument.id,
      name: name,
      detail: detail,
      characteristics: checkedCharacteristics,
      categoryDto: {
        id: selectedCategoryId
          ? selectedCategoryId
          : presentInstrument.presentInstrument.category.id,
        name: null,
        details: null,
      },
      score: 0.0,
      uploadDate: null,
      updateDate: null,
      available: null,
      deleted: null,
    };

    const { data, status } = await putInstrument(instrument);

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
          `El instrumento ${data.name} ha sido editado correctamente`
        );
        setShowResult(true);
      } else {
        setIsFetching(false);
        setSuccess(false);
        setResultContent(
          `Ha ocurrido un error. ${
            data
              ? data
              : "Asegúrese de estar logueado como administrador para efectuar esta acción"
          }`
        );
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
    handleCheckboxChange,
  };
};

