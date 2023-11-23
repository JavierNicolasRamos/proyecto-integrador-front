import { useState } from 'react';

export const useUserMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handlerMenu = () => {
    setShowMenu(!showMenu);
  };

  const handlerMenuMouseLeave = () => {
    setShowMenu(false);
  };

  return { showMenu, handlerMenu, handlerMenuMouseLeave };
};