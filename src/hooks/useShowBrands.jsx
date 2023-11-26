import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useShowBrands = () => {
  const location = useLocation();
  const [showBrands, setShowBrands] = useState(true);

  useEffect(() => {
    const isHome = location.pathname === "/home";

    if (!isHome) {
      setShowBrands(false);
    } else {
      setShowBrands(true);
    }
  }, [location]);

  return showBrands;
};