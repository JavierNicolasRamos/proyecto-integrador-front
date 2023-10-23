import Card from "../components/Card";
import productos from '../components/Product';
import { SearchBar } from '../components/SearchBar';

const Home = () => {
  return (
    <>
      <SearchBar/>
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

export default Home