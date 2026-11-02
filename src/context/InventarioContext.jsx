import { createContext, useReducer } from 'react';
import { inventarioReducer } from './inventarioReducer';
import { articulosIniciales } from '../data/inventario';

export const InventarioContext = createContext();

export function InventarioProvider({ children }) {
  const [articulos, dispatch] = useReducer(inventarioReducer, articulosIniciales);

  return (
    <InventarioContext.Provider value={{ articulos, dispatch }}>
      {children}
    </InventarioContext.Provider>
  );
}
