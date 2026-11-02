export const UMBRAL_STOCK_BAJO = 10;

export function obtenerEstadoStock(stock) {
  if (stock === 0) {
    return 'sin-stock';
  }
  if (stock < UMBRAL_STOCK_BAJO) {
    return 'bajo';
  }
  return 'ok';
}

export function obtenerAlertas(articulos) {
  return articulos
    .filter((articulo) => obtenerEstadoStock(articulo.stock) !== 'ok')
    .sort((a, b) => a.stock - b.stock);
}

export function sumarUnidades(articulos) {
  return articulos.reduce((total, articulo) => total + articulo.stock, 0);
}
