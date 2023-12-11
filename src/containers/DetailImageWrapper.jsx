import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import "../styles/DetailImageWrapper.css"

export const DetailImageWrapper = ({id, name, image}) => {

  const [newImage, setNewImage] = useState(image[0].image)

  useEffect(() => {
    setNewImage(image[0].image)
  }, [image, id])

  const handlerMouseEnterImage = (e) => {
    setNewImage(e.target.src)
  }

  const handlerMouseLeaveImage = () =>{
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
          onMouseEnter={handlerMouseEnterImage}
          onMouseLeave={handlerMouseLeaveImage}
        />
        <img
          src={image[2].image}
          alt="Small Image 2"
          className="small-image"
          onMouseEnter={handlerMouseEnterImage}
          onMouseLeave={handlerMouseLeaveImage}
        />
        <Link to={`/product/gallery/${id}`} className="LinkToGallery">
          <img
            src={image[3].image}
            alt="Small Image 3"
            className="small-image small-image-3"
            onMouseEnter={handlerMouseEnterImage}
            onMouseLeave={handlerMouseLeaveImage}
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