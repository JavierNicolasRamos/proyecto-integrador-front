import { CharacteristicCard } from "./index";
import { useFetchAdminCharacteristicList } from "../hooks/index";
import "../styles/ProductList.css";

export const CharacteristicList = () => {
  
  const { characteristic, isFetching, handlerDelete } = useFetchAdminCharacteristicList();

  return (
    <div>
      <div className="adminProductList">
        <div>
          {characteristic.map(( characteristic ) => (
            <CharacteristicCard
              key={characteristic.id}
              id={characteristic.id}
              name={characteristic.name}
              handlerDelete={handlerDelete}
              characteristic={characteristic}
            />
          ))}
        </div>
      </div>
    </div>
  );
};