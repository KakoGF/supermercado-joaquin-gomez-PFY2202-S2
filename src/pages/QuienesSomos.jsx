import { historia } from '../data/historia';

function QuienesSomos() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-martwall-marino">Quiénes somos</h1>
      <p className="mt-2 max-w-3xl leading-relaxed">
        Somos MartWall, una cadena chilena de supermercados de barrio. Partimos como un negocio
        familiar y hoy atendemos a miles de vecinos en cuatro comunas de Santiago.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-md border-t-4 border-martwall-amarillo bg-white px-5 py-4">
          <h2 className="mb-2 text-xl font-bold text-martwall-oscuro">Misión</h2>
          <p>Ofrecer los productos de todos los días a buen precio, cerca de la casa y con stock siempre al día.</p>
        </div>
        <div className="rounded-md border-t-4 border-martwall-amarillo bg-white px-5 py-4">
          <h2 className="mb-2 text-xl font-bold text-martwall-oscuro">Visión</h2>
          <p>Ser el supermercado de barrio más querido de Santiago, apoyándonos en la tecnología para no dejar a nadie sin lo que necesita.</p>
        </div>
      </div>

      <h2 className="mb-4 mt-8 text-xl font-bold text-martwall-oscuro">Nuestra historia</h2>
      <ol className="ml-2 border-l-[3px] border-martwall-azul">
        {historia.map((hito) => (
          <li key={hito.anio} className="relative pb-5 pl-6">
            <span className="absolute -left-[11px] top-1 h-4 w-4 rounded-full border-[3px] border-martwall-azul bg-martwall-amarillo"></span>
            <span className="text-lg font-bold text-martwall-azul">{hito.anio}</span>
            <p className="mt-1">{hito.texto}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default QuienesSomos;
