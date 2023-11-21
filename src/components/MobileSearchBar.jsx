import "../styles/MobileSearchBar.css"

export const MobileSearchBar = () => (
  <form method="GET" className="header__mobile-search-bar__form">
    <input
      className="header__mobile-search-bar__form__input"
      placeholder="¿Qué estás buscando?"
      type="search"
      name="mobileSearch" 
      id="mobileSearch" 
    />
  </form>
);
