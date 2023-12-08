import { useEffect } from "react";
import { useMainSearchBar } from "../hooks/index";
import { SingleCalendar } from "../components";
import "../styles/MainSearchBar.css";

export const MainSearchBar = () => {
  const {
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
    inputRefStartDate,  
    inputRefEndDate,    
    calendarPosition,
  } = useMainSearchBar();

  console.log("searched Instruments", searchedInstruments);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        (inputRefStartDate.current && inputRefStartDate.current.contains(e.target)) ||
        (inputRefEndDate.current && inputRefEndDate.current.contains(e.target))
      ) {
        return;
      }
      setShowCalendar(false);
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [setShowCalendar, inputRefStartDate, inputRefEndDate]);


  return (
    <div className="mainSearchBar">
      <h1>Selecciona fechas para ver productos disponibles</h1>

      <form className="mainSearchBarForm" onSubmit={handlerSubmit}>
        <label htmlFor="name"></label>
        <input
          id="name"
          type="text"
          placeholder="¿Qué estás buscando?"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="startDate"></label>
        <input
          id="startDate"
          type="text"
          placeholder="Desde"
          value={startDate ? startDate.toLocaleDateString('es-AR') : ""}
          onFocus={() => handleDateFieldFocus('startDate')}
          readOnly
          ref={inputRefStartDate}
        />
        {focusedDateField === 'startDate' && showCalendar && (
          <SingleCalendar
            onSelect={handleCalendarSelect}
            onClickOutside={handleCalendarClickOutside}
            position={{ top: calendarPosition.top, left: calendarPosition.left }}
          />
        )}

        <label htmlFor="endDate"></label>
        <input
          id="endDate"
          type="text"
          placeholder="Hasta"
          value={endDate ? endDate.toLocaleDateString('es-AR') : ""}
          onFocus={() => handleDateFieldFocus('endDate')}
          readOnly
          ref={inputRefEndDate}
        />
        {focusedDateField === 'endDate' && showCalendar && (
          <SingleCalendar
            onSelect={handleCalendarSelect}
            onClickOutside={handleCalendarClickOutside}
            position={{ top: calendarPosition.top, left: calendarPosition.left }}
          />
        )}

        <input id="buscar" type="submit" value="Buscar" />
      </form>
    </div>
  );
};