import { useGetAllCategories } from "../hooks/useGetAllCategories";
import { CategoryCheckBox } from "../components/CategoryCheckBox";
import "../styles/CategoryList.css";
import PropTypes from 'prop-types';

export const CategoryList = ({ selectedCategories, setSelectedCategories }) => {
  const { categories } = useGetAllCategories();

  const handleClick = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedCategories([...selectedCategories, Number(value)]);
    } else {
      setSelectedCategories(selectedCategories.filter((id) => id !== Number(value)));
    }
  };

  return (
    <aside className="category-aside">
      <div className="category-aside__content">
        <div className="category-aside__title">
          <p>Categorías</p>
        </div>
        {categories.map(category => (
          <CategoryCheckBox
            key={category.id}
            name={category.name}
            id={category.id}
            checked={selectedCategories.includes(category.id)}
            handleClick={handleClick}
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