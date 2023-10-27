import Card  from './Card'
import productos  from './Product'

export const RandomProds = () => {
  return (
    <>
      <h2 className="home__title">Productos que pueden interesarte</h2>
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
