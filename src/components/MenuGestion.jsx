import { NavLink } from 'react-router-dom';

function MenuGestion() {
  const estiloEnlace = ({ isActive }) =>
    isActive
      ? 'rounded-full bg-white px-4 py-2 text-sm font-semibold text-martwall-azul'
      : 'rounded-full px-4 py-2 text-sm font-semibold text-white hover:bg-white/15';

  return (
    <nav className="flex flex-wrap gap-2">
      <NavLink to="/agregar-articulo" className={estiloEnlace}>+ Agregar artículo</NavLink>
      <NavLink to="/listado-articulos" className={estiloEnlace}>Listado de artículos</NavLink>
    </nav>
  );
}

export default MenuGestion;
