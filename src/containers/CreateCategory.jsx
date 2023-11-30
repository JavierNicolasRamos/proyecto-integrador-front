import {
  ValidationError,
  Spinner,
  ResultConfirmationDialog,
} from "../components/index";
import { usePostCategory } from "../hooks/index";
import "../styles/CreateCategory.css";

export const CreateCategory = () => {
  const {
    isFetching,
    name,
    setName,
    detail,
    setDetail,
    setImage,
    handlerSubmit,
    showError,
    showResult,
    success,
    resultContent,
  } = usePostCategory();

  const handlerChange = (setter) => (e) => {
    setter(e.target.value);
  };

  return (
    <div className="createCategoryPage">
      <section className="createCategorySection">
        <div className="createCategory-title">
          <p>Agregar categoría</p>
        </div>
        <form onSubmit={handlerSubmit}>
          <label htmlFor="name">Título</label>
          <input
            id="name"
            type="text"
            placeholder="Ingresa el título de la categoría"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="detail">Descripción</label>
          <textarea
            id="detail"
            type="text"
            placeholder="Ingresa una descripción"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />

          <div className="uploadImages">
            <label htmlFor="images"></label>
            <input
              id="images"
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <button id="agregar" type="submit">
            Agregar
          </button>
        </form>

        {isFetching && <Spinner />}
        {showError && <ValidationError />}
        {showResult && (
          <ResultConfirmationDialog 
            success={success}
            resultContent={resultContent}
            actionDetail={"Agregar otra"}
            presentRoute={"/admin/category/create"}
            />

        )}
      </section>
    </div>
  );
};
