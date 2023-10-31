// empiezo a modificar
import './App.css'
import Footer from "./components/Footer";
import { Header } from './components/Header';
import { Outlet } from "react-router-dom";
import Carousel from './Routes/Carousel';

function App() {

  return (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
  )
}

export default App
