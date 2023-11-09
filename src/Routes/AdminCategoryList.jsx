import { useFetchAdminCategoryList } from "../hooks/index";
import { CategoryCard } from "../components/CategoryCard";
import "../styles/AdminCategoryList.css";
import { Link } from "react-router-dom";

export const AdminCategoryList = () => {
  const { category/*, isFetching*/ } = useFetchAdminCategoryList();

  return (
    <div className="admin-categoryList-grid">
      {category.map((item) => (
        <CategoryCard key={item.id} name={item.name} image={item.image} />
      ))}
      <Link to={"/admin/category/create"} className="addCategoryCard">
        <div>
          <p>+</p>
          <h1>Agregar Categoría</h1>
        </div>
      </Link>
    </div>
  );
};
