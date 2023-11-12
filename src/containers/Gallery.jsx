import { useParams } from "react-router-dom";
import { GalleryGridItem } from "../components/index";
import { useGallery } from "../hooks/index";
import "../styles/Gallery.css";

export const Gallery = () => {
  const { id } = useParams();
  const { imageUrls, showAll, showAllImages } = useGallery(id);

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
