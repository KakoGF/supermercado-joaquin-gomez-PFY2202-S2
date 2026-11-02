import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { InventarioContext } from '../context/InventarioContext';
import { categorias } from '../data/categorias';

function BarraCategorias() {
  const { articulos } = useContext(InventarioContext);

  const estiloChip = ({ isActive }) =>
    isActive
      ? 'rounded-full border-2 border-martwall-azul bg-martwall-azul px-4 py-2 font-semibold text-white'
      : 'rounded-full border-2 border-martwall-azul bg-white px-4 py-2 font-semibold text-martwall-azul hover:bg-blue-100';

  return (
    <div className="flex flex-wrap gap-2.5">
      {categorias.map((categoria) => (
        <NavLink key={categoria.nombre} to={`/categoria/${categoria.nombre}`} className={estiloChip}>
          {categoria.nombre}{' '}
          <small className="opacity-70">
            ({articulos.filter((articulo) => articulo.tipo === categoria.nombre).length})
          </small>
        </NavLink>
      ))}
    </div>
  );
}

export default BarraCategorias;
