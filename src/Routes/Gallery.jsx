import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Gallery.css";

const Gallery = () => {
  const { id } = useParams();

  const [visibleImages, setVisibleImages] = useState(5);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imagesById = {
        1: [
          "https://cdn2.thecatapi.com/images/1dm.png",
          "https://cdn2.thecatapi.com/images/4m7.jpg",
          "https://cdn2.thecatapi.com/images/ars.jpg",
          "https://cdn2.thecatapi.com/images/ble.jpg",
          "https://cdn2.thecatapi.com/images/cgi.png",
          "https://cdn2.thecatapi.com/images/d0q.jpg",
          "https://cdn2.thecatapi.com/images/MTUwNTA1Mw.jpg",
          "https://cdn2.thecatapi.com/images/MjA5MDM3OQ.jpg",
          "https://cdn2.thecatapi.com/images/g1j3wRjgx.jpg",
          "https://cdn2.thecatapi.com/images/_I3nlhPtP.jpg",
          "https://cdn2.thecatapi.com/images/ble.jpg",
          "https://cdn2.thecatapi.com/images/cgi.png",
          "https://cdn2.thecatapi.com/images/d0q.jpg",
        ],
      };

      setImageUrls(imagesById[id]);
    };

    fetchImages();
  }, [id]);

  const showAllImages = () => {
    setVisibleImages(imageUrls.length);
  };

  return (
    <div className="gallery-container">
      <div className="main-image">
        <img src={imageUrls[0]} alt="First Image" />
      </div>
      <div className="image-grid">
        {imageUrls.slice(1, 5).map((url, index) => (
          <div key={index} className="grid-item">
            <img src={url} alt={`Imagen ${index + 2}`} />
          </div>
        ))}
      </div>
      {visibleImages < imageUrls.length ? (
        <div className="view-more" onClick={showAllImages}>
          Ver más
        </div>
      ) : (
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

export default Gallery;
