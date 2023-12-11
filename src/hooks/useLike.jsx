import { useState, useEffect } from "react";
import { postFav, deleteFav } from "../services/index";
import { useGetAllLikes } from "./index";

export const useLike = (id) => {
  
  const email = sessionStorage.getItem("email");
  const [like, setLike] = useState(false);
  const { allLikes } = useGetAllLikes();

  useEffect(() => {
    const isLiked = allLikes.some((likedItem) => likedItem.id === id);
    setLike(isLiked);
  }, [allLikes, id]);

  const likeInstrument = async () => {
    const { status } = await postFav(id, email);
    status === 200 ? setLike(true) : null;
  };

  const dislikeInstrument = async () => {
    const { status } = await deleteFav(id, email);
    if (status === 200) {
      setLike(false);
    }
  };

  const handlerClickLike = (e) => {
    e.preventDefault()
    if (!like) {
      likeInstrument();
    }
    if (like) {
      dislikeInstrument();
    }
  };

  return { handlerClickLike, like, setLike };
};
