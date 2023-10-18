import '../styles/Header.css'

export const Header = () => {
  return (
    <header>
      <h1>LOGO</h1>
      {/* Action buttons */}
      <section className="header__buttons">
        <button>Crear cuenta</button>
        <button>Iniciar sesion</button>
      </section>

      {/* Search form */}
      <section className="header__search-bar">
        <h1>Busca tu instrumento ideal</h1>
        <input type="search" name="" id="" />
        <button type="submit">Buscar</button>
      </section>
    </header>
  )
}
