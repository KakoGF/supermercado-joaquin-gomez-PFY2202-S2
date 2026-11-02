import { useContext } from 'react';
import { InventarioContext } from '../context/InventarioContext';
import { obtenerAlertas, sumarUnidades } from '../utils/stock';
import BarraCategorias from '../components/BarraCategorias';
import ListaAlertas from '../components/ListaAlertas';

function Inicio() {
  const { articulos } = useContext(InventarioContext);
  const alertas = obtenerAlertas(articulos);

  return (
    <section>
      <div className="rounded-2xl bg-gradient-to-r from-martwall-marino to-martwall-azul px-6 py-6 text-white sm:px-7">
        <h1 className="text-3xl font-bold">Panel de inventario</h1>
        <p className="mb-5 mt-1 text-blue-100">Revisa el stock de todas las categorías y atiende primero los productos con alerta.</p>
        <div className="flex flex-wrap gap-7">
          <div><strong className="mr-1 text-3xl text-martwall-amarillo">{articulos.length}</strong> productos</div>
          <div><strong className="mr-1 text-3xl text-martwall-amarillo">{sumarUnidades(articulos)}</strong> unidades</div>
          <div><strong className="mr-1 text-3xl text-martwall-amarillo">{alertas.length}</strong> alertas</div>
        </div>
      </div>

      <h2 className="mb-3 mt-8 text-xl font-bold text-martwall-oscuro">Categorías</h2>
      <BarraCategorias />

      <h2 className="mb-3 mt-8 text-xl font-bold text-martwall-oscuro">Alertas de stock</h2>
      <ListaAlertas alertas={alertas} />
    </section>
  );
}

export default Inicio;
