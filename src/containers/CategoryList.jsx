import { useGetAllCategories } from "../hooks/useGetAllCategories";
import { CategoryCheckBox } from "../components/CategoryCheckBox";
import "../styles/CategoryList.css";
import PropTypes from 'prop-types';

export const CategoryList = ({ selectedCategories, setSelectedCategories }) => {
  const { categories } = useGetAllCategories();

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCategories([...selectedCategories, Number(value)]);
    } else {
      setSelectedCategories(selectedCategories.filter((id) => id !== Number(value)));
    }
  };

  const handleEraseFilter = () => {
    setSelectedCategories([])
  }

  return (
    <aside className="category-aside">
      <div className="category-aside__content">
        <div className="category-aside__title">
          <p>Categorías</p>
          {
            selectedCategories.length === 0
            ? <img src="../src/images/filter.svg" alt="" />
            : <img 
                src="../src/images/eraseFilter.svg" alt=""
                onClick={handleEraseFilter} 
              />
          }
        </div>
        {categories.map(category => (
          <CategoryCheckBox
            key={category.id}
            name={category.name}
            id={category.id}
            checked={selectedCategories.includes(category.id)}
            handleChange={handleChange}
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