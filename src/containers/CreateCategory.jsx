import { ValidationError, Spinner, ResultConfirmationDialog } from "../components/index";
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
    handleSubmit,
    showError,
    showResult,
    success,
    resultContent,
  } = usePostCategory();

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  return (
    <div className="createCategoryPage">
      <section className="createCategorySection">
        <div className="createCategory-title">
          <p>Agregar categoría</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Título</label>
          <input
            id="name"
            type="text"
            placeholder="Ingresa el título de la categoría"
            value={name}
            onChange={handleChange(setName)}
          />

          <label htmlFor="detail">Descripción</label>
          <textarea
            id="detail"
            type="text"
            placeholder="Ingresa una descripción"
            value={detail}
            onChange={handleChange(setDetail)}
          />

          <div className="uploadImages">
            <label htmlFor="images"></label>
            <input
              id="images"
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => setImage(e.target.files)}
            />
          </div>

          <button type="submit">Agregar categoría</button>
        </form>
      </section>
      {isFetching && <Spinner />}
      {showError && <ValidationError />}
      {showResult && (
        <ResultConfirmationDialog success={success}>
          {resultContent}
        </ResultConfirmationDialog>
      )}
    </div>
  );
};