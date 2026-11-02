import { categorias } from '../data/categorias';

export const ACTIONS = {
  AGREGAR_ARTICULO: 'agregar-articulo',
  ELIMINAR_ARTICULO: 'eliminar-articulo'
};

function crearArticulo(articulos, datos) {
  const categoria = categorias.find((c) => c.nombre === datos.tipo);
  const numeros = articulos
    .filter((articulo) => articulo.tipo === datos.tipo)
    .map((articulo) => Number(articulo.codigo.split('-')[1]));
  const siguiente = Math.max(0, ...numeros) + 1;

  return {
    codigo: `${categoria.prefijo}-${String(siguiente).padStart(2, '0')}`,
    ...datos
  };
}

export function inventarioReducer(articulos, action) {
  switch (action.type) {
    case ACTIONS.AGREGAR_ARTICULO:
      return [...articulos, crearArticulo(articulos, action.payload)];
    case ACTIONS.ELIMINAR_ARTICULO:
      return articulos.filter((articulo) => articulo.codigo !== action.payload.codigo);
    default:
      return articulos;
  }
}
