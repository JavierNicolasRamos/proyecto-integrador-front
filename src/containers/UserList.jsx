import { UserCard } from "./index";
import { useFetchAdminUserList } from "../hooks/index";
import "../styles/ProductList.css";

export const UserList = () => {
  const { users } = useFetchAdminUserList();

  return (
    <div>
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
