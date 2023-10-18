import '../styles/Header.css'

export const Header = () => {
  return (
    <header className="header">
      <h2 className="header__logo">LOGO</h2>
      <section className="header__buttons">
        <button className="header__buttons__button">Crear cuenta</button>
        <button className="header__buttons__button">Iniciar sesión</button>
      </section>
    </header>
  );
};
