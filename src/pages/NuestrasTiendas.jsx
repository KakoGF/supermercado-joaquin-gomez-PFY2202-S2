import { tiendas } from '../data/tiendas';
import TarjetaTienda from '../components/TarjetaTienda';

function NuestrasTiendas() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-martwall-marino">Nuestras tiendas</h1>
      <p className="mb-5 mt-2 max-w-3xl leading-relaxed">
        Tenemos {tiendas.length} tiendas en Santiago. Estos son sus datos de contacto y horarios.
      </p>
      <div className="flex flex-col gap-3">
        {tiendas.map((tienda) => (
          <TarjetaTienda key={tienda.nombre} tienda={tienda} />
        ))}
      </div>
    </section>
  );
}

export default NuestrasTiendas;
