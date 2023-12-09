import { useFormPutInstrument } from "../hooks/index";
import {
  ValidationError,
  ResultConfirmationDialog,
  Spinner,
} from "../components/index";
import "../styles/CreateInstrument.css";

export const PutInstrument = (presentInstrument) => {
  const {
    name,
    setName,
    detail,
    setDetail,
    showError,
    handlerSubmit,
    categories,
    selectedCategoryId,
    setSelectedCategoryId,
    showResult,
    success,
    resultContent,
    isFetching,
    characteristics,
    checkedCharacteristics,
    handleCheckboxChange,
  } = useFormPutInstrument(presentInstrument);

  return (
    <div className="createInstrumentPage">
      <section className="createInstrumentSection">
        <div className="createInstrument-title">
          <p>Editar instrumento</p>
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
            <option value="">
              {presentInstrument.presentInstrument.category.name}. Seleccione
              para cambiar:
            </option>
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

<label htmlFor="characteristics">Caracteristicas (opcional):</label>
          {characteristics.map((option) => (
            <div key={option.id}>
              <label className="characteristicOption">
                <input
                  type="checkbox"
                  name={option.name}
                  checked={checkedCharacteristics.some((item) => item.id === option.id)}
                  onChange={(event) => handleCheckboxChange(event, option)}
                />
                <img src={option.icon} alt={option.name} />
                {option.name}
              </label>
            </div>
          ))}

          <input id="agregar" type="submit" value="Editar" />
        </form>

        {isFetching && <Spinner />}
        {showError && <ValidationError message="Asegúrate que el Nombre y la Descripción tengan al menos 3 y 10 caracteres respectivamente." />}
        {showResult && (
          <ResultConfirmationDialog
            success={success}
            resultContent={resultContent}
            actionDetail={"Volver al listado"}
            presentRoute={"/admin/instrument/list"}
          />
        )}
      </section>
    </div>
  );
};
