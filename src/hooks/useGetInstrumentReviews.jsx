import { useEffect, useState } from "react";
import { getReviewsByInstrument } from "../services/index";

export const useGetInstrumentReviews = (id) => {
  const [reviews, setReviews] = useState([]);
  const jwt = sessionStorage.getItem("jwt");


  const getReviews = async (id) => {
    const { data } = await getReviewsByInstrument(id, jwt);
    setReviews(data);
  };

  useEffect(() => {
    getReviews(id);
  }, [id]);

  return { reviews };
};
