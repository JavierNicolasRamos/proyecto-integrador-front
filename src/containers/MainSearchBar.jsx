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
  } = useMainSearchBar();

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
          value={startDate}
          onFocus={() => handleDateFieldFocus('startDate')}
          readOnly
        />
        {showCalendar && focusedDateField === 'startDate' && (
          <SingleCalendar onSelect={handleCalendarSelect} onClickOutside={handleCalendarClickOutside} />
        )}

        <label htmlFor="endDate"></label>
        <input
          id="endDate"
          type="text"
          placeholder="Hasta"
          value={endDate}
          onFocus={() => handleDateFieldFocus('endDate')}
          readOnly
        />
        {showCalendar && focusedDateField === 'endDate' && (
          <SingleCalendar onSelect={handleCalendarSelect} onClickOutside={handleCalendarClickOutside} />
        )}

        <input id="buscar" type="submit" value="Buscar" />
      </form>
    </div>
  );
};
