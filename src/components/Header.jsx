import '../styles/Header.css'
import { Menu } from './Menu';

export const Header = () => {
  return (
    <header className="header">
      <h2 className="header__logo">LOGO</h2>
      <Menu/>
    </header>
  );
};
