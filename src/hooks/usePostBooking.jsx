import { useNavigate } from "react-router-dom";
import { postBooking } from "../services/Booking"
import { useState } from "react";

export const usePostBooking = () => {

  const navigate = useNavigate();
  const [isFetching, setIsFetching] = useState(true)

  const handlerConfirm = (formData) => {
    
    postBooking(formData)
    .then(()=>{
      navigate("/reservationSuccess/")
    })
    .catch((e) => {
      navigate("/reserveDenied");
    })
    .finally(()=>{
      setIsFetching(false)
    })

  }

  return { handlerConfirm }
}
