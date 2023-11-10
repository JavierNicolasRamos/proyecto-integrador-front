import { usePostCharacteristic } from "../hooks/usePostCharacteristic";
import "../styles/CreateCharacteristic.css";

export const CreateCharacteristic = () => {
  const { /*isFetching, */ name, setName, icon, setIcon, handleSubmit } =
    usePostCharacteristic();

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
      </section>
    </div>
  );
};
