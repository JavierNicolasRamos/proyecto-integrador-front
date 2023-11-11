import { useState } from "react";

export const useImageHandlerCreateProduct = () => {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const newImages = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  return { images, handleImageChange };
};