import "../styles/UserAccountPanel.css";
import { useUserAccountPanel } from "../hooks/index";
import { AccountData, BookingsList, Favorites } from "./index";

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
        <button onClick={() => {handleAccountBtn()}}>Cuenta</button>
        <button onClick={() => {handleBookingsBtn()}}>Mis Reservas</button>
        <button onClick={() => {handlefavoritesBtn()}}>Favoritos</button>
      </section>

      <section className="accountContent">
        {showAccountData && <AccountData />}
        {showBookings && <BookingsList />}
        {showFavs && <Favorites />}
      </section>
    </div>
  );
};
