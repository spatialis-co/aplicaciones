# aplicaciones

Aplicaciones web geoespaciales de demostración de [Spatialis S.A.S.](https://spatialis.com.co)

Página de inicio con las dos demos: https://spatialis-co.github.io/aplicaciones/

## Demos

### SIGApp

Visor SIG con barra de herramientas, construido con Angular y componentes de ArcGIS (Esri y Calcite).

- Demo: https://spatialis-co.github.io/aplicaciones/SIGApp/
- Carpeta: SIGApp/

### Dashboard SIG

Panel de control con mapa interactivo (MapLibre GL y deck.gl), construido con Angular. Incluye los módulos Mapa, Analítica, Alertas y Configuración. En el módulo Mapa hay un resumen por categoría y ciudad, filtros, estilos de mapa y capas.

Usa un conjunto de eventos de demostración incluido en el repositorio (appDashboardSIG/data/demo-events.json), con puntos agrupados en clústeres sobre el mapa.

- Demo: https://spatialis-co.github.io/aplicaciones/appDashboardSIG/
- Carpeta: appDashboardSIG/

## Contenido del repositorio

Este repositorio contiene únicamente la compilación publicada de cada aplicación (archivos estáticos para GitHub Pages). El código fuente de las aplicaciones no está incluido.

Las páginas usan rutas base /aplicaciones/SIGApp/ y /aplicaciones/appDashboardSIG/, por lo que deben servirse desde una carpeta llamada aplicaciones. Si cambia el nombre del repositorio, hay que volver a compilar las aplicaciones con la nueva ruta base.

## Licencia

Código de demostración, todos los derechos reservados. Consulta el archivo LICENSE. Las librerías de terceros conservan sus propias licencias; en el dashboard, el detalle está en appDashboardSIG/3rdpartylicenses.txt.

## Contacto

Spatialis S.A.S. - https://spatialis.com.co - desarrollo@spatialis.com.co
