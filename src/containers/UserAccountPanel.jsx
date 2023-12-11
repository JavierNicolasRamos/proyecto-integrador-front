import "../styles/UserAccountPanel.css";
import { useRedirectLogin, useUserAccountPanel } from "../hooks/index";
import { UserAccountData, UserBookingsList, UserFavs } from "./index";

export const UserAccountPanel = () => {
  const {
    showAccountData,
    handleAccountBtn,
    showBookings,
    handleBookingsBtn,
    showFavs,
    handlefavoritesBtn,
  } = useUserAccountPanel();

  const { handlerUserNotAllowed } = useRedirectLogin()

  return (
    <div className="accountPanel">
      {handlerUserNotAllowed()}
      <section className="accountButtons">
        <button className={showAccountData ? "selectedAccountButton" : ""} onClick={() => {handleAccountBtn()}}>Cuenta</button>
        <button className={showBookings ? "selectedAccountButton" : ""} onClick={() => {handleBookingsBtn()}}>Mis Reservas</button>
        <button className={showFavs ? "selectedAccountButton" : ""} onClick={() => {handlefavoritesBtn()}}>Favoritos</button>
      </section>

      <section className="accountContent">
        {showAccountData && <UserAccountData />}
        {showBookings && <UserBookingsList />}
        {showFavs && <UserFavs />}
      </section>
    </div>
  );
};
