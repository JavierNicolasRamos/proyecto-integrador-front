import { useEffect, useRef, useState } from 'react';

export const useHandlerResize = () => {
  const divRef = useRef(null);
  const [divSize, setDivSize] = useState(0);
  const [prevWidth, setPrevWidth] = useState(0); // Almacenar el ancho anterior

  useEffect(() => {
    const handleResize = () => {
      if (divRef.current) {
        const width = divRef.current.clientWidth;
        // Comparar el ancho anterior con el nuevo ancho
        if (width < prevWidth) {
          // La pantalla se achicó
          setDivSize(width);
        } else if (width > prevWidth) {
          // La pantalla se agrandó
          setDivSize(width);
        }

        // Actualizar el ancho anterior con el nuevo ancho
        setPrevWidth(width);
      }
    };

    if (!divRef.current || divSize <= 0) {
      setDivSize(250); // Establecer divSize inicial a 200 si divRef no existe
    } else {
      handleResize(); // Obtener el tamaño inicial si divRef existe
    }

    window.addEventListener('resize', handleResize); // Actualizar el tamaño al cambiar el tamaño de la ventana

    return () => {
      window.removeEventListener('resize', handleResize); // Limpiar el listener al desmontar
    };
  }, [prevWidth]);


  return { divRef, divSize };
};