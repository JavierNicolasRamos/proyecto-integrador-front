import { useEffect, useState } from "react";
import { getAllUsers } from "../services/index";

export const useFetchAdminUserList = () => {
  const [users, setUsers] = useState([]);

  const jwt = sessionStorage.getItem("jwt");

  const fetchUser = () => {
    getAllUsers(jwt).then((users) => setUsers(users));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { users };
};
