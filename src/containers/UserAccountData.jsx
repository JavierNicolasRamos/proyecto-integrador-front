import { useUserAccountData } from "../hooks/index";
import "../styles/UserAccountData.css";
import { Spinner } from "../components";

export const UserAccountData = () => {

  const { user, avatar, isFetching } = useUserAccountData()

  return (
    <section className="accountData">
      {isFetching && <Spinner />}
      <div className="accountDataTitleContainer">
        <div className="accountDataTitle">Nombre</div>
        <div className="accountDataTitle">Apellido</div>
        <div className="accountDataTitle">Mail</div>
      </div>
      <div className="accountDataContentContainer">
        <div className="accountDataContent">{user.name}</div>
        <div className="accountDataContent">{user.surname}</div>
        <div className="accountDataContent">{user.email}</div>
      </div>
      <div className="accountInitials">{avatar}</div>
    </section>
  );
};
