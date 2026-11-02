import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { InventarioProvider } from './context/InventarioContext';
import Encabezado from './components/Encabezado';
import MenuInferior from './components/MenuInferior';
import Inicio from './pages/Inicio';
import Categoria from './pages/Categoria';
import QuienesSomos from './pages/QuienesSomos';
import NuestrasTiendas from './pages/NuestrasTiendas';
import AgregarArticulo from './pages/AgregarArticulo';
import ListadoArticulos from './pages/ListadoArticulos';
import NoEncontrada from './pages/NoEncontrada';

function App() {
  return (
    <InventarioProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-martwall-fondo pb-24 text-slate-800">
          <Encabezado />

          <main className="mx-auto max-w-5xl px-4 py-6 sm:px-5">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/categoria/:categoria" element={<Categoria />} />
              <Route path="/quienes-somos" element={<QuienesSomos />} />
              <Route path="/nuestras-tiendas" element={<NuestrasTiendas />} />
              <Route path="/agregar-articulo" element={<AgregarArticulo />} />
              <Route path="/listado-articulos" element={<ListadoArticulos />} />
              <Route path="*" element={<NoEncontrada />} />
            </Routes>
          </main>

          <MenuInferior />
        </div>
      </BrowserRouter>
    </InventarioProvider>
  );
}

export default App;
