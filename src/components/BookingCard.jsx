import "../styles/BookingCard.css";
import { RateInstrument, Spinner, ResultConfirmationDialog } from "./index";
import { usePostReview } from "../hooks/index";

export const BookingCard = ({ booking }) => {

const {
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
} = usePostReview(booking.instrument.id);

  return (
    <div className="bookingCard">
      <div className="bookingCardData">
        <div className="bookingCardImage">
          <img src={booking.instrument.image[0].image} alt="instrumentImage" />
        </div>
        <div className="bookingCardName">{booking.instrument.name}</div>
        <div className="bookingCardDate">{booking.bookingStart}</div>
        <div className="bookingCardDate">{booking.bookingEnd}</div>
        <div
          className={
            booking.activeBooking
              ? "bookingInProressText"
              : "bookingFinishedText"
          }
        >
          {booking.activeBooking ? "En progreso" : "Finalizado"}
        </div>
      </div>
      <div className="rateForm">
        {openRateForm && (
          <RateInstrument
            presentInstrumentId={booking.instrument.id}
            email={email}
            reviewDescription={reviewDescription}
            setReviewDescription={setReviewDescription}
            score={score}
            setScore={setScore}
          />
        )}
      </div>
      <button className="rateBtn" onClick={rankBtnHandler}>
        Puntuar
      </button>

      {isFetching && <Spinner />}
        {showResult && (
          <ResultConfirmationDialog
            success={success}
            resultContent={resultContent}
            actionDetail={"Volver a mi cuenta"}
            presentRoute={"/account"}
          />
        )}

    </div>
  );
};
