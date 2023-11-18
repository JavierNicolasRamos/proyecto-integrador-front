import { usePostCharacteristic } from "../hooks/index";
import "../styles/CreateCharacteristic.css";
import { CreateInstrumentError } from "./CreateInstrumentError";
import { ResultConfirmationDialog } from "./ResultConfirmationDialog";

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

          <label htmlFor="icon">Selecciona un ícono</label>
          <textarea
            id="icon"
            type="text"
            placeholder=""
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
          />

          <input id="agregar" type="submit" value="Agregar" />
        </form>
        {isFetching && <p>CARGANDOOOOOOOOOOOOOOOooooooooooooooooooooooooooooooooooooooooooooooooO</p>}
        {showError && <CreateInstrumentError />}
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
