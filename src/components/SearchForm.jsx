import "../styles/SearchForm.css"

export const SearchForm = () => (
  <form method="GET" className="header__search-bar__form">
    <input
      className="header__search-bar__form__input"
      placeholder="¿Qué estás buscando?"
      type="search"
      name="searchForm"
      id="searchForm"
    />
  </form>
);