import { useEffect, useState } from "react";
import { getBookings } from "../services/index";

export const useFetchUserBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const email = sessionStorage.getItem("email");

  const fetchBookings = async () => {
    const { data } = await getBookings();
    const filteredBookings = data.filter(
      (booking) => booking.user.email === email
    );
    const sortedBookings = filteredBookings.sort(
      (a, b) => new Date(b.bookingEnd) - new Date(a.bookingEnd)
    );
    setBookings(sortedBookings);
    setIsFetching(false);
  };

  useEffect(() => {
    fetchBookings();
  }, []);


  return {
    bookings,
    isFetching,
    };
};
