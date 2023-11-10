import PropTypes from 'prop-types';
import "../styles/CategoryCard.css";

export const CategoryCard = ({name/*, image*/}) => {
  return (
    <div className="category-card">

        <h1>{name}</h1>

    </div>
  )
}

//TODO: Decidir si esto se queda o se va

// export const CategoryCard = ({name, image}) => {
//   return (
//     <div className="category-card">

//         <h1>{name}</h1>
//         <img src={image} alt={name}/>

//     </div>
//   )
// }

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};