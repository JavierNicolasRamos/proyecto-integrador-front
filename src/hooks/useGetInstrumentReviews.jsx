import { useEffect, useState } from "react";
import { getReviewsByInstrument } from "../services/index";

export const useGetInstrumentReviews = (id) => {
  const [reviews, setReviews] = useState([]);

  const jwt = sessionStorage.getItem("jwt");

  const getReviews = async () => {
    const { data } = await getReviewsByInstrument(id, jwt);
    setReviews(data);
  };

  useEffect(() => {
    getReviews();
  }, []);

  return { reviews };
};
