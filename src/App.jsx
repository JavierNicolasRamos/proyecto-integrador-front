// empiezo a modificar
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
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
