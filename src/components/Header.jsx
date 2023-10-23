import { Link } from 'react-router-dom';
import '../styles/Header.css'
import { Menu } from './Menu';

export const Header = () => {
  return (
    <header className="header">
      <Link to="/home">
        <img src='../src/images/DH.png' className="header__logo" /> 
      </Link>
      <Menu/>
    </header>
  );
};