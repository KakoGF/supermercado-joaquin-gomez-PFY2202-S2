import { Link } from 'react-router-dom';
import InsigniaStock from './InsigniaStock';

function ListaAlertas({ alertas }) {
  if (alertas.length === 0) {
    return <p className="rounded-lg bg-white p-6 text-center text-martwall-gris">Todos los productos tienen stock suficiente.</p>;
  }

  return (
    <ul className="divide-y divide-blue-50 rounded-lg border border-martwall-borde bg-white">
      {alertas.map((producto) => (
        <li key={producto.codigo} className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 px-4 py-3 sm:grid-cols-[1fr_auto_auto]">
          <div>
            <span className="block font-semibold">{producto.nombre}</span>
            <span className="text-xs text-martwall-gris">{producto.marca} · {producto.tipo}</span>
          </div>
          <InsigniaStock stock={producto.stock} />
          <Link to={`/categoria/${producto.tipo}`} className="font-semibold text-martwall-azul hover:underline">
            Revisar
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ListaAlertas;
