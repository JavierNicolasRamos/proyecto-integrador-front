import { useState, useEffect } from "react";
import { getInstrumentById } from "../services/index";

export const useGallery = (id) => {
  const [imageUrls, setImageUrls] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const instrumentData = await getInstrumentById(id);
        const filteredImages = instrumentData.image
          .filter((image) => !image.eliminado)
          .map((image) => image.image);

        setImageUrls(filteredImages);
      } catch (error) {
        console.error("Error al obtener datos de la API:", error);
      }
    };

    fetchImages();
  }, [id]);

  const showAllImages = () => {
    setShowAll(true);
  };

  return { imageUrls, showAll, showAllImages };
};