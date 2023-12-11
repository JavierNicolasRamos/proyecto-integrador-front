import { useRef, useState, useEffect } from "react";
import { searchInstruments } from "../services/index";

export const useMainSearchBar = () => {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isFetching, setIsFetching] = useState("");
  const [searchedInstruments, setSearchedInstruments] = useState(null);
  const [previewSearchResults, setPreviewSearchResults] = useState(null);
  const [focusedDateField, setFocusedDateField] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const inputRefStartDate = useRef(null); 
  const inputRefEndDate = useRef(null);   
  const [calendarPosition, setCalendarPosition] = useState({ top: 0, left: 0 });

  const buildQuery = () => {
    let query = "";
  
    if (name) {
      query += `name=${name}&`;
    }
  
    if (startDate && endDate) {
      const formattedStartDate = startDate.toISOString().split('T')[0];
      const formattedEndDate = endDate.toISOString().split('T')[0];
      query += `startDate=${encodeURIComponent(formattedStartDate)}&endDate=${encodeURIComponent(formattedEndDate)}`;
    }
  
    return query;
  };

  const getPreviewSearchResults = async () => {
    setSearchedInstruments(null)
    setIsFetching(true);
    const query = buildQuery();
    const { data, status } = await searchInstruments(query);
    setIsFetching(false);
    setPreviewSearchResults(data);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getPreviewSearchResults();
    }, 250);
    return () => clearTimeout(timer);
  }, [name, startDate, endDate]);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    setIsFetching(true);
    const query = buildQuery();
    const { data, status } = await searchInstruments(query);
    setIsFetching(false);
    setSearchedInstruments(data);
    setPreviewSearchResults(null)
  };

  const handleDateFieldFocus = (fieldName) => {
    setTimeout(() => {
      setFocusedDateField(fieldName);
      const inputRef = fieldName === "startDate" ? inputRefStartDate : inputRefEndDate;
      const rect = inputRef.current.getBoundingClientRect();
      setCalendarPosition({ top: rect.bottom, left: rect.left });
      setShowCalendar(true);
    }, 100);
  };

  const handleCalendarSelect = (selectedDate) => {
    if (focusedDateField === "startDate") {
      setStartDate(new Date (selectedDate));
    } else if (focusedDateField === "endDate") {
      setEndDate(new Date (selectedDate));
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
    previewSearchResults,
    searchedInstruments,
    handleCalendarSelect,
    handleDateFieldFocus,
    focusedDateField,
    showCalendar,
    setShowCalendar,
    handleCalendarClickOutside,
    inputRefStartDate,  
    inputRefEndDate,    
    calendarPosition,
  };
};
