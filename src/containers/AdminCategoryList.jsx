import { Link } from "react-router-dom";
import { useFetchAdminCategoryList } from "../hooks/index";
import { CategoryCard } from "../components/index";
import "../styles/AdminCategoryList.css";

const CREATE_CATEGORY_URL = "/admin/category/create";

export const AdminCategoryList = () => {
  const {
    category,
    isFetching,
    handlerDelete,
    showResult,
    success,
    resultContent,
  } = useFetchAdminCategoryList();

  return (
    <div className="admin-categoryList-grid">
      {category.map(({ id, name, image }) => (
        <CategoryCard
          key={id}
          id={id}
          name={name}
          image={image}
          handlerDelete={handlerDelete}
          isFetching={isFetching}
          showResult={showResult}
          success={success}
          resultContent={resultContent}
        />
      ))}
      <Link to={CREATE_CATEGORY_URL} className="addCategoryCard">
        <div>
          <p>+</p>
          <h1>Agregar Categoría</h1>
        </div>
      </Link>
    </div>
  );
};
