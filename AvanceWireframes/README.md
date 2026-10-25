# Reporte de avance de wireframes y mockups

**Proyecto:** *Xicotepec bajo la niebla*  
**Entregable:** prototipo navegable multiplataforma  

## 1. Resumen ejecutivo

La etapa de diseño de interfaz para el prototipo está concluida. El paquete reúne **60 pantallas organizadas en tres flujos navegables**, con 20 pantallas para cada plataforma:

| Plataforma | Pantallas | Propósito |
|---|---:|---|
| Videojuego 2D en Unity | 20 | Presentar el recorrido jugable, desde el menú y el tutorial hasta el resumen de partida. |
| Aplicación móvil en Flutter | 20 | Diseñar el acceso de demostración, el seguimiento de partidas y la consulta de métricas personales. |
| PWA cultural | 20 | Explorar sitios, consultar fichas y recorrer el ranking desde una experiencia adaptable. |
| **Total** | **60** | **Un sistema de diseño y navegación coherente entre plataformas.** |

El prototipo organiza las pantallas con controles de navegación, vistas por dispositivo y fichas explicativas de propósito y componentes. Así, el entregable permite presentar y revisar los principales recorridos de usuario de forma clara.

## 2. Wireframes y flujos por plataforma

### Videojuego 2D — Unity

El flujo acompaña al jugador desde la presentación del mundo hasta el cierre de una partida, y muestra las mecánicas principales del tutorial.

| Área del flujo | Pantallas y contenido |
|---|---|
| Acceso y navegación | Splash, progreso, presentación y menú principal con nueva partida, continuar, cuenta y opciones. |
| Inicio de aventura | Introducción narrativa y selección o confirmación de partida. |
| HUD y tutorial | Escena de juego con indicadores compartidos de salud, estamina y `UltimateGauge`, objetivo activo, controles y progreso. |
| Personajes | Cambio contextual entre **Balam**, **Rayo** y **Kiro** mediante las teclas 1, 2 y 3. El tutorial representa el uso de fuerza, doble salto y activación de paneles. |
| Pausa y checkpoint | Overlay de pausa, reanudación, opciones, regreso al menú y reintento desde el punto de control. |
| Cierre de partida | Derrota, resumen con duración, puntuación, derrotas y uso de personajes, además del estado de sincronización. |

La salud y la estamina son recursos compartidos por el equipo. La `UltimateGauge` también se presenta como compartida y se utiliza para la habilidad del personaje activo. El checkpoint representa el avance de la sesión dentro del flujo del prototipo.

### Aplicación móvil — Flutter

La aplicación concentra la experiencia personal del jugador y organiza el acceso a sus resultados.

| Área del flujo | Pantallas y contenido |
|---|---|
| Acceso | Inicio de sesión y creación de cuenta de demostración, con estados de validación y recuperación representados en el recorrido. |
| Dashboard | Resumen personal, última partida y navegación hacia las secciones principales. |
| Historial | Lista de partidas con fecha, nivel, duración y puntuación; incluye filtros y actualización. |
| Detalle | Resultado, identificador, duración, puntos, derrotas y desglose de uso de Balam, Rayo y Kiro. |
| Métricas | Gráficas y comparativas de progreso y uso por personaje, con etiquetas para facilitar su lectura. |
| Conectividad | Estados de conexión, sincronización y consulta de la última copia disponible considerados en el diseño. |

### PWA cultural

La PWA amplía el universo del juego con consulta cultural y acceso a información pública desde escritorio o móvil.

| Área del flujo | Pantallas y contenido |
|---|---|
| Inicio y exploración | Portada y explorador de sitios: **UTXJ, Centro, Cruz Celestial y La Xochipila**. |
| Fichas culturales | Secciones separadas para **información documentada del lugar** y **adaptación ficticia en el videojuego**, con espacio para fuentes y revisión. |
| Personajes | Guía y fichas de Balam, Rayo y Kiro, presentados como protagonistas ficticios. |
| Ranking global | Tabla con posición, alias, puntuación y filtro por nivel. |
| Experiencia adaptable | Navegación responsive y estados de consulta sin conexión contemplados en el flujo; la instalación de la PWA se explica como parte de la experiencia. |

Las fichas preservan una distinción clara entre realidad y ficción. Los datos culturales deben acompañarse de fuentes y revisión antes de su publicación.

## 3. Consistencia y criterios de diseño UI

### Identidad visual

Las pantallas se alinean con la guía de estilos del proyecto y su paleta oficial:

| Color | HEX | Aplicación orientativa |
|---|---|---|
| Azul Niebla | `#173E56` | Estructura, navegación y superficies de identidad. |
| Oro Sendero | `#DA8B26` | Acentos, progreso, selección y acciones destacadas. |
| Verde Bosque | `#49796B` | Naturaleza, continuidad y elementos secundarios. |
| Marfil Niebla | `#F5F4ED` | Superficies de lectura y contraste en fondos oscuros. |

La paleta se complementa con Tierra (`#7B4B34`) y Verde Profundo (`#173E36`) según los criterios de la guía. El color acompaña, pero no sustituye, etiquetas, iconos y señales de estado. Los textos y controles deben conservar contraste suficiente sobre sus fondos.

### Ergonomía y legibilidad

- Como criterio para controles táctiles de PWA y Flutter, se consideran áreas de interacción de al menos **44 × 44 px**.
- La jerarquía visual distingue títulos, acciones, contenido y datos sin depender únicamente del color.
- Los gráficos y métricas se acompañan de etiquetas; los estados relevantes incluyen una señal textual o iconográfica.
- La composición se adapta al formato de escritorio, móvil o juego según la plataforma.

### Consistencia de datos entre plataformas

Los flujos comparten el mismo vocabulario del proyecto: identificador de partida, nivel, resultado, duración, puntuación, derrotas y uso de personajes. Esto establece una base coherente para conectar posteriormente el videojuego, Flutter y la PWA mediante los servicios de datos del proyecto.

Los ejemplos de cuentas, partidas, puntuaciones y sincronización que aparecen en el prototipo son demostrativos. Los wireframes especifican la experiencia de interfaz; no representan por sí mismos autenticación, API o persistencia productiva.

## 4. Conclusión del avance

El paquete de diseño reúne **60 pantallas y tres flujos navegables**, con los recorridos principales de Unity, Flutter y la PWA cultural. La etapa de diseño del prototipo queda concluida y el material está organizado para su presentación en Canvas y evaluación del lunes.

Este entregable proporciona una referencia común para comunicar la experiencia, revisar la navegación y orientar la siguiente etapa de implementación.

---

**Prototipo navegable:** abre [`index.html`](./index.html) para recorrer las pantallas.  
**Guía de estilos:** consulta [`../GuiadeEstilos/README.md`](../GuiadeEstilos/README.md).
