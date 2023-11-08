import { useEffect, useState } from "react";
import { postCategory } from "../services/Category";

export const usePostCategory = () => {
    const [ isFetching , setIsFetching ] = useState(true);
    const [ name , setName ] = useState("");
    const [ detail , setDetail ] = useState("");
    const [ image , setImage ] = useState(null);
  
    const handleSubmit = (e) => {
        e.preventDefault();
        postCategory(name, detail, image)
        .finally(() => setIsFetching( false ));
    }
    
        
  
    return { isFetching, name, setName, detail, setDetail, setImage, handleSubmit};
  }     