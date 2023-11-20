import "../styles/SearchForm.css"

export const SearchForm = () => {
  return (
    <form method="GET" className="header__search-bar__form">
      <input
        className="header__search-bar__form__input"
        placeholder="¿Qué estás buscando?"
        type="search"
        name="" //TODO: Agregar name
        id="" //TODO: Agregar id
      />
    </form>
  )
}
