import { useState } from "react";

export const useUserAccountPanel = () => {
  const [showAccountData, setShowAccountData] = useState(true);
  const [showBookings, setShowBookings] = useState(false);
  const [showFavs, setShowFavs] = useState(false);

  const handleAccountBtn = () => {
    setShowFavs(false);
    setShowBookings(false);
    setShowAccountData(true);
  };

  const handleBookingsBtn = () => {
    setShowFavs(false);
    setShowAccountData(false);
    setShowBookings(true);
  };

  const handlefavoritesBtn = () => {
    setShowBookings(false);
    setShowAccountData(false);
    setShowFavs(true);
  };

  return {
    showAccountData,
    handleAccountBtn,
    showBookings,
    handleBookingsBtn,
    showFavs,
    handlefavoritesBtn,
  };
};
