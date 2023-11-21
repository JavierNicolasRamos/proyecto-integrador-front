import PropTypes from "prop-types";
import "../styles/CategoryCard.css";

export const CategoryCard = ({ name, image }) => {
  const backgroundImageStyle = {
    backgroundImage: image ? `url(${image.image})` : "none",
  };

  return (
    <div className="category-card" style={backgroundImageStyle}>
      <h1>{name}</h1>
    </div>
  );
};

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.shape({
    image: PropTypes.string,
  }),
};
