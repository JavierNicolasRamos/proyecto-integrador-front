import { useGetAllCategories } from "../hooks/useGetAllCategories";
import { CategoryCheckBox } from "../components/CategoryCheckBox";
import PropTypes from 'prop-types';
import "../styles/CategoryList.css";

export const CategoryList = ({ selectedCategories, setSelectedCategories }) => {
  const { categories } = useGetAllCategories();

  const handleCategoryChange = (categoryId, isChecked) => {
    if (isChecked) {
      setSelectedCategories(prevCategories => [...prevCategories, categoryId]);
    } else {
      setSelectedCategories(prevCategories => prevCategories.filter(id => id !== categoryId));
    }
  };

  const handleEraseFilter = () => {
    setSelectedCategories([]);
  }

  return (
    <aside className="category-aside">
      <div className="category-aside__content">
        <div className="category-aside__title">
          <p>Categorías</p>
          <img 
            src={selectedCategories.length === 0 ? "../src/images/filter.svg" : "../src/images/eraseFilter.svg"} 
            alt="" 
            onClick={selectedCategories.length !== 0 ? handleEraseFilter : undefined}
          />
        </div>
        {categories.map(category => (
          <CategoryCheckBox
            key={category.id}
            name={category.name}
            id={category.id}
            checked={selectedCategories.includes(category.id)}
            handleChange={(e) => handleCategoryChange(category.id, e.target.checked)}
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