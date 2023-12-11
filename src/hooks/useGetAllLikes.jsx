import { useEffect, useState } from "react";
import { getAllFavs } from "../services/index";

export const useGetAllLikes = () => {
  const email = sessionStorage.getItem("email");
  const jwt = sessionStorage.getItem("jwt");
  const [allLikes, setAllLikes] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const getAllLikes = async () => {
    const { data } = await getAllFavs(email, jwt);
    setAllLikes(data)
    setIsFetching(false);
  };

  useEffect(() => {
    getAllLikes(email)
  }, []);

  return { allLikes, isFetching };
};
