function TarjetaTienda({ tienda }) {
  return (
    <div className="grid grid-cols-2 overflow-hidden rounded-lg border border-martwall-borde bg-white text-sm md:grid-cols-[110px_1.5fr_1.6fr_1fr_1.3fr_0.9fr]">
      <div className="col-span-2 flex items-center bg-martwall-azul px-4 py-2 font-bold text-white md:col-span-1 md:justify-center md:text-center">
        {tienda.comuna}
      </div>
      <div className="col-span-2 flex flex-col justify-center gap-1 px-4 py-3 md:col-span-1">
        <h3 className="text-base font-bold text-martwall-marino">{tienda.nombre}</h3>
        <span>{tienda.direccion}</span>
      </div>
      <div className="flex flex-col justify-center gap-1 px-4 py-3">
        <small className="text-[11px] uppercase tracking-wide text-martwall-gris">Horario</small>
        <span>{tienda.horario}</span>
      </div>
      <div className="flex flex-col justify-center gap-1 px-4 py-3">
        <small className="text-[11px] uppercase tracking-wide text-martwall-gris">Teléfono</small>
        <span>{tienda.telefono}</span>
      </div>
      <div className="flex flex-col justify-center gap-1 px-4 py-3">
        <small className="text-[11px] uppercase tracking-wide text-martwall-gris">Encargado/a</small>
        <span>{tienda.encargado}</span>
      </div>
      <div className="flex flex-col justify-center gap-1 px-4 py-3">
        <small className="text-[11px] uppercase tracking-wide text-martwall-gris">Estacionamiento</small>
        <span>{tienda.estacionamiento ? 'Sí' : 'No'}</span>
      </div>
    </div>
  );
}

export default TarjetaTienda;
