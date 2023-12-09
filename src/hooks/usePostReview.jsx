import { useState } from "react"

export const usePostReview = () => {

    const [openRateForm, setOpenRateForm] = useState(false);
    const [reviewDescription, setReviewDescription] = useState("");
    const [score, setScore] = useState(null);
    const jwt = sessionStorage.getItem("jwt");
    const email = sessionStorage.getItem("email");


    const rankBtnHandler = () => {
        !openRateForm ? setOpenRateForm(true) : null;
      };



      return {
        openRateForm,
        rankBtnHandler,
        email,
        reviewDescription,
        setReviewDescription,
        score,
        setScore,
      };
    };