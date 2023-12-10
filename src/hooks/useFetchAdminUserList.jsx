import { useEffect, useState } from "react";
import { getAllUsers } from "../services/index";

export const useFetchAdminUserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUser = () => {
    getAllUsers().then((users) => setUsers(users));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { users };
};
