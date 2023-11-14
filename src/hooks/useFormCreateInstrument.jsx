import { useState } from "react";
import { useImageHandlerCreateInstrument } from "./useImageHandlerCreateInstrument";
import { useFetchCategories } from "./useFetchCategories";
import { postInstrument } from "../services";
//import { createLogger } from "vite";

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
    const instrument = {
      id: null,
      name: name,
      detail: detail,
      characteristics: [
        {
          id: null,
          name: null,
          icon: null,
          deleted: null,
        },
      ],
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
      formData.append(
        "images",
        new Blob([], { type: "multipart/form-data" }),
        image
      );
    });

for (let pair of formData.entries()) {
  console.log(
    pair[0] +
      ", " +
      (pair[1] instanceof File
        ? `File - ${pair[1].name}, ${pair[1].type}`
        : pair[1])
  );
}

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
