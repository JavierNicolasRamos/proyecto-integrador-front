import { useState, useCallback, useEffect } from 'react';
import { getDisabledDates, postSelectedDates } from '../services/index';

export const useCalendar = (id) => {
  const [value, setValue] = useState([]);
  const [disabledDates, setDisabledDates] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [getError, setGetError] = useState(null);
  const [postError, setPostError] = useState(null);

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

  const onChange = useCallback((val) => {
    setValue(val);
    postSelectedDates(val)
      .then(response => {
        setValue(response);
      })
      .catch(error => {
        setPostError(error);        
      })
      .finally(() => setIsFetching(false));
  }, []);

  return { value, setValue, isDisabled, onChange, isFetching, getError, postError };
};