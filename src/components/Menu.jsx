import { useEffect, useState } from 'react'
import { HamburgerMenu } from './HamburgerMenu'
import { CloseIcon } from './CloseIcon'

export const Menu = () => {
  
  const [isClosed, setIsClosed] = useState(true)
  const [showOptions, setShowOptions] = useState(true)

  const showMenu = () => {
    setIsClosed(!isClosed)
    setShowOptions(!showOptions)
  }  
  
  useEffect(() => {
    if (window.innerWidth < 480) {
      setIsClosed(false);
      setShowOptions(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsClosed(false);
        setShowOptions(true);
      } else {
        setIsClosed(true);
        setShowOptions(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <section className="header__buttons" >
      <button className="header__buttons__button-menu" onClick={showMenu}>
      {isClosed ? <HamburgerMenu /> : <CloseIcon/>}
      </button>
      <aside className={`${showOptions ? 'open' : 'close'}`}>
        <button className="header__buttons__button-create">Registrarse</button>
        <button className="header__buttons__button-login">Iniciar sesión</button>
      </aside>
    </section>
  </>
  )
}
