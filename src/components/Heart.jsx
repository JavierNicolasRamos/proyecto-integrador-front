import PropTypes from 'prop-types';
import { useLike } from '../hooks';
import "../styles/Heart.css"

export const Heart = ({id}) => {

  const {handlerClickLike, like} = useLike(id)    

  return (
    <svg onClick={handlerClickLike} xmlns="http://www.w3.org/2000/svg" className={`card-img__like ${like ? "filled" : ''}`} width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="#ed2839" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
    </svg>
  )
}

Heart.propTypes = {
  id: PropTypes.number.isRequired,
};