import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { InventarioContext } from '../context/InventarioContext';
import { ACTIONS } from '../context/inventarioReducer';
import TablaProductos from '../components/TablaProductos';

function ListadoArticulos() {
  const { articulos, dispatch } = useContext(InventarioContext);

  const handleEliminar = (codigo) => {
    dispatch({ type: ACTIONS.ELIMINAR_ARTICULO, payload: { codigo } });
  };

  return (
    <section>
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold text-martwall-marino">Listado de artículos</h1>
          <p className="mt-1 text-martwall-gris">{articulos.length} artículos en el inventario</p>
        </div>
        <Link to="/agregar-articulo" className="rounded-full bg-martwall-amarillo px-5 py-2 font-bold text-martwall-marino hover:brightness-95">
          + Agregar artículo
        </Link>
      </div>
      <TablaProductos productos={articulos} onEliminar={handleEliminar} />
    </section>
  );
}

export default ListadoArticulos;
