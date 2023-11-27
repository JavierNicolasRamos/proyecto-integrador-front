import { ValidationError, ResultConfirmationDialog , Spinner} from "../components/index";
import "../styles/CreateCharacteristic.css";
import { useFormPutCharacteristic } from "../hooks/index";

export const PutCharacteristic = (presentCharacteristic) => {
  
  const {
    name,
    setName,
    icon,
    handlerIconSelection,
    showError,
    handlerSubmit,
    showResult,
    success,
    resultContent,
    icons,
    isFetching
  } = useFormPutCharacteristic(presentCharacteristic);
  

  return (
    <div className="createCharacteristicPage">
      <section className="createCharacteristicSection">
        <div className="createCharacteristic-title">
          <p>Editar característica</p>
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

          <input id="agregar" type="submit" value="Editar" />
        </form>

        {isFetching && <Spinner />}
        {showError && <ValidationError />}
        {showResult && (
          <ResultConfirmationDialog
            success={success}
            resultContent={resultContent}
            actionDetail={"Volver al listado"}
            presentRoute={"/admin/characteristic/list"}
          />
        )}
      </section>
    </div>
  );
};
