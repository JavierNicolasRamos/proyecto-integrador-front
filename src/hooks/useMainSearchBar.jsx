import { searchInstruments } from "../services/index";
import { useState } from "react";

export const useMainSearchBar = () => {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isFetching, setIsFetching] = useState("");
  const [searchedInstruments, setSearchedInstruments] = useState("");
  const [focusedDateField, setFocusedDateField] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);


  const buildQuery = () => {
    let query = "";

    if (name) {
      query += `name=${name}&`;
    }

    if (startDate && endDate) {
      query += `startDate=${encodeURIComponent(
        startDate
      )}&endDate=${encodeURIComponent(endDate)}`;
    }

    return query;
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    setIsFetching(true);
    const query = buildQuery();
    const { data, status } = await searchInstruments(query);
    setIsFetching(false);
    setSearchedInstruments(data);
  };

  const handleDateFieldFocus = (fieldName) => {
    setTimeout(() => {
      setFocusedDateField(fieldName);
      setShowCalendar(true);
    }, 100);
  };

  const handleCalendarSelect = (selectedDate) => {
    if (focusedDateField === 'startDate') {
      setStartDate(selectedDate);
    } else if (focusedDateField === 'endDate') {
      setEndDate(selectedDate);
    }
    setShowCalendar(false);
  };

  const handleCalendarClickOutside = () => {
    setShowCalendar(false);
  };

  return {
    name,
    setName,
    startDate,
    endDate,
    handlerSubmit,
    isFetching,
    searchedInstruments,
    handleCalendarSelect,
    handleDateFieldFocus,
    focusedDateField,
    showCalendar,
    setShowCalendar,
    handleCalendarClickOutside,
  };
};
