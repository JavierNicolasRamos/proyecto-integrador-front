import { useState } from "react";
import { useImageHandlerCreateInstrument } from "./useImageHandlerCreateInstrument";
import { useFetchCategories } from "./useFetchCategories";
import { postInstrument } from "../services";

export const useFormCreateInstrument = () => {
  const { images, handleImageChange } = useImageHandlerCreateInstrument();
  const {
    categories,
    selectedCategoryId,
    setSelectedCategoryId /*, isFetching */,
  } = useFetchCategories();
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [showError, setShowError] = useState(false);

  const validateForm = () => {
    if (
      !name ||
      name.trim().length < 3 ||
      !detail ||
      detail.trim().length < 3 ||
      !selectedCategoryId ||
      images.length === 0
    ) {
      setShowError(true);
    }
  };

  const submitForm = async () => {
    const jsonData = {
      name: name,
      detail: detail,
      categoryDto: { id: selectedCategoryId },
    };

    const formData = new FormData();

    images.forEach((image) => {
      formData.append("image", image);
    });

    formData.append("jsonData", JSON.stringify(jsonData));

    await postInstrument(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();
    !showError ? submitForm() : null;
  };

  return {
    name,
    setName,
    detail,
    setDetail,
    handleImageChange,
    showError,
    handleSubmit,
    categories,
    selectedCategoryId,
    setSelectedCategoryId,
  };
};
