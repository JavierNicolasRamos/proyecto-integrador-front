import { useState, useEffect } from 'react';

export const useAvatar = (user) => {
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    const nameFirstLetter = user.nombre.slice(0, 1);
    const lastNameFirstLetter = user.apellido.slice(0, 1);
    setAvatar(`${nameFirstLetter}${lastNameFirstLetter}`);
  }, [user]);

  return avatar;
};