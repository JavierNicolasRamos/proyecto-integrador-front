import { useState } from "react";
import { postCategory } from "../services";

export const usePostCategory = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    console.log(image);

    for (let pair of formData.entries()) {
        console.log(
          pair[0] +
            ", " +
            (pair[1] instanceof File
              ? `File - ${pair[1].name}, ${pair[1].type}`
              : pair[1])
        );
      }

    await postCategory(formData).finally(() => setIsFetching(false));
  };

  return {
    isFetching,
    name,
    setName,
    detail,
    setDetail,
    setImage,
    handleSubmit,
  };
};
