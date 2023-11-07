// eslint-disable-next-line react/prop-types
export const GalleryGridItem = ({ showAll, index, onClick, children }) => {
  const className = showAll ? `grid-item grid-item-${index + 2}.0` : `grid-item grid-item-${index + 2}`;

  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};