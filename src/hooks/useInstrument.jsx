import { useState, useEffect } from 'react';
import { getInstrumentById } from '../services/index';

export const useInstrument = (id) => {
  
  const [isFetching, setIsFetching] = useState(true);
  const [instrument, setInstrument] = useState({});
  const [instrumentExists, setInstrumentExists] = useState(false);

  useEffect(() => {
    getInstrumentById(id)
      .then((instrument) => {
        setInstrument(instrument);
        setInstrumentExists(true);
      })
      .catch(() => {
        setInstrumentExists(false);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [id]);

  return { instrument, instrumentExists, isFetching };
};