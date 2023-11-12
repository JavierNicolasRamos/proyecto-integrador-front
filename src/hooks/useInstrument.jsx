import { useState, useEffect } from 'react';
import { getInstrumentById } from '../services/index';

export const useInstrument = (id) => {
  const [instrument, setInstrument] = useState({});
  const [instrumentsExists, setInstrumentExists] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const instrumentData = await getInstrumentById(id);
        setInstrument(instrumentData);
        setInstrumentExists(true);
      } catch (error) {
        console.error(error);
        setInstrumentExists(false);
      }
    };
    fetchProduct();
  }, [id]);

  return { instrument, instrumentsExists };
};