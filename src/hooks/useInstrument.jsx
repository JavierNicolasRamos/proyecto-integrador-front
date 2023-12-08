import { useState, useEffect } from 'react';
import { getInstrumentById } from '../services/index';

export const useInstrument = (id) => {
  
  const [isFetching, setIsFetching] = useState(true);
  const [instrument, setInstrument] = useState({});
  const [instrumentExists, setInstrumentExists] = useState(false);
  const [image, setImage] = useState({})

  useEffect(() => {

    const fetchInstrument = async() => {
      try{
        const data = await getInstrumentById(id)
        const images = data.image[0].image
        setInstrument(data)
        setImage(images)
        setIsFetching(false)
      }catch(e){
        setInstrumentExists(false);
      }
    } 

    fetchInstrument()
 
  }, [id]);


  return { instrument, instrumentExists, isFetching, image };
};