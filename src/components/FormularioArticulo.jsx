import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { InventarioContext } from '../context/InventarioContext';
import { ACTIONS } from '../context/inventarioReducer';
import { categorias } from '../data/categorias';

const estiloCampo = 'w-full rounded-lg bg-white border border-martwall-borde px-3 py-2 focus:border-martwall-azul focus:outline-none focus:ring-2 focus:ring-blue-200';
const estiloEtiqueta = 'mb-1 block text-sm font-semibold text-martwall-marino';

function FormularioArticulo() {
  const { dispatch } = useContext(InventarioContext);

  const [nombre, setNombre] = useState('');
  const [marca, setMarca] = useState('');
  const [tipo, setTipo] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [error, setError] = useState('');
  const [agregado, setAgregado] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setAgregado('');

    if (nombre.trim() === '' || marca.trim() === '' || tipo === '' || precio === '' || stock === '') {
      setError('Completa todos los campos antes de guardar.');
      return;
    }

    if (Number(precio) <= 0) {
      setError('El precio debe ser mayor a 0.');
      return;
    }

    if (Number(stock) < 0 || !Number.isInteger(Number(stock))) {
      setError('El stock debe ser un número entero, 0 o mayor.');
      return;
    }

    dispatch({
      type: ACTIONS.AGREGAR_ARTICULO,
      payload: {
        nombre: nombre.trim(),
        marca: marca.trim(),
        tipo,
        precio: Number(precio),
        stock: Number(stock)
      }
    });

    setAgregado(nombre.trim());
    setError('');
    setNombre('');
    setMarca('');
    setTipo('');
    setPrecio('');
    setStock('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-martwall-borde bg-white p-5 sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className={estiloEtiqueta}>Nombre del artículo</label>
          <input id="nombre" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ej: Aceite maravilla (1 L)" className={estiloCampo} />
        </div>
        <div>
          <label htmlFor="marca" className={estiloEtiqueta}>Marca</label>
          <input id="marca" type="text" value={marca} onChange={(e) => setMarca(e.target.value)} placeholder="Ej: Chef" className={estiloCampo} />
        </div>
        <div>
          <label htmlFor="tipo" className={estiloEtiqueta}>Tipo de producto</label>
          <select id="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} className={estiloCampo}>
            <option value="">Selecciona un tipo</option>
            {categorias.map((categoria) => (
              <option key={categoria.nombre} value={categoria.nombre}>{categoria.nombre}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="precio" className={estiloEtiqueta}>Precio ($)</label>
            <input id="precio" type="number" min="1" value={precio} onChange={(e) => setPrecio(e.target.value)} className={estiloCampo} />
          </div>
          <div>
            <label htmlFor="stock" className={estiloEtiqueta}>Stock</label>
            <input id="stock" type="number" min="0" step="1" value={stock} onChange={(e) => setStock(e.target.value)} className={estiloCampo} />
          </div>
        </div>
      </div>

      {error && <p className="rounded-lg bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">{error}</p>}

      {agregado && (
        <p className="rounded-lg bg-green-100 px-4 py-2 text-sm font-semibold text-green-800">
          "{agregado}" se agregó al inventario.{' '}
          <Link to="/listado-articulos" className="underline">Ver listado</Link>
        </p>
      )}

      <button type="submit" className="rounded-full bg-martwall-amarillo px-6 py-2.5 font-bold text-martwall-marino hover:brightness-95">
        Guardar artículo
      </button>
    </form>
  );
}

export default FormularioArticulo;
