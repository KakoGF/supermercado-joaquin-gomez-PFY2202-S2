import InsigniaStock from './InsigniaStock';

function TablaProductos({ productos, onEliminar }) {
  if (productos.length === 0) {
    return <p className="rounded-lg bg-white p-6 text-center text-martwall-gris">No hay artículos para mostrar.</p>;
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-martwall-borde">
      <table className="w-full bg-white text-left text-sm">
        <thead className="bg-martwall-oscuro text-white">
          <tr>
            <th className="px-3 py-3">Código</th>
            <th className="px-3 py-3">Producto</th>
            <th className="px-3 py-3">Marca</th>
            <th className="px-3 py-3">Tipo</th>
            <th className="px-3 py-3">Precio</th>
            <th className="px-3 py-3">Stock</th>
            {onEliminar && <th className="px-3 py-3">Acción</th>}
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.codigo} className="border-b border-blue-50 even:bg-blue-50/40">
              <td className="px-3 py-3 font-mono text-xs">{producto.codigo}</td>
              <td className="px-3 py-3 font-medium">{producto.nombre}</td>
              <td className="px-3 py-3">{producto.marca}</td>
              <td className="px-3 py-3">{producto.tipo}</td>
              <td className="px-3 py-3">${producto.precio.toLocaleString('es-CL')}</td>
              <td className="px-3 py-3"><InsigniaStock stock={producto.stock} /></td>
              {onEliminar && (
                <td className="px-3 py-3">
                  <button
                    type="button"
                    onClick={() => onEliminar(producto.codigo)}
                    className="rounded border border-red-300 px-3 py-1 text-xs font-semibold text-red-700 hover:bg-red-50"
                  >
                    Eliminar
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaProductos;
