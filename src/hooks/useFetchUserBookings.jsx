import { useEffect, useState } from "react";
import { getBookings } from "../services/index";

export const useFetchUserBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const jwt = sessionStorage.getItem("jwt");
  const email = sessionStorage.getItem("email");

  const fetchBookings = async () => {
    const { data } = await getBookings(jwt);
    const filteredBookings = data.filter((booking) => booking.user.email === email);
    setBookings(filteredBookings);
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
