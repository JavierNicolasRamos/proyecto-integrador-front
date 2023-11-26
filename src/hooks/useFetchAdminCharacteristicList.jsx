import { useEffect, useState } from "react";
import { getCharacteristic, deleteCharacteristic } from "../services/index";

export const useFetchAdminCharacteristicList = () => {
  const [characteristics, setCharacteristics] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const jwt = sessionStorage.getItem("jwt");

  const fetchCharacteristic = () => {
    getCharacteristic(jwt)
      .then((characteristics) => setCharacteristics(characteristics))
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

  return { characteristics, isFetching, handlerDelete };
};
