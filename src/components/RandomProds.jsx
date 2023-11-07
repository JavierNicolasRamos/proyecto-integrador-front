import axios from "axios";
import Card from "./Card";
import { useEffect, useState } from "react";
import "../styles/RandomProds.css"


export const RandomProds = () => {
    const [randomProds, setRandomProds] = useState([])
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    
    const params = {
      page: currentPage - 1,
      size: 10,
      sort: "id,asc",
    };
    
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8001/instruments/paginado`,
          { params }
        );
        if (response.status === 200) {
          setRandomProds(response.data.content);
        } else {
          console.error("La solicitud a la API no fue exitosa");
        }
      } catch (error) {
        console.error("Error al obtener datos de la API:", error);
      }
    };

    useEffect(() => {
      fetchProducts();
    }, [currentPage]);

    const handlePageChange = (page) => {
      setCurrentPage(page);
    };

    const fetchTotalProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8001/instruments`);
        if (response.status === 200) {
          const total = response.data.length;
          const totalPages = Math.floor(total / 10) + 1;
          setTotalPages(totalPages);
        } else {
          console.error("La solicitud a la API no fue exitosa");
        }
      } catch (error) {
        console.error("Error al obtener datos de la API:", error);
      }
    };

    useEffect(() => {
      fetchTotalProducts();
    }, []);
    
    return (
      <div>
        <h2 className="home__title">Productos que pueden interesarte</h2>
        <div className="product-grid">
          {randomProds.map((randomProduct) => (
            <Card 
              key={randomProduct.id} 
              id={randomProduct.id} 
              name={randomProduct.name} 
              image={randomProduct.image[0].image}
              score={randomProduct.score}
              category={randomProduct.category.detail}   
            />
          ))}
        </div>
        <div className="pageNumbersDiv">
            <button
              className="pageNumbers currentNumberPage"
              onClick={() => setCurrentPage(currentPage === 1 ? currentPage : currentPage - 1)}
            >
              <img src="/src/images/PrevPage.svg" alt="PrevPage" />
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`pageNumbers ${
                  index + 1 === currentPage ? "currentNumberPage" : ""
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="pageNumbers currentNumberPages"
              onClick={() => setCurrentPage(currentPage + 1 > totalPages? currentPage : currentPage + 1 )}
            >
              <img src="/src/images/NextPage.svg" alt="PrevPage" />
            </button>
          </div>
      </div>
    );
};
