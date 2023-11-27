import { useState, useEffect } from 'react';

export const useAvatar = (user) => {

  const [avatar, setAvatar] = useState();

  useEffect(() => {
    if (user.name == null || user.surname == null) {
      return;
    }
      const nameFirstLetter = user.name.slice(0, 1);
      const lastNameFirstLetter = user.surname.slice(0, 1);
      setAvatar(`${nameFirstLetter}${lastNameFirstLetter}`);
  }, [user]);

  return {avatar, setAvatar};
};