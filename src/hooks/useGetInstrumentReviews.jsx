import { useEffect, useState } from "react";
import { getReviewsByInstrument } from "../services/index";

export const useGetInstrumentReviews = (id) => {
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    const { data } = await getReviewsByInstrument(id);
    setReviews(data);
  };

  useEffect(() => {
    getReviews();
  }, []);

  return { reviews };
};
