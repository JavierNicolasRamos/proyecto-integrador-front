import { useFormCreateInstrument } from "../hooks/index";
import { CreateInstrumentError } from "../components/index";
import { ResultConfirmationDialog } from "../components/ResultConfirmationDialog";
import "../styles/CreateInstrument.css";

export const CreateInstrument = () => {
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
  } = useFormCreateInstrument();

  return (
    <div className="createInstrumentPage">
      <section className="createInstrumentSection">
        <div className="createInstrument-title">
          <p>Agregar producto</p>
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
              onChange={handleImageChange}
            />
          </div>

          <input id="agregar" type="submit" value="Agregar" />
        </form>

        {showError && <CreateInstrumentError />}

        
          <ResultConfirmationDialog
            success={success}
            resultContent={resultContent}
            showResult={showResult}
          />
        
      </section>
    </div>
  );
};
