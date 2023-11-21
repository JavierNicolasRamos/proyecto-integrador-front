import "../styles/PaginateButtons.css"

const PREV_PAGE_IMAGE = "/src/images/PrevPage.svg";
const NEXT_PAGE_IMAGE = "/src/images/NextPage.svg";
const PREV_PAGE_ALT = "Botón para avanzar a la pagina siguiente";
const NEXT_PAGE_ALT = "Botón para volver a la pagina anterior";

export const PaginateButtons = () => (
  <div className="paginate-buttons__content">
    <button className="paginate-buttons__btn">
      <img src={PREV_PAGE_IMAGE} alt={PREV_PAGE_ALT} />
    </button>
    <button className="paginate-buttons__btn">
      <img src={NEXT_PAGE_IMAGE} alt={NEXT_PAGE_ALT} />
    </button>
  </div>
);