import { useGetAllCategories } from "../hooks/useGetAllCategories";
import { CategoryCheckBox } from "../components/CategoryCheckBox";
import "../styles/CategoryList.css";
import { useState } from "react";

export const CategoryList = () => {

  const { categories } = useGetAllCategories();
    
  const [categoriesArray, setCategoriesArray] = useState(new Array);
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    
    if (isChecked === true) {
      setChecked(false);
    } else {
      setChecked(true)
    }
  };

  const handleClick = (e) => {

    console.log(e.target.value)
    console.log(e.target.checked)

    if (e.target.checked === true) {
      setCategoriesArray([...categoriesArray, e.target.value])
    }

    console.log(categoriesArray)
  };

  return (
    <aside className="category-aside">
      <div className="category-aside__content">
        <div className="category-aside__title">
          <p>Categorías</p>
        </div>
          {categories.map(category => {
            return (
              <CategoryCheckBox
                key={category.id}
                name={category.name}
                id={category.id}
                checked={isChecked}
                handleCheckboxChange={handleCheckboxChange}
                handleClick={handleClick} />
            );
          })}
      </div>
    </aside>
  )
}
