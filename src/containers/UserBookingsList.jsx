import { useFetchUserBookings } from "../hooks/index";
import { BookingCard, Spinner } from "../components";
import "../styles/UserBookingList.css";

export const UserBookingsList = () => {
  const { bookings, isFetching } = useFetchUserBookings();

  return (
    <div>
      <div className="userBookingList">
          {isFetching && <Spinner />}
          {bookings.map((booking) => (
            <BookingCard key={booking.id} booking={booking} />
          ))}
      </div>
    </div>
  );
};
