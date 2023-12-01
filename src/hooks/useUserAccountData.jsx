import { getUserByEmail } from "../services";
import { useState, useEffect } from "react";

export const useUserAccountData = () => {
  const [user, setUser] = useState({});

  const email = sessionStorage.getItem("email");
  const jwt = sessionStorage.getItem("jwt");
  const avatar = sessionStorage.getItem("avatar");

  const getUserData = async () => {
    const { data } = await getUserByEmail(email, jwt);
    setUser(data);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return { user, avatar };
};
