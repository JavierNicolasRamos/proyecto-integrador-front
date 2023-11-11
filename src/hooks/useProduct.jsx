import { useState, useEffect } from 'react';
import { getProductById } from '../services/index';

export const useProduct = (id) => {
  const [product, setProduct] = useState({});
  const [productExists, setProductExists] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(id);
        setProduct(productData);
        setProductExists(true);
      } catch (error) {
        console.error(error);
        setProductExists(false);
      }
    };
    fetchProduct();
  }, [id]);

  return { product, productExists };
};