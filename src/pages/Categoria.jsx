import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { InventarioContext } from '../context/InventarioContext';
import { categorias } from '../data/categorias';
import { sumarUnidades } from '../utils/stock';
import BarraCategorias from '../components/BarraCategorias';
import TablaProductos from '../components/TablaProductos';

function Categoria() {
  const { categoria } = useParams();
  const { articulos } = useContext(InventarioContext);

  const existe = categorias.some((c) => c.nombre === categoria);
  const productos = articulos.filter((articulo) => articulo.tipo === categoria);

  return (
    <section>
      <Link to="/" className="mb-4 inline-block font-semibold text-martwall-oscuro hover:underline">← Panel de inventario</Link>
      <BarraCategorias />

      {existe ? (
        <div className="mt-6">
          <h1 className="text-3xl font-bold text-martwall-marino">{categoria}</h1>
          <p className="mb-4 mt-1 text-martwall-gris">
            {productos.length} productos · {sumarUnidades(productos)} unidades en total
          </p>
          <TablaProductos productos={productos} />
        </div>
      ) : (
        <p className="mt-6 text-martwall-gris">No encontramos la categoría "{categoria}". Elige una de la lista de arriba.</p>
      )}
    </section>
  );
}

export default Categoria;
