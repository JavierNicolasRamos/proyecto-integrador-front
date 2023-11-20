import { useFormPutInstrument } from "../hooks/useFormPutInstrument";
import { ValidationError } from "../components/ValidationError";
import { ResultConfirmationDialog } from "../components/ResultConfirmationDialog";
import "../styles/CreateInstrument.css";
import { Spinner } from "../components/Spinner";

export const PutInstrument = (presentInstrument) => {
  
  const {
    name,
    setName,
    detail,
    setDetail,
    handleImageChange,
    showError,
    handleSubmit,
    categories,
    selectedCategoryId,
    setSelectedCategoryId,
    showResult,
    resultContent,
    success,
    isFetching
  } = useFormPutInstrument(presentInstrument);

  return (
    <div className="createInstrumentPage">
      <section className="createInstrumentSection">
        <div className="createInstrument-title">
          <p>Editar instrumento</p>
        </div>
        <form onSubmit={handleSubmit}>
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
            <option value="">Categoría actual: {presentInstrument.presentInstrument.category.name}. Seleccione para cambiar:</option>
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
              onChange={handleImageChange}
            />
          </div>

          <input id="agregar" type="submit" value="Agregar" />
        </form>

        {isFetching && <Spinner/>}
        {showError && <ValidationError />}
        {showResult && <ResultConfirmationDialog
            success={success}
            resultContent={resultContent}
            actionDetail={"Editar otro"}
            presentRoute={"/admin/instrument/list"}
          />}

      
        
      </section>
    </div>
  );
};
