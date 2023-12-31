import { CharacteristicCard } from "./index";
import { useFetchAdminCharacteristicList, useRedirectLogin } from "../hooks/index";
import "../styles/ProductList.css";

export const CharacteristicList = () => {
  const {
    characteristics,
    isFetching,
    handlerDelete,
    showResult,
    success,
    resultContent,
  } = useFetchAdminCharacteristicList();

  const { handlerUserNotAllowed } = useRedirectLogin()

  return (
    <div>
      { handlerUserNotAllowed() }
      <div className="adminProductList">
        <div>
          {characteristics.map((characteristic) => (
            <CharacteristicCard
              key={characteristic.id}
              id={characteristic.id}
              name={characteristic.name}
              handlerDelete={handlerDelete}
              characteristic={characteristic}
              isFetching={isFetching}
              showResult={showResult}
              success={success}
              resultContent={resultContent}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
