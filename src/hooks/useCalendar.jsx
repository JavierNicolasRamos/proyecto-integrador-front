import { useState, useCallback, useEffect } from 'react';
import { getDisabledDates } from '../services/index';

export const useCalendar = (id) => {
  const [value, setValue] = useState([]);
  const [disabledDates, setDisabledDates] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [getError, setGetError] = useState(null);

  useEffect(() => {
    getDisabledDates(id)
      .then(dates => {
        setDisabledDates(dates);
      })
      .catch(error => {
        setGetError(error);
      })
      .finally(() => setIsFetching(false));
  }, [id]);

  const isDisabled = useCallback((date) => {
    const dateString = date.toISOString().split('T')[0];
    return disabledDates.includes(dateString);
  }, [disabledDates]);

  const onChange = useCallback(
    (val) => {
      val = val.map(date => date.toISOString().split('T')[0]);
      setValue(val);
    },
    [setValue],
  );

  return { value, setValue, isDisabled, onChange, isFetching, getError };
};