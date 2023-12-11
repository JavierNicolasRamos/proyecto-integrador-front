import { getUserByEmail } from "../services";
import { useState, useEffect } from "react";

export const useUserAccountData = () => {
  const [user, setUser] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  const email = sessionStorage.getItem("email");
  const avatar = sessionStorage.getItem("avatar");

  const getUserData = async () => {
    const { data } = await getUserByEmail(email);
    setUser(data);
    setIsFetching(false);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return { user, avatar, isFetching };
};
