import { useState } from 'react';

export const useUserMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuMouseLeave = () => {
    setShowMenu(false);
  };

  return { showMenu, handleMenu, handleMenuMouseLeave };
};