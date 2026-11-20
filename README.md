# aplicaciones

Aplicaciones web geoespaciales de demostración de [Spatialis S.A.S.](https://spatialis.com.co)

Página de inicio con las dos demos: <https://spatialis-co.github.io/aplicaciones/>

## Demos

### SIGApp · Geovisor municipal

Visor SIG con barra de herramientas, construido con Angular y el ArcGIS Maps SDK for JavaScript (componentes de Esri y Calcite).

Abre sobre un encuadre nacional con dos capas de contexto cargadas por defecto:

| Capa | Entidades | Archivo |
|---|---|---|
| Departamentos de Colombia | 33 | `SIGApp/assets/layers/colombia-departamentos.geojson` |
| Ciudades de Colombia | 72, símbolo proporcional a población | `SIGApp/assets/layers/colombia-ciudades.geojson` |

- Demo: <https://spatialis-co.github.io/aplicaciones/SIGApp/>
- Carpeta: `SIGApp/`

### Dashboard SIG · Analítica territorial

Panel de control con mapa interactivo (MapLibre GL y deck.gl), construido con Angular. Incluye los módulos Mapa, Analítica, Alertas y Configuración. En el módulo Mapa hay un resumen por categoría y ciudad, filtros, estilos de mapa y capas.

Usa un conjunto de 1.400 eventos de demostración incluido en el repositorio (`appDashboardSIG/data/demo-events.json`), agrupados en clústeres sobre el mapa.

- Demo: <https://spatialis-co.github.io/aplicaciones/appDashboardSIG/>
- Carpeta: `appDashboardSIG/`

## Contenido del repositorio

Este repositorio contiene únicamente la **compilación publicada** de cada aplicación (archivos estáticos para GitHub Pages). El código fuente de las aplicaciones no está incluido, vive en sus propios repositorios.

Los *source maps* no se publican. SIGApp traía 423 archivos `.map` (46 MB) que GitHub Pages servía abiertamente: no aportan nada al usuario, duplican el despliegue y exponen el TypeScript original de una aplicación comercial. Se borraron junto con los comentarios `sourceMappingURL` que los referenciaban, de modo que el navegador tampoco los pide. Al compilar para publicar, conviene generar sin source maps (`ng build --configuration production` sin `sourceMap`).

Las páginas usan rutas base `/aplicaciones/SIGApp/` y `/aplicaciones/appDashboardSIG/`, por lo que deben servirse desde una carpeta llamada `aplicaciones`. Si cambia el nombre del repositorio, hay que volver a compilar las aplicaciones con la nueva ruta base.

## Capa de presentación añadida aquí

Como el fuente no está en este repositorio, los ajustes de marca y de comportamiento en móvil se aplican **por encima** de la compilación, sin tocarla:

| Archivo | Qué hace |
|---|---|
| `SIGApp/spatialis-ajustes.css` | Barra de herramientas en azul corporativo, barra desplazable en pantallas estrechas, diálogos y widgets del SDK acotados al ancho de la pantalla, área táctil de 44 px |
| `appDashboardSIG/spatialis-ajustes.css` | Paleta corporativa; por debajo de 900 px la barra lateral de 260 px pasa a navegación inferior, el buscador deja de desbordar y el panel de filtros se convierte en hoja inferior |
| `*/index.html` | Título, descripción y Open Graph propios, `lang="es"`, precarga de capas y pantalla de carga de marca mientras arranca Angular |

Ambas hojas se cargan después de los estilos compilados. **Si una aplicación se recompila desde su repositorio de código, conviene llevar estos ajustes al fuente y borrar el archivo correspondiente.**

## Correcciones aplicadas sobre la compilación

Estos cambios tocan paquetes compilados. Están anotados aquí porque **se perderán en la siguiente compilación** y hay que corregirlos en el código fuente.

### SIGApp (`SIGApp/main.js` y `SIGApp/main.js.map`)

**Configuración del proyecto anterior.** El entorno compilado apuntaba al portal privado `gisrealidad5.com`, a tres WebMaps alojados en él, a un tablero externo que se incrustaba en un `iframe`, a un manual en Google Drive y a una IP interna en un comentario; el proyecto figuraba como «Zipaquirá». Todo eso quedaba a la vista en un repositorio público, y el `.map` lo servía además en TypeScript legible.

Ahora el entorno no apunta a ningún portal ni identificador de WebMap: el mapa se arma en `chargeMap()` con capas propias. El módulo `dashboard` queda desactivado porque ya no hay tablero propio que mostrar, `documentationUrl` apunta a spatialis.com.co y el proyecto se llama «Demo Colombia». El servicio de impresión ya era el público de Esri; solo se limpió el comentario.

### Dashboard SIG (`appDashboardSIG/main-NCMCTQSL.js`)

1. **Rutas de datos absolutas.** El código pedía `/data/municipios.json` y `/data/demo-events.json`. En GitHub Pages el sitio vive en `/aplicaciones/appDashboardSIG/`, así que esas rutas resolvían contra la raíz del dominio y devolvían 404. Los eventos se salvaban por una ruta alternativa; la capa de municipios **nunca llegaba a cargar**. Ahora son relativas y resuelven contra el `<base href>`.

2. **Capa de municipios de relleno.** `municipios.json` contenía siete polígonos rectangulares. Se reemplazó por límites municipales reales de las mismas siete ciudades, con el mismo esquema de atributos (`id`, `MUNICIPIO`, `DEPARTAMENTO`, `NOMBRE`).

## Datos

| Archivo | Fuente | Licencia |
|---|---|---|
| `SIGApp/assets/layers/colombia-*.geojson` | Natural Earth | Dominio público |
| `appDashboardSIG/data/municipios.json` | geoBoundaries ADM2, salvo Barranquilla | CC BY 4.0 |
| ídem, Barranquilla | OpenStreetMap | ODbL |
| `appDashboardSIG/data/demo-events.json` | Datos de demostración sintéticos | — |

Las capas de Colombia se generan con `tools/build_colombia.py` del repositorio [geovisores](https://github.com/spatialis-co/geovisores).

## Licencia

Código de demostración, todos los derechos reservados. Consulta el archivo `LICENSE`. Las librerías de terceros conservan sus propias licencias; en el dashboard, el detalle está en `appDashboardSIG/3rdpartylicenses.txt`.

## Contacto

Spatialis S.A.S. · <https://spatialis.com.co> · desarrollo@spatialis.com.co
