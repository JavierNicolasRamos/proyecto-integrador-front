import "../styles/UserAccountPanel.css";
import { useUserAccountPanel } from "../hooks/index";
import { UserAccountData, UserBookingsList, UserFavorites } from "./index";

export const UserAccountPanel = () => {
  const {
    showAccountData,
    handleAccountBtn,
    showBookings,
    handleBookingsBtn,
    showFavs,
    handlefavoritesBtn,
  } = useUserAccountPanel();

  return (
    <div className="accountPanel">
      <section className="accountButtons">
        <button className={showAccountData ? "selectedAccountButton" : ""} onClick={() => {handleAccountBtn()}}>Cuenta</button>
        <button className={showBookings ? "selectedAccountButton" : ""} onClick={() => {handleBookingsBtn()}}>Mis Reservas</button>
        <button className={showFavs ? "selectedAccountButton" : ""} onClick={() => {handlefavoritesBtn()}}>Favoritos</button>
      </section>

      <section className="accountContent">
        {showAccountData && <UserAccountData />}
        {showBookings && <UserBookingsList />}
        {showFavs && <UserFavorites />}
      </section>
    </div>
  );
};
