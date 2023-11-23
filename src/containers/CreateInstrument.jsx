import { useFormCreateInstrument } from "../hooks/index";
import { ValidationError, ResultConfirmationDialog, Spinner } from "../components/index";
import "../styles/CreateInstrument.css";

export const CreateInstrument = () => {
  
  const {
    name,
    setName,
    detail,
    setDetail,
    handlerImageChange,
    showError,
    handlerSubmit,
    categories,
    selectedCategoryId,
    setSelectedCategoryId,
    showResult,
    resultContent,
    success,
    isFetching
  } = useFormCreateInstrument();

  return (
    <div className="createInstrumentPage">
      <section className="createInstrumentSection">
        <div className="createInstrument-title">
          <p>Agregar producto</p>
        </div>
        <form onSubmit={handlerSubmit}>
          <label htmlFor="name">Nombre del Instrumento</label>
          <input
            id="name"
            type="text"
            placeholder="Guitarra, Piano, Platillos"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="category">Categoría</label>
          <select
            id="category"
            name="category"
            value={selectedCategoryId}
            onChange={(e) => {
              setSelectedCategoryId(e.target.value);
            }}
          >
            <option value="">Seleccione una categoría</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>

          <label htmlFor="detail">Descripción</label>
          <textarea
            id="detail"
            type="text"
            placeholder="Guitarra eléctrica, marca, modelo"
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
              onChange={handlerImageChange}
            />
          </div>

          <input id="agregar" type="submit" value="Agregar" />
        </form>

        {isFetching && <Spinner/>}
        {showError && <ValidationError />}
        {showResult && <ResultConfirmationDialog
            success={success}
            resultContent={resultContent}
            actionDetail={"Agregar otro"}
            presentRoute={"/admin/instrument/create"}
          />}

      </section>
    </div>
  );
};
