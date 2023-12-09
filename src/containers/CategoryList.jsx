import PropTypes from "prop-types";
import { CategoryCheckBox } from "../components/index";
import { useGetAllCategories } from "../hooks/index";
import "../styles/CategoryList.css";

const FILTER_IMAGE = "https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1701464018116-filter.svg";
const ERASE_FILTER_IMAGE = "https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1701464016895-eraseFilter.svg";
const FILTER_ALT = "Filter";
const ERASE_FILTER_ALT = "Erase Filter";

export const CategoryList = ({ selectedCategories, setSelectedCategories }) => {
  const { categories } = useGetAllCategories();

  const handlerCategoryChange = (id, checked) => {
    if (checked) {
      setSelectedCategories(prev => [...prev, id]);
    } else {
      setSelectedCategories(prev => prev.filter(categoryId => categoryId !== id));
    }
  };

  const handlerEraseFilter = () => {
    setSelectedCategories([]);
  }

  return (
    <aside className="category-aside">
      <div className="category-aside__content">
        <div className="category-aside__title">
          <p>Categorías</p>
          <img 
            src={selectedCategories.length === 0 ? FILTER_IMAGE : ERASE_FILTER_IMAGE} 
            alt={selectedCategories.length === 0 ? FILTER_ALT : ERASE_FILTER_ALT} 
            onClick={selectedCategories.length !== 0 ? handlerEraseFilter : undefined}
          />
        </div>
        {categories.map(({ id, name }) => (
          <CategoryCheckBox
            key={id}
            name={name}
            id={id}
            checked={selectedCategories.includes(id)}
            handlerChange={(e) => handlerCategoryChange(id, e.target.checked)}
          />
        ))}
      </div>
    </aside>
  );
};

CategoryList.propTypes = {
  selectedCategories: PropTypes.array.isRequired,
  setSelectedCategories: PropTypes.func.isRequired,
};