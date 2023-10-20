
const Detail = ({id}) => {
  const producto = productos.find((p) => p.id === Number(id));

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <h2>Detalle del Producto</h2>
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio.toFixed(2)}</p>
    </div>
  );
};

export default Detail;