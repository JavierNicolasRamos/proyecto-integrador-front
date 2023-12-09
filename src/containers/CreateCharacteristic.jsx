import { usePostCharacteristic, useRedirectLogin } from "../hooks/index";
import { ValidationError, Spinner, ResultConfirmationDialog } from "../components/index";
import "../styles/CreateCharacteristic.css";

export const CreateCharacteristic = () => {
  const {
    isFetching,
    name,
    setName,
    icon,
    handlerSubmit,
    showError,
    showResult,
    success,
    resultContent,
    icons,
    handlerIconSelection,
  } = usePostCharacteristic();

  const { handlerUserNotAllowed } = useRedirectLogin()

  return (
    <div className="createCharacteristicPage">
      { handlerUserNotAllowed() }
      <section className="createCharacteristicSection">
        <div className="createCharacteristic-title">
          <p>Agregar característica</p>
        </div>
        <form onSubmit={handlerSubmit}>
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
                onClick={handlerIconSelection}
              />
            ))}
          </div>

          {icon ? <label className="selected-icon-label" htmlFor="iccon">Icono seleccionado:</label> : null }

          <img className="selected-icon" src={icon} alt={icon ? "icon" : ""} />

          <input id="agregar" type="submit" value="Agregar" />
        </form>

        {isFetching && <Spinner />}
        {showError && <ValidationError message="Asegúrate de seleccionar un Icono, y que el Nombre tenga al menos 3 caracteres." />}
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
