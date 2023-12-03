import { useState } from "react";
import "../styles/BookingCard.css";

export const BookingCard = ({ booking }) => {
  const [openRateForm, setOpenRateForm] = useState(false);

  return (
    <div className="bookingCard">
      <div className="bookingCardData">
        <div className="bookingCardImage">
        <img src={booking.instrument.image[0].image} alt="instrumentImage" />
        </div>
        <div className="bookingCardName">{booking.instrument.name}</div>
        <div className="bookingCardDate">{booking.bookingStart}</div>
        <div className="bookingCardDate">{booking.bookingEnd}</div>
        <div className={booking.activeBooking ? "bookingInProressText" : "bookingFinishedText"}>{booking.activeBooking ? "En progreso" : "Finalizado"}</div>
      </div>
      <button
            className="rateBtn"
            onClick={() => {
              setOpenRateForm(true);
            }}
          >
            Puntuar
      </button>
      {/* <div className="rateForm">
        {openRateForm && <RateInstrument presentInstrument={booking.instrument} />}
      </div> */}
    </div>
  )
  }
