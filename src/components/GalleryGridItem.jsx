import PropTypes from 'prop-types';

export const GalleryGridItem = ({ showAll, index, onClick, children }) => {
  const className = showAll ? `grid-item grid-item-${index + 2}.0` : `grid-item grid-item-${index + 2}`;

  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

GalleryGridItem.propTypes = {
  showAll: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};