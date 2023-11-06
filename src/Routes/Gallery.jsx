import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GalleryGridItem } from "../components/GalleryGridItem";
import axios from "axios";
import "../styles/Gallery.css";

export const Gallery = () => {
  const { id } = useParams();

  const [imageUrls, setImageUrls] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8001/instrumentos/${id}`
        );
        if (response.status === 200) {
          const instrumentData = response.data;
          const filteredImages = instrumentData.imagen
            .filter((image) => !image.eliminado)
            .map((image) => image.imagen);

          setImageUrls(filteredImages);
        } else {
          console.error("La solicitud a la API no fue exitosa");
        }
      } catch (error) {
        console.error("Error al obtener datos de la API:", error);
      }
    };

    fetchImages();
  }, [id]);

  const showAllImages = () => {
    setShowAll(true);
  };

  return (
    <div className="gallery-container">
      <div className="main-image">
        <img src={imageUrls[0]} alt="First Image" />
      </div>
      <div className="image-grid">
        {imageUrls.slice(1, 5).map((url, index) => (
          <GalleryGridItem
            showAll={showAll}
            index={index}
            key={index}
            onClick={showAllImages}
          >
            <img src={url} alt={`Imagen ${index + 2}`} />
          </GalleryGridItem>
        ))}
      </div>
      {!showAll ? null : (
        <div className="additional-images">
          {imageUrls.slice(5).map((url, index) => (
            <div key={index} className="grid-item">
              <img src={url} alt={`Imagen ${index + 6}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
