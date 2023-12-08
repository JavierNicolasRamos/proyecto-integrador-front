import PropTypes from 'prop-types';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Calendar } from '@natscale/react-calendar';
import '@natscale/react-calendar/dist/main.css';

const monthsLabel = {
  0: 'Enero',
  1: 'Febrero',
  2: 'Marzo',
  3: 'Abril',
  4: 'Mayo',
  5: 'Junio',
  6: 'Julio',
  7: 'Agosto',
  8: 'Septiembre',
  9: 'Octubre',
  10: 'Noviembre',
  11: 'Diciembre',
};

const weekDaysLabel = {
  0: 'Do',
  1: 'Lu',
  2: 'Ma',
  3: 'Mi',
  4: 'Ju',
  5: 'Vi',
  6: 'Sa',
};

export const SingleCalendar = ({ size, fontSize, onSelect, onClickOutside }) => {
  const sizeData = size;
  const fontSizeData = fontSize;
  const [value, setValue] = useState();
  const calendarRef = useRef();

  const handleClickOutside = useCallback(
    (e) => {
      if (calendarRef.current && !calendarRef.current.contains(e.target)) {
        onClickOutside && onClickOutside();
      }
    },
    [onClickOutside],
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  const onChange = useCallback(
    (val) => {
      setValue(val);
      onSelect && onSelect(val);
    },
    [onSelect, setValue],
  );

  return (
    <div ref={calendarRef}>
      <Calendar
        useDarkMode
        startOfWeek={0}
        weekDaysLabel={weekDaysLabel}
        monthsLabel={monthsLabel}
        size={sizeData}
        fontSize={fontSizeData}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

SingleCalendar.defaultProps = {
  size: 240,
  fontSize: 18,
};

SingleCalendar.propTypes = {
  size: PropTypes.number,
  fontSize: PropTypes.number,
  onSelect: PropTypes.func,
  onClickOutside: PropTypes.func,
};
