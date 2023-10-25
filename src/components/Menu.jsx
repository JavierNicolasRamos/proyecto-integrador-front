import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <nav className='navigation-menu'>
      <Link to={'/home'}>Inicio</Link>
      <Link to={'/categories'}>Categorías</Link>
      <Link to={'/contact'}>Contacto</Link>
    </nav>
  )
}
