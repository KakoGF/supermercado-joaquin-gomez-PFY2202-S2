import { obtenerEstadoStock } from '../utils/stock';

const estilos = {
  'sin-stock': 'bg-red-100 text-red-700',
  bajo: 'bg-amber-100 text-amber-800',
  ok: 'bg-blue-50 text-martwall-oscuro'
};

function InsigniaStock({ stock }) {
  const estado = obtenerEstadoStock(stock);

  const textos = {
    'sin-stock': 'Sin stock',
    bajo: `Quedan ${stock}`,
    ok: `${stock}`
  };

  return (
    <span className={`inline-block rounded px-2.5 py-1 text-xs font-bold ${estilos[estado]}`}>
      {textos[estado]}
    </span>
  );
}

export default InsigniaStock;
