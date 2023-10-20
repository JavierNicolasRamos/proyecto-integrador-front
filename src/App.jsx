// empiezo a modificar
import './App.css'
import Footer from "./components/Footer";
import { Header } from './components/Header';
import { Outlet } from "react-router-dom";
import Card from "./components/Card";

function App() {

  return (
      <div>
        <Header />
        <Card />
        <Outlet />
        <Footer />
      </div>
  )
}

export default App
