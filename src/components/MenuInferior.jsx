import { NavLink } from 'react-router-dom';

function MenuInferior() {
  const estiloEnlace = ({ isActive }) =>
    isActive
      ? 'border-b-[3px] border-martwall-amarillo px-3 pb-3 pt-4 font-semibold text-martwall-amarillo sm:px-6'
      : 'border-b-[3px] border-transparent px-3 pb-3 pt-4 font-semibold text-white hover:bg-white/10 sm:px-6';

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-martwall-marino">
      <nav className="flex flex-wrap justify-center text-sm sm:text-base">
        <NavLink to="/" className={estiloEnlace}>Inventario</NavLink>
        <NavLink to="/quienes-somos" className={estiloEnlace}>Quiénes somos</NavLink>
        <NavLink to="/nuestras-tiendas" className={estiloEnlace}>Nuestras tiendas</NavLink>
      </nav>
    </footer>
  );
}

export default MenuInferior;
