import { useState, useEffect } from "react";
import { postFav, deleteFav } from "../services/index";
import { useGetAllLikes } from "./index";

export const useLike = (id) => {
  const [like, setLike] = useState(false);
  const email = sessionStorage.getItem("email");
  const jwt = sessionStorage.getItem("jwt");

  const { allLikes } = useGetAllLikes();

  useEffect(() => {
    const isLiked = allLikes.some((likedItem) => likedItem.id === id);
    setLike(isLiked);
  }, [allLikes, id]);

  const likeInstrument = async () => {
    const { status } = await postFav(id, email, jwt);
    status === 200 ? setLike(true) : null;
  };

  const dislikeInstrument = async () => {
    const { status } = await deleteFav(id, email, jwt);
    if (status === 200) {
      setLike(false);
    }
  };

  const handlerClickLike = () => {
    if (!like) {
      likeInstrument();
    }
    if (like) {
      dislikeInstrument();
    }
  };

  return { handlerClickLike, like, setLike };
};
