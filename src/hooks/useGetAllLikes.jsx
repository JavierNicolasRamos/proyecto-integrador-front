import { useEffect, useState } from "react";
import { getAllFavs } from "../services/index";

export const useGetAllLikes = () => {
  const email = sessionStorage.getItem("email");
  const [allLikes, setAllLikes] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState()

  useEffect(() => {
    getAllFavs(email)
    .then((data)=>{
      console.log(data.data)
      setAllLikes(data)
    })
    .catch((e)=>{
      setError(e)
    });
  }, []);

  return { allLikes, isFetching };
};
