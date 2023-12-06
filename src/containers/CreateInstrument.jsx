import { useFormCreateInstrument, useRedirectLogin } from "../hooks/index";
import {
  ValidationError,
  ResultConfirmationDialog,
  Spinner,
} from "../components/index";
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
    success,
    resultContent,
    isFetching,
    characteristics,
    checkedCharacteristics,
    handleCheckboxChange,
  } = useFormCreateInstrument();

  const { handlerUserNotAllowed } = useRedirectLogin()

  return (
    <div className="createInstrumentPage">
      { handlerUserNotAllowed() }
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


            <label htmlFor="characteristics">Caracteristicas (opcional):</label>
            {characteristics.map((option) => (
              <div key={option.id}>
                <label className="characteristicOption">
                  <input
                    type="checkbox"
                    name={option.name}
                    checked={checkedCharacteristics.some(
                      (item) => item.id === option.id
                    )}
                    onChange={(event) => handleCheckboxChange(event, option)}
                  />
                  <img src={option.icon} alt={option.name} />
                  {option.name}
                </label>
              </div>
            ))}


          <input id="agregar" type="submit" value="Agregar" />
        </form>

        {isFetching && <Spinner />}
        {showError && <ValidationError />}
        {showResult && (
          <ResultConfirmationDialog
            success={success}
            resultContent={resultContent}
            actionDetail={"Agregar otro"}
            presentRoute={"/admin/instrument/create"}
          />
        )}
      </section>
    </div>
  );
};
