MartWall - Control de inventario (Semana 2)
==========================================

Proyecto de la Semana 2 de Desarrollo Frontend II (PFY2202).

Seguimos con el sitio de MartWall, un supermercado de barrio inventado con 4 tiendas
en Santiago. Esta semana se agregó un estado global para los artículos del inventario,
un menú nuevo con dos páginas (agregar artículo y listado) y Tailwind CSS para los estilos.


Qué hay de nuevo
----------------

- Estado global: la lista de artículos se guarda con Context y useReducer. Todas las
  páginas leen la misma lista, así que cuando se agrega o elimina un artículo se
  actualiza el panel, las categorías, las alertas y el listado al mismo tiempo.
  Cada artículo tiene nombre, marca, tipo de producto, precio y stock.

- Menú de gestión (arriba a la derecha) con dos páginas nuevas:
    * Agregar artículo: formulario para ingresar un artículo nuevo. Valida que no
      queden campos vacíos, que el precio sea mayor a 0 y que el stock no sea negativo.
      El tipo se elige de una lista, así no se pueden crear categorías que no existen.
    * Listado de artículos: tabla con todos los artículos del inventario y un botón
      para eliminar.

- Tailwind CSS: todo el sitio usa clases de Tailwind. Los colores de MartWall se
  agregaron en tailwind.config.js dentro de theme.extend.colors.

- Vite: el proyecto ahora se crea y se ejecuta con Vite en vez de Create React App.


Mejoras según la retroalimentación de la Semana 1
-------------------------------------------------

- Se migró de Create React App a Vite.
- La página de categoría obtiene el parámetro con useParams (ya no se corta la URL).
- Los menús y la barra de categorías usan NavLink para marcar el enlace activo.
- App.js solo tiene las rutas; cada página toma sus datos del estado global o de
  la carpeta data.
- El umbral de stock bajo (10) y el cálculo del estado del stock están en un solo
  lugar (utils/stock.js), con una función en vez de ternarios anidados.
- Se separaron componentes: TablaProductos, InsigniaStock, ListaAlertas,
  TarjetaTienda y FormularioArticulo.


Rutas
-----

/                       Panel de inventario
/categoria/:categoria   Productos de una categoría
/agregar-articulo       Formulario para agregar un artículo
/listado-articulos      Tabla con todos los artículos
/quienes-somos          Quiénes somos
/nuestras-tiendas       Nuestras tiendas
*                       Página no encontrada


Tecnologías
-----------

- React + Vite
- React Router (react-router-dom)
- Context, useReducer y useState
- Tailwind CSS 3


Cómo ejecutarlo
---------------

Hay que tener Node.js instalado. En la terminal (CMD), dentro de la carpeta del proyecto:

    npm install
    npm run dev

El sitio se abre en http://localhost:5173

Nota: los artículos agregados quedan guardados mientras la página está abierta.
Si se recarga el navegador, el inventario vuelve a los datos iniciales.
