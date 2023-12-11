import { useUserAccountData } from "../hooks/index";
import { HeaderProfile, Spinner } from "../components";
import "../styles/UserAccountData.css";

export const UserAccountData = () => {

  const { user, isFetching } = useUserAccountData()
  console.log(user)

  return (
    <section className="accountData">
      {isFetching && <Spinner />}
      <div className="accountDataTitleContainer">
        <div className="accountDataTitle">Nombre:</div>
        <div className="accountDataTitle">Apellido:</div>
        <div className="accountDataTitle">Mail:</div>
        <div className="accountDataTitle">Prefijo:</div>
        <div className="accountDataTitle">Telefono:</div>
      </div>
      <div className="accountDataContentContainer">
        <div className="accountDataContent">{user.name}</div>
        <div className="accountDataContent">{user.surname}</div>
        <div className="accountDataContent">{user.email}</div>
        <div className="accountDataContent">{user.prefix}</div>
        <div className="accountDataContent">{user.phone}</div>
      </div>
      <div className="accountInitials"><HeaderProfile/></div>
    </section>
  );
};
