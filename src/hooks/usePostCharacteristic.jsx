import { useState } from "react";
import { postCharacteristic } from "../services/Characteristic";

export const usePostCharacteristic = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    postCharacteristic(name, icon).finally(() => setIsFetching(false));
  };

  return { isFetching, name, setName, icon, setIcon, handleSubmit };
};
