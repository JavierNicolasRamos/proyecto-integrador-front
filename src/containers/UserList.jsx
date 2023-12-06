import { UserCard } from "./index";
import { useFetchAdminUserList, useRedirectLogin } from "../hooks/index";
import "../styles/ProductList.css";

export const UserList = () => {

  const { users } = useFetchAdminUserList();
  const { handlerUserNotAllowed } = useRedirectLogin()

  return (
    <div>
      { handlerUserNotAllowed() }
      <div className="adminProductList">
        <div>
          {users
            .slice() 
            .sort((a, b) => a.surname.localeCompare(b.surname)) 
            .map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
        </div>
      </div>
    </div>
  );
  
};
