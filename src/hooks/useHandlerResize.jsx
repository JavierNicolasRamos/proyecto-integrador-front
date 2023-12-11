import { useEffect, useRef, useState } from 'react';

export const useHandlerResize = () => {
  const divRef = useRef(null);
  const [divSize, setDivSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (divRef.current) {
        const width = divRef.current.clientWidth;
        const height = divRef.current.clientHeight;
        setDivSize({ width, height });
      }
    };

    handleResize(); // Obtener el tamaño inicial

    window.addEventListener('resize', handleResize); // Actualizar el tamaño al cambiar el tamaño de la ventana

    return () => {
      window.removeEventListener('resize', handleResize); // Limpiar el listener al desmontar
    };
  }, []);

  return [divRef, divSize];
};