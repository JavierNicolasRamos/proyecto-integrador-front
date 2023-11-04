// empiezo a modificar
import './App.css'
import Footer from "./components/Footer";
import { Header } from './components/Header';
import { Outlet } from "react-router-dom";
import { UserProvider } from './context/UserContext';

function App() {

  return (
      <>
        <UserProvider>
          <Header />
          <Outlet />
          <Footer />
        </UserProvider>
      </>
  )
}

export default App
