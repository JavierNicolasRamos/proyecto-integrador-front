import { useUserAccountData } from "../hooks/index";

export const UserAccountData = () => {

  const { user, avatar } = useUserAccountData()

  return (
    <section className="accountData">
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
      <div className="AccountInitials">{avatar}</div>
    </section>
  );
};
