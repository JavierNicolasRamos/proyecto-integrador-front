import { useEffect, useState } from "react";
import { getCharacteristic, deleteCharacteristic } from "../services/index";

export const useFetchAdminCharacteristicList = () => {
  const [characteristic, setCharacteristic] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const jwt = sessionStorage.getItem("jwt");

  const fetchCharacteristic = () => {
    getCharacteristic(jwt)
      .then((characteristic) => setCharacteristic(characteristic))
      .finally(() => setIsFetching(false));
  };

  useEffect(() => {
    fetchCharacteristic();
  }, []);

  // Delete handler
  const handlerDelete = (id) => {
    deleteCharacteristic(id, jwt).then(() => {
      fetchCharacteristic();
    });
  };

  return { characteristic, isFetching, handlerDelete };
};
