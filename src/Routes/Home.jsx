import React from 'react'
import Card from "../components/Card";
import productos from '../components/Product';

const Home = () => {
  return (
    <div className="product-grid">
      {productos.map((producto) => (
        <Card key={producto.id} producto={producto} />
      ))}
    </div>
    
  )
}

export default Home
// redender instrumentos