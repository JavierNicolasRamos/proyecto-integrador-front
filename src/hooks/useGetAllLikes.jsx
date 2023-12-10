import { useEffect, useState } from "react";
import { getAllFavs } from "../services/index";

export const useGetAllLikes = () => {
  const email = sessionStorage.getItem("email");
  const [allLikes, setAllLikes] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const getAllLikes = async () => {
    const { data } = await getAllFavs(email);
    setAllLikes(data)
    setIsFetching(false);
  };

  useEffect(() => {
    getAllLikes();
  }, []);

  return { allLikes, isFetching };
};
