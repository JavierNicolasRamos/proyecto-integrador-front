import Card  from './Card'
import productos  from './Product'

export const RecommendedProds = () => {
  return (
    <>
      <h2 className="home__title">Mejores puntuados</h2>
      <div className="product-grid">
        {
          productos.map((producto) => (
            <Card key={producto.id} producto={producto} />
          ))
        }
      </div>
    </>
  )
}