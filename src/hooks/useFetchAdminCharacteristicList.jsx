import { useEffect, useState } from "react";
import { getCharacteristic, deleteCharacteristic } from "../services/index";

export const useFetchAdminCharacteristicList = () => {
  const [characteristics, setCharacteristics] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [success, setSuccess] = useState(false);
  const [resultContent, setResultContent] = useState("");

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
  const handlerDelete = async (id) => {
    const { data, status } = await deleteCharacteristic(id, jwt);

    if (status === 200) {
      setIsFetching(false);
      setSuccess(true);
      setResultContent(`La característica ha sido eliminada correctamente`);
      setShowResult(true);
    } else {
      setIsFetching(false);
      setSuccess(false);
      setResultContent(
        `Ha ocurrido un error. ${
          data
            ? data
            : "Asegúrese de estar logueado como administrador para efectuar esta acción"
        }`
      );
      setShowResult(true);
    }

    fetchCharacteristic();
  };

  return {
    characteristics,
    isFetching,
    handlerDelete,
    showResult,
    success,
    resultContent,
  };
};
