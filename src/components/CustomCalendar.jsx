import { useCallback, useState } from 'react';
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

const size = 240;

const fontSize = 18;

export const CustomCalendar = () => {
    const [value, setValue] = useState([]);

    const isDisabled = useCallback((date) => {
      // es un ejemplo, hay que traer las fechas del Back
      if (date.getDay() === 3 || date.getDate() % 5 === 0) {
        return true;
      }
    }, []);

    const onChange = useCallback(
      (val) => {
        setValue(val);
      },
      [setValue],
    );
  
    return <Calendar startOfWeek={0} weekDaysLabel={weekDaysLabel} monthsLabel={monthsLabel} size={size} fontSize={fontSize} value={value} onChange={onChange} isDisabled={isDisabled} useDarkMode isRangeSelector noPadRangeCell />;
};