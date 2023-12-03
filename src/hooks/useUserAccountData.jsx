import { getUserByEmail } from "../services";
import { useState, useEffect } from "react";

export const useUserAccountData = () => {
  const [user, setUser] = useState({});
  const [isFetching, setIsFetching] = useState(true);
  const [favs, SetFavs] = useState([]);

  const email = sessionStorage.getItem("email");
  const jwt = sessionStorage.getItem("jwt");
  const avatar = sessionStorage.getItem("avatar");

  const getUserData = async () => {
    const { data } = await getUserByEmail(email, jwt);
    setUser(data);
    SetFavs(data.favourites)
    setIsFetching(false);
  };

  useEffect(() => {
    getUserData();
  }, []);

  console.log("user desde el hook", user)
  
  return { user, avatar, isFetching, favs};
};
