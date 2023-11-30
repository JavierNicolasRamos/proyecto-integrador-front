import { UserCard } from "./index";
import { useFetchAdminUserList } from "../hooks/index";
import "../styles/ProductList.css";

export const UserList = () => {
  const { users } = useFetchAdminUserList();

  return (
    <div>
      <div className="adminProductList">
        <div>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};
