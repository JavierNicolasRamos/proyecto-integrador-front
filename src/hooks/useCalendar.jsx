import { useState, useCallback, useEffect } from 'react';
import { getDisabledDates, postSelectedDates } from '../services/index';

export const useCalendar = () => {
  const [value, setValue] = useState([]);
  const [disabledDates, setDisabledDates] = useState([]);

  useEffect(() => {
    getDisabledDates()
      .then(dates => {
        setDisabledDates(dates);
      })
      .catch(error => {
        console.error('Hubo un error al obtener los días deshabilitados', error);
      });
  }, []);

  const isDisabled = useCallback((date) => {
    const dateString = date.toISOString().split('T')[0];
    return disabledDates.includes(dateString);
  }, [disabledDates]);

  const onChange = useCallback((val) => {
    setValue(val);
    postSelectedDates(val)
      .then(response => {
        console.log('Las fechas seleccionadas se enviaron correctamente', response);
      })
      .catch(error => {
        console.error('Hubo un error al enviar las fechas seleccionadas', error);
      });
  }, []);

  return { value, setValue, isDisabled, onChange };
};