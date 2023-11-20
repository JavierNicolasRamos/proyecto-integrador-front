import { Outlet } from "react-router-dom";
import { UserProvider } from './context/UserContext';
import  { Footer } from "./components/index";
import { Header } from './containers/index';
import './App.css'

export const App = () => {

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