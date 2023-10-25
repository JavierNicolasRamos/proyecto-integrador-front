import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/Gallery.css";

const Gallery = () => {
  const { id } = useParams();

  const [visibleImages, setVisibleImages] = useState(5);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imagesById = {
        1: [
          "https://usa.yamaha.com/files/pac600_overview_1d998116e48b4ba9f87717288c74bfef.jpg",
          "https://usa.yamaha.com/files/pac311_overview_224e51341f2fd071c882ecd3f39b81e2.jpg",
          "https://usa.yamaha.com/files/pac200_overview_b5fe8844c7f2ebcd209439a9cfb2c153.jpg",
          "https://usa.yamaha.com/files/pac100_overview_2741e8724d3d6a410013382615b5658f.jpg",
          "https://usa.yamaha.com/files/pac600_feature_01_a28ed48770d6fcf6d2c0f3ab628083a2.jpg",
          "https://usa.yamaha.com/files/pac600_feature_02_16cd12297a99cde3c125bdcf0130422b.jpg",
          "https://usa.yamaha.com/files/pac600_feature_03_2756a9d7f32a99f68a8db3fc333aa163.jpg",
          "https://usa.yamaha.com/files/pac600_feature_04_d5f2cfbbc2ac21a390cd8409f0f17d2c.jpg",
          "https://usa.yamaha.com/files/pac600_feature_05_fa171ffbd7ca094697c219623c8e4747.jpg",
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
