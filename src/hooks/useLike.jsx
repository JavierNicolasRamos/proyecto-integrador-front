import { useState } from 'react';
import { postFav } from '../services/index';
import { useUser } from '../context/UserContext';

export const useLike = (id) => {

  const [like, setLike] = useState(false)
  const idProducto = id
  const { jwt, email } = useUser()


  const handlerClickLike = () => {
    if (!like) {
      setLike(!like);
      postFav(idProducto, email, jwt)
        .then((data) => {
          //no puedo evitar que haga el post si el producto existe
        })
        .catch((error) => {
          console.error('Error en postFav:', error);
        });
    }
  };

  return { handlerClickLike, like, setLike };
}