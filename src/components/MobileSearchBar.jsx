import "../styles/MobileSearchBar.css"

export const MobileSearchBar = () => {
  return (
    <form method="GET" className="header__mobile-search-bar__form">
      <input
        className="header__mobile-search-bar__form__input"
        placeholder="¿Qué estás buscando?"
        type="search"
        name="" //TODO: Agregar name
        id="" //TODO: Agregar id
      />
    </form>
  )
}
