import { SearchIcon } from './SearchIcon'

export const SearchBar = () => {
  return (
    <section className="header__search-bar">
      <h1 className="header__search-bar__title">Busca tu instrumento ideal</h1>
      <form method="GET" className="header__search-bar__form">
        <input
          className="header__search-bar__form__input"
          placeholder="Guitarra, bajo y mucho mas ..."
          type="search"
          name=""
          id=""
        />
        <button
          className="header__search-bar__form__button"
          type="submit"
        >
          <SearchIcon />
        </button>
      </form>
    </section>
  )
}
