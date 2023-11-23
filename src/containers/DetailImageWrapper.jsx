import { Link } from "react-router-dom"
import { useState } from "react";
import PropTypes from 'prop-types';
import "../styles/DetailImageWrapper.css"

export const DetailImageWrapper = ({id, name, image}) => {

  const [newImage, setNewImage] = useState(image[0].image)

  const handleMouseEnterImage = (e) => {
    setNewImage(e.target.src)
  }

  const handleMouseLeaveImage = () =>{
    setNewImage(image[0].image)
  }

  return (
    <div className="image-wrapper">
      <div className="image-wrapper__first-image__container">
        <img 
          src={newImage} alt={name} 
          className="image-wrapper__first-image"
        />
      </div>
      <div className="small-images-container">
        <img
          src={image[1].image}
          alt="Small Image 1"
          className="small-image"
          onMouseEnter={handleMouseEnterImage}
          onMouseLeave={handleMouseLeaveImage}
        />
        <img
          src={image[2].image}
          alt="Small Image 2"
          className="small-image"
          onMouseEnter={handleMouseEnterImage}
          onMouseLeave={handleMouseLeaveImage}
        />
        <Link to={`/product/gallery/${id}`} className="LinkToGallery">
          <img
            src={image[3].image}
            alt="Small Image 3"
            className="small-image small-image-3"
            onMouseEnter={handleMouseEnterImage}
            onMouseLeave={handleMouseLeaveImage}
          />
        </Link>
      </div>
    </div>
  )
}

DetailImageWrapper.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.array.isRequired,
}