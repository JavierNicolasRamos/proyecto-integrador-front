import { useState } from "react";
import { postReview } from "../services/index";

export const usePostReview = (id) => {
  const [openRateForm, setOpenRateForm] = useState(false);
  const [reviewDescription, setReviewDescription] = useState("");
  const [score, setScore] = useState(4);
  const [showResult, setShowResult] = useState(false);
  const [success, setSuccess] = useState(false);
  const [resultContent, setResultContent] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const email = sessionStorage.getItem("email");

  const submitForm = async () => {
    const reviewDto = {
        score: score,
        reviewName: "",
        reviewDescription: reviewDescription,
        buyerDto: {
            email: email
          },
          instrumentId: id,
      };

      setIsFetching(true);

      const { data, status } = await postReview(reviewDto);

      if (status === 200) {
        setIsFetching(false);
        setSuccess(true);
        setResultContent(
          `La reseña ha sido publicada correctamente`
        );
        setShowResult(true);
      } else {
        setIsFetching(false);
        setSuccess(false);
        setResultContent(
          `Ha ocurrido un error. ${
            data
              ? data
              : "Ha ocurrido un error, intente nuevamente en unos instantes"
          }`
        );
        setShowResult(true);
      }

    return { data, status };
  };

  const rankBtnHandler = async (e) => {
    e.preventDefault();

    if (!openRateForm) {
      setOpenRateForm(true);
    } else {
        const { data, status } = await submitForm();
      
  };
}

  return {
    openRateForm,
    rankBtnHandler,
    email,
    reviewDescription,
    setReviewDescription,
    score,
    setScore,
    showResult,
    success,
    resultContent,
    isFetching,
  };
};
