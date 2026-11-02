import FormularioArticulo from '../components/FormularioArticulo';

function AgregarArticulo() {
  return (
    <section className="max-w-3xl">
      <h1 className="text-3xl font-bold text-martwall-marino">Agregar artículo</h1>
      <p className="mb-5 mt-1 text-martwall-gris">
        Ingresa los datos del nuevo artículo. Se suma al inventario y aparece en el listado, en su categoría y en las alertas si tiene poco stock.
      </p>
      <FormularioArticulo />
    </section>
  );
}

export default AgregarArticulo;
