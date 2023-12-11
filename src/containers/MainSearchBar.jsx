import { useEffect } from "react";
import { useMainSearchBar } from "../hooks/index";
import {
  SingleCalendar,
  Spinner,
  SearchResultCard,
  ValidationError,
} from "../components/index";
import { RandomInstruments } from "./index";
import "../styles/MainSearchBar.css";
import "../styles/SearchResultCard.css";

export const MainSearchBar = () => {
  const {
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
  } = useMainSearchBar();

  useEffect(() => {
    const handleClickOutside = (e) => {
      const clickedInsideStartDate = inputRefStartDate.current?.contains(e.target);
      const clickedInsideEndDate = inputRefEndDate.current?.contains(e.target);
  
      if (!clickedInsideStartDate && !clickedInsideEndDate) {
        setShowCalendar(false);
      }
    };
  
    if (showCalendar) {
      document.addEventListener("click", handleClickOutside);
    }
  
    return () => {
      if (showCalendar) {
        document.removeEventListener("click", handleClickOutside);
      }
    };
  }, [inputRefStartDate, inputRefEndDate, setShowCalendar, showCalendar]);
  
  return (
    <div>
      <div className="mainSearchBar">
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
            value={startDate ? startDate.toLocaleDateString("es-AR") : ""}
            onFocus={() => handleDateFieldFocus("startDate")}
            readOnly
            ref={inputRefStartDate}
          />

          {focusedDateField === "startDate" && showCalendar && (
            <SingleCalendar
              onSelect={handleCalendarSelect}
              onClickOutside={handleCalendarClickOutside}
              position={{
                top: calendarPosition.top,
                left: calendarPosition.left,
              }}
            />
          )}

          <label htmlFor="endDate"></label>
          <input
            id="endDate"
            type="text"
            placeholder="Hasta"
            value={endDate ? endDate.toLocaleDateString("es-AR") : ""}
            onFocus={() => handleDateFieldFocus("endDate")}
            readOnly
            ref={inputRefEndDate}
          />
          {focusedDateField === "endDate" && showCalendar && (
            <SingleCalendar
              onSelect={handleCalendarSelect}
              onClickOutside={handleCalendarClickOutside}
              position={{
                top: calendarPosition.top,
                left: calendarPosition.left,
              }}
            />
          )}

          <input id="buscar" type="submit" value="Buscar" />
        </form>
      </div>
      {((!startDate && endDate) || (!endDate && startDate)) && (
        <ValidationError message={"Completa ambas fechas"} />
      )}
      {isFetching && <Spinner />}
      <div className="previewSearchResultsContainer">
        {Array.isArray(previewSearchResults) && previewSearchResults.length > 0 &&
          previewSearchResults
            .slice(0, 4)
            .map(({ id, name, image, score }) => (
              <SearchResultCard
                key={id}
                id={id}
                name={name}
                image={image && image[0] && image[0].image}
                score={score}
              />
            ))}
        {Array.isArray(previewSearchResults) && previewSearchResults.length > 4 &&
        <div className="searchResultCard">
          <div className="searchResultInstrument searchResultInstrumentViewMore" onClick={handlerSubmit}> Ver todos los resultados
          </div>
        </div>}
      </div>
      {Array.isArray(searchedInstruments) && searchedInstruments.length > 0 && (
        <RandomInstruments
          instruments={searchedInstruments}
          title="Resultados de tu búsqueda"
        />
      )}
      {Array.isArray(searchedInstruments) &&
        searchedInstruments.length === 0 && (
          <h3 className="mainSearcBar-NoResults">
            No hubo resultados para tu búsqueda
          </h3>
        )}
    </div>
  );
};
