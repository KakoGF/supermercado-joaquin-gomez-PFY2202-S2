import { Link } from 'react-router-dom';

function NoEncontrada() {
  return (
    <section className="rounded-xl bg-white px-5 py-10 text-center">
      <h1 className="text-3xl font-bold text-martwall-marino">Ups, esta sección no existe</h1>
      <p className="mb-6 mt-2">Puede que la dirección esté mal escrita.</p>
      <Link to="/" className="inline-block rounded-full bg-martwall-amarillo px-6 py-2.5 font-bold text-martwall-marino">
        Ir al panel de inventario
      </Link>
    </section>
  );
}

export default NoEncontrada;
