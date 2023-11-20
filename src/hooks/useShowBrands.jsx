import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useShowBrands = () => {
  const location = useLocation();
  const [showBrands, setShowBrands] = useState(true);

  useEffect(() => {
    const isLogin = location.pathname === "/login";
    const isRegister = location.pathname === "/register";

    if (isLogin || isRegister) {
      setShowBrands(false);
    } else {
      setShowBrands(true);
    }
  }, [location]);

  return showBrands;
};