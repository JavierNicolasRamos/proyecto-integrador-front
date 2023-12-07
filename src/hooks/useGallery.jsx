import { useState, useEffect } from "react";
import { getInstrumentById } from "../services/index";

export const useGallery = (id) => {
  const [imageUrls, setImageUrls] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const instrumentData = await getInstrumentById(id);
        const filteredImages = instrumentData.image
          .filter((image) => !image.eliminado)
          .map((image) => image.image);

        setImageUrls(filteredImages);
      } catch (error) {
        setError(error);
      }
    };

    fetchImages();
  }, [id]);

  const showAllImages = () => {
    setShowAll(true);
  };

  return { imageUrls, showAll, showAllImages, error };
};