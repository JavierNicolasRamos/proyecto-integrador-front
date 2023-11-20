import "../styles/PaginateButtons.css"

export const PaginateButtons = () => {

  return (
    <div className="paginate-buttons__content">

        <button className="paginate-buttons__btn">
          <img src="/src/images/PrevPage.svg" alt="Botón para avanzar a la pagina siguiente" />
        </button>
        
        <button className="paginate-buttons__btn">
          <img src="/src/images/NextPage.svg" alt="Botón para volver a la pagina anterior" />
        </button>
    </div>
  )
}
