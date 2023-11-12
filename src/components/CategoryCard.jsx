import PropTypes from "prop-types";
import "../styles/CategoryCard.css";

export const CategoryCard = ({ name, image }) => {
  const imageUrl = image && image.image;

  const backgroundImageStyle = {
    backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
  };

  return (
    <div className="category-card" style={backgroundImageStyle}>
      <h1>{name}</h1>
    </div>
  );
};

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
