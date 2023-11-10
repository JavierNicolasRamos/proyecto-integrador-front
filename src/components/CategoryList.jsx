import { useGetCategories } from "../hooks/useFetchCategories";
import { CategoryCheckBox } from "./CategoryCheckBox";
import "../styles/CategoryList.css";

export const CategoryList = () => {
  const {categories} = useGetCategories();

  return (
    <aside className="category-aside">
      <div className="category-aside__content">
        <div className="cateogry-aside__title">
          <p>Categorías</p>
        </div>
          {categories.map(category => (
            <CategoryCheckBox 
            key={category.id}
            name={category.name}
            />
          ))}
      </div>
    </aside>
  )
}
