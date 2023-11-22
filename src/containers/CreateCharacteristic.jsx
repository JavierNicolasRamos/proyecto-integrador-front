import { usePostCharacteristic } from "../hooks/index";
import { ValidationError, Spinner, ResultConfirmationDialog } from "../components/index";
import "../styles/CreateCharacteristic.css";

export const CreateCharacteristic = () => {
  const {
    isFetching,
    name,
    setName,
    icon,
    setIcon,
    handleSubmit,
    showError,
    showResult,
    success,
    resultContent,
    icons,
    handleIconSelection,
  } = usePostCharacteristic();

  return (
    <div className="createCharacteristicPage">
      <section className="createCharacteristicSection">
        <div className="createCharacteristic-title">
          <p>Agregar característica</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            type="text"
            placeholder="Ingresa el nombre de la característica"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="iccon">Selecciona un icono:</label>
          <div className="icons-container">
                        {icons.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt="Icon"
                className="Icon"
                onClick={handleIconSelection}
              />
            ))}
          </div>

          {icon ? <label className="selected-icon-label" htmlFor="iccon">Icono seleccionado:</label> : null }

          <img className="selected-icon" src={icon} alt={icon ? "icon" : ""} />

          <input id="agregar" type="submit" value="Agregar" />
        </form>

        {isFetching && <Spinner />}
        {showError && <ValidationError />}
        {showResult && (
          <ResultConfirmationDialog
            success={success}
            resultContent={resultContent}
            actionDetail={"Agregar otra"}
            presentRoute={"/admin/characteristic/create"}
          />
        )}
      </section>
    </div>
  );
};
