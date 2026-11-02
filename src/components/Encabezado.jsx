import { Link } from 'react-router-dom';
import MenuGestion from './MenuGestion';

function Encabezado() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-3 bg-martwall-azul px-4 py-3 sm:px-7">
      <div className="flex items-center gap-3">
        <Link to="/" className="text-2xl font-bold text-white">MartWall</Link>
        <span className="rounded bg-martwall-amarillo px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-martwall-marino">
          Control de inventario
        </span>
      </div>
      <MenuGestion />
    </header>
  );
}

export default Encabezado;
