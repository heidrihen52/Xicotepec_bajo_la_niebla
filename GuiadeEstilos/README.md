# Guía de estilos de Lumbre Studio y Xicotepec bajo la niebla

**Identidad visual del proyecto integrador · Referencia para Unity, React/PWA y Flutter**

[Consultar la guía de estilos en Figma](https://www.figma.com/design/ZJrPFdQ3jlpdhYKwOTaUvg/Lumbre-Studio-%C2%B7-Gu%C3%ADa-de-estilos-%C2%B7-Xicotepec-bajo-la-niebla?node-id=0-1&t=2pv3G0tiynsRhwF0-1)

Esta guía reúne los criterios de identidad, color, tipografía, iconografía y componentes para las plataformas del proyecto. Busca conservar una apariencia reconocible entre productos con necesidades distintas: exploración y combate en Unity, consulta cultural en la PWA y seguimiento personal en Flutter.

> La paleta y las familias tipográficas de esta guía son la referencia oficial común. Las asociaciones psicológicas son intenciones de diseño, no efectos universales medidos. Las medidas y variantes de marca que no provienen de un manual geométrico oficial se consideran criterios de producción propuestos y deben revisarse con los originales.

## 1. Identidad y voz

### Lumbre Studio

Identifica al equipo que desarrolla el proyecto. El arte original del estudio debe conservarse sin deformaciones ni redibujos; se usa en créditos, presentaciones o aperturas cuando corresponda.

### Xicotepec bajo la niebla

Identifica el videojuego y su ecosistema cultural y móvil. Su dirección visual combina paisaje, niebla, exploración y aventura. El isotipo no reemplaza al imagotipo cuando se necesita identificar el proyecto por nombre.

### Personalidad y contenido

- **Curiosa:** invita a explorar lugares y conocer su contexto.
- **Cercana:** comunica en español con mensajes breves y comprensibles.
- **Aventurera:** expresa misterio mediante escenarios y narrativa.
- **Cuidadosa con el contenido:** diferencia los datos investigados de la ficción.

La historia del hechicero, los poderes y los sucesos fantásticos es ficticia. Las fichas culturales deben indicar sus fuentes y revisión; no deben presentar elementos narrativos del juego como descripciones de prácticas o hechos históricos reales.

## 2. Paleta oficial

La referencia digital es sRGB. HEX y RGB son valores exactos; HSL y CMYK se redondean al entero más cercano. CMYK es una conversión matemática orientativa y no una especificación de impresión calibrada.

| Color / token | HEX | RGB (0–255) | HSL | CMYK aprox. (C / M / Y / K) | Uso y asociación buscada |
|---|---|---|---|---|---|
| **Azul niebla** | `#173E56` | `23, 62, 86` | `203°, 58%, 21%` | `73 / 28 / 0 / 66` | Estructura y navegación. Sugiere profundidad, confianza y ambiente brumoso. |
| **Oro sendero** | `#DA8B26` | `218, 139, 38` | `34°, 71%, 50%` | `0 / 36 / 83 / 15` | Acento, selección y progreso. Evoca luz, energía, descubrimiento y avance. |
| **Verde bosque** | `#49796B` | `73, 121, 107` | `162°, 25%, 38%` | `40 / 0 / 12 / 53` | Superficie secundaria y estado positivo. Sugiere naturaleza, equilibrio y continuidad. |
| **Marfil niebla** | `#F5F4ED` | `245, 244, 237` | `53°, 29%, 95%` | `0 / 0 / 3 / 4` | Fondo de lectura y texto en superficies oscuras. Sugiere calma y reduce la dureza del blanco puro. |
| **Tierra** | `#7B4B34` | `123, 75, 52` | `19°, 41%, 34%` | `0 / 39 / 58 / 52` | Detalle, ilustración y acento terroso. Remite al suelo, madera y materialidad del entorno. |
| **Verde profundo** | `#173E36` | `23, 62, 54` | `168°, 46%, 17%` | `63 / 0 / 13 / 76` | Fondo oscuro, marco y navegación inmersiva. Sugiere vegetación densa y misterio. |

Estas asociaciones describen la intención del equipo y no son afirmaciones psicológicas universales. La percepción depende del contexto, la cultura y la combinación de colores.

### Reglas de uso

- Conserva estos seis colores como paleta común. No agregues colores de marca sin documentar su función y revisar el contraste.
- Para interfaces informativas, usa Marfil niebla como superficie clara y Azul niebla o Verde profundo como texto principal. En escenas de juego, establece una base contrastante detrás del HUD si el fondo cambia.
- Oro sendero es un acento, no un color para bloques extensos. No uses texto Marfil pequeño sobre Oro sendero.
- Tierra es apropiado para detalles y contornos decorativos; no lo uses como texto pequeño sobre fondos oscuros.
- Las líneas de cuadrícula o texturas son decorativas: no deben cruzar textos ni sustituir el contorno visible de un control.
- Las asociaciones de estado no dependen exclusivamente del color: usa también etiquetas, formas, números, patrones o iconos.
- Para impresión, revisa una prueba física y el perfil ICC de destino; las cifras CMYK de esta tabla no sustituyen una conversión de imprenta.

### Temas y contraste

**Tema oscuro**

- Fondo: Verde profundo o Azul niebla.
- Superficie elevada: Verde bosque, verificando texto y elementos adyacentes.
- Texto principal: Marfil niebla.
- Acción/acento: Oro sendero, con texto oscuro solo después de comprobar contraste en el tamaño real.

**Tema claro**

- Fondo: Marfil niebla.
- Tarjetas: Marfil niebla con borde funcional de contraste suficiente; Verde bosque puede usarse en superficies y texto después de comprobar cada combinación.
- Texto principal: Azul niebla o Verde profundo.
- Acción primaria: Azul niebla con texto Marfil niebla.
- Acento: Oro sendero para elementos no textuales o grandes; no usarlo como texto pequeño sobre Marfil.

Relaciones de contraste calculadas para colores sRGB opacos:

| Texto / fondo | Contraste aprox. | Aplicación |
|---|---:|---|
| Marfil niebla / Verde profundo | 10.71:1 | Texto normal y grande. |
| Marfil niebla / Azul niebla | 10.24:1 | Texto normal y grande. |
| Marfil niebla / Tierra | 6.57:1 | Texto normal y grande. |
| Marfil niebla / Verde bosque | 4.50:1 | Texto normal; comprobar el valor sin redondear en la herramienta de validación. |
| Azul niebla / Oro sendero | 4.14:1 | No alcanza 4.5:1 para texto normal; limitar a texto grande o elementos no textuales tras revisar el contexto. |
| Marfil niebla / Oro sendero | 2.47:1 | No usar para texto ni iconos funcionales. |

Como referencia, WCAG 2.2 AA pide 4.5:1 para texto normal, 3:1 para texto grande y 3:1 para componentes gráficos esenciales respecto a colores adyacentes. Las mediciones de colores planos no validan automáticamente fotografía, transparencias, sombras, estados interactivos ni texto sobre el escenario. Revisa cada combinación renderizada y no redondees una medición para hacerla pasar.

## 3. Tipografía

| Familia | Rol | Jerarquía y uso |
|---|---|---|
| **Cinzel** | Títulos de marca y narrativa. | Título principal y encabezados breves; evitar párrafos, instrucciones de HUD y texto pequeño. |
| **Nunito Sans** | Interfaz y lectura. | Cuerpo, navegación, botones, fichas culturales, formularios, mensajes y HUD. |
| **IBM Plex Mono** | Datos compactos. | Temporizadores, puntuación, IDs de partida y métricas comparables. |

### Escala inicial

Los tamaños son referencias de jerarquía, no límites rígidos. En web utiliza preferentemente `rem`; en Flutter respeta el escalado del sistema; en Unity verifica el Canvas y la distancia de lectura.

| Nivel | Web y móvil | Unity / HUD |
|---|---:|---:|
| Título principal | 32–40 px | 32–40 unidades de diseño |
| Título de sección | 24–30 px | 24–30 unidades de diseño |
| Subtítulo | 18–22 px | 18–22 unidades de diseño |
| Texto de lectura | 16–18 px | 16–18 unidades de diseño |
| Etiqueta / dato secundario | 12–14 px; no bajar de 12 px sin prueba de lectura | 14 unidades de diseño como mínimo recomendado |

Usa pesos reales incluidos en los archivos de fuente; evita negritas sintéticas. No uses mayúsculas sostenidas en párrafos. Mantén los datos IBM Plex Mono alineados cuando se comparen cifras y limita Cinzel a textos breves.

### Integración técnica

**Unity — TextMeshPro**

1. Incorporar los archivos de fuente y sus licencias al proyecto; crear un `TMP_FontAsset` por familia y peso necesario mediante TextMeshPro Font Asset Creator.
2. Asignar Cinzel a títulos, Nunito Sans a interfaz y diálogos, e IBM Plex Mono a cifras, temporizadores e identificadores mediante estilos reutilizables.
3. Configurar atlas con caracteres latinos necesarios, incluidas vocales acentuadas, `ñ`, signos de apertura y dígitos; preparar fuentes fallback para glifos ausentes.
4. Usar Canvas Scaler y ajustes de línea para adaptar el texto. No reducir automáticamente hasta una escala ilegible; ampliar el contenedor cuando haga falta.
5. Revisar kerning, contraste, legibilidad sobre fondos cambiantes y comportamiento en la resolución de destino.

**React — PWA**

- Alojar las fuentes localmente y declarar los pesos disponibles con `@font-face` y `font-display: swap`; configurar su política de caché/offline junto con la estrategia de la PWA.
- Definir tokens de familia y jerarquía en estilos compartidos. Fallbacks sugeridos: `Cinzel, Georgia, serif`; `Nunito Sans, Arial, sans-serif`; `IBM Plex Mono, Consolas, monospace`.
- Usar `rem`, permitir zoom y reflujo, y probar ancho móvil, texto ampliado y funcionamiento sin conexión.
- No declarar pesos que no estén incluidos. Verificar acentos y glifos antes de ajustar cortes o alturas.

**Flutter**

- Incorporar fuentes y pesos en `assets/fonts/` y declararlos en `pubspec.yaml` bajo `flutter: fonts:`.
- Crear un `ThemeData`/`TextTheme` con roles compartidos: Cinzel para títulos, Nunito Sans para lectura/controles e IBM Plex Mono para datos.
- Respetar `TextScaler`, evitar alturas fijas que recorten contenido y probar dispositivos pequeños, acentos y opciones de accesibilidad.
- Conservar avisos de licencia en la distribución de la aplicación.

Los archivos de fuentes no están confirmados en esta carpeta de guía. La integración descrita es una especificación técnica: antes de implementarla, incorporar las fuentes autorizadas y sus licencias al proyecto.

## 4. Variantes de color para personajes y estados

Los colores siguientes identifican elementos de interfaz; no limitan el color de piel, vestuario ni dirección de arte. Aplica la identidad de personaje a un marco, etiqueta, icono o acento. La selección también debe mostrar nombre o símbolo, no solo color.

| Personaje | Identificador | Apoyo permitido | Aplicación sugerida |
|---|---|---|---|
| **Balam** | Tierra `#7B4B34` | Oro sendero `#DA8B26` | Ficha, selección y acciones de fuerza/Ground Slam. |
| **Rayo** | Azul niebla `#173E56` | Oro sendero `#DA8B26` | Ficha, selección, doble salto y resortera. En fondos oscuros, añadir superficie o borde legible. |
| **Kiro** | Verde bosque `#49796B` | Verde profundo `#173E36` | Ficha, selección, dron, paneles y acciones tecnológicas. |

Salud, estamina y `UltimateGauge` son recursos **compartidos** entre Balam, Rayo y Kiro, según la definición del proyecto. Su valor no cambia al alternar el personaje.

| Estado global | Color base | Variaciones de interfaz permitidas | Regla |
|---|---|---|---|
| **Salud** | Verde bosque `#49796B` | Verde profundo `#173E36` para fondo/contorno; Marfil niebla `#F5F4ED` para texto o tramo vacío. | Mostrar valor y máximo. Diferenciar daño con forma, segmento o animación además del color. |
| **Estamina** | Oro sendero `#DA8B26` | Tierra `#7B4B34` como borde/acento; Marfil niebla para texto o tramo vacío. | Distinguirla de salud mediante icono o etiqueta; mostrar gasto y recuperación. |
| **Ultimate** | Azul niebla `#173E56` | Oro sendero como acento de disponibilidad; Verde profundo como fondo; Marfil niebla para etiqueta/estado inactivo. | Mostrar carga y estado listo en un mismo lugar. Acompañar brillo o cambio de color con icono, patrón o etiqueta. |

Las reglas aplican a indicadores de interfaz, no obligan a teñir los efectos o poderes del juego. Contrastar cada elemento sobre los fondos reales y permitir interpretar el estado sin color.

## 5. Imagotipo e isotipo

**Imagotipo:** combinación del símbolo y el nombre “Xicotepec bajo la niebla”, que debe conservar su proporción y lectura como una sola composición. Puede acompañarse de la identidad de Lumbre Studio en aperturas o créditos, sin confundir ambas marcas.

**Isotipo:** símbolo del proyecto sin el nombre, para espacios compactos como favicon, avatar o indicador de carga. Debe seguir siendo reconocible a tamaño reducido y no sustituir el nombre cuando la marca no haya sido identificada previamente.

### Variantes y uso

- Usar los artes originales sin estirar, inclinar, recortar, redibujar, cambiar proporciones internas ni añadir efectos.
- Sobre fondos oscuros o claros, usar solo una variante oficial que mantenga legibilidad. No crear variantes aplicando filtros al raster original.
- En una fotografía o escena de juego, colocar una base de contraste y respetar el espacio libre.
- Como referencia provisional de producción, definir **X** como la altura de las mayúsculas del nombre en el imagotipo y dejar al menos **0.5X** libre en todos sus lados. Si no puede medirse, usar 1/4 de la altura total del bloque como aproximación.
- Como referencia digital, evitar reducir el imagotipo por debajo de 160 px de ancho o 32 px de alto sin probar su lectura; usar isotipo en espacios menores.
- Las medidas y variantes anteriores no son una geometría certificada del arte maestro. Confirmarlas con los archivos originales antes de cerrar especificaciones de impresión o producción.

Referencia del logo del proyecto: [Xicotepec bajo la niebla](../images/xicotepec_bajo_la_niebla.png). La guía no contiene una plantilla vectorial ni medidas oficiales de construcción.

## 6. Iconografía

Usar iconos vectoriales o sprites nítidos, de silueta reconocible y grosor coherente. Lucide puede servir como familia de referencia para navegación y acciones genéricas; los iconos propios de las habilidades deben diseñarse y validarse como familia separada.

| Categoría | Elementos | Criterios |
|---|---|---|
| **Navegación** | Inicio, volver, cerrar, menú, mapa/sitios, perfil, historial y ajustes. | Posición y forma previsibles; añadir etiqueta si el pictograma no es inequívoco. |
| **Estado / HUD** | Salud, estamina, Ultimate, personaje activo, objetivo, checkpoint, conexión y sincronización. | Mostrar estados lleno, parcial, vacío, disponible, bloqueado y error con más de una señal. |
| **Acción** | Ataque, habilidad, salto, interacción, activar panel, confirmar, reintentar y continuar. | Diferenciar acción primaria/secundaria y mostrar atajo (J, E, R, 1/2/3) cuando ayude. |

Reglas comunes:

- Retícula de referencia: 24 × 24; trazo consistente y extremos redondeados cuando corresponda.
- Tamaños de interfaz habituales: 20, 24 y 32 px; ajustar ópticamente solo después de probar a tamaño real.
- No mezclar emoji, iconos 3D o familias de trazos incompatibles en una misma interfaz.
- Los controles de solo icono deben tener nombre accesible; acompañar con texto las acciones ambiguas.
- Objetivo táctil recomendado: al menos 44 × 44 CSS px en PWA y Flutter, aunque el icono visible sea menor.
- En Unity, acompañar indicadores esenciales con texto o forma distinguible; en web y Flutter, conservar semántica accesible.

Ejemplos de asignación: `house` para Inicio, `compass` para Explorar, `map` para Lugares, `trophy` para ranking, `heart` para salud, `zap` para estamina, `pause` para pausa, `flag` para checkpoint y `wifi-off` para sin conexión. La asignación de `zap` a estamina debe mantenerse coherente en el HUD.

## 7. Componentes, estados y consistencia

### Espaciado y forma

Usar una escala de espaciado de **4, 8, 12, 16, 24, 32, 48 y 64 px** en interfaces digitales. Como referencia, aplicar 16–24 px de relleno a tarjetas y 8–12 px entre elementos relacionados. Mantener esquinas rectas en marcos editoriales; reservar radios pequeños y consistentes (por ejemplo, 4 px) para botones y campos. Evitar combinar arbitrariamente sombras, radios y estilos.

### Estados de control

| Estado | Criterio visual y funcional |
|---|---|
| Normal | Texto y fondo contrastantes; etiqueta breve y clara. |
| Hover | Cambio visible de superficie o contorno sin perder contraste. |
| Presionado | Cambio de superficie o desplazamiento visual mínimo, sin reducir el área activa. |
| Foco | Aro visible separado del control; usar Azul niebla en superficies claras y Oro sendero en fondos oscuros, comprobando contraste con el fondo. |
| Deshabilitado | Señal visual y semántica de indisponibilidad; explicar la causa cuando sea necesario. |
| Cargando | Comunicar progreso y evitar envíos repetidos de la misma acción. |
| Error | Mostrar icono y texto ligado al campo o acción; conservar los datos escritos cuando sea seguro. |

### Aplicación por producto

- **Unity:** Nunito Sans para HUD y controles; Cinzel para títulos. Usar TextMeshPro, base contrastante cuando el escenario cambie y escalado del Canvas revisado en el dispositivo objetivo.
- **React/PWA:** cargar fuentes locales, utilizar tokens compartidos, respetar jerarquía de encabezados, foco de teclado y navegación adaptable.
- **Flutter:** reutilizar el tema tipográfico, respetar escalado del sistema y etiquetas semánticas; no representar estadísticas únicamente con color.

## 8. Figma y archivos de implementación

La referencia de diseño disponible es la [guía de estilos en Figma](https://www.figma.com/design/ZJrPFdQ3jlpdhYKwOTaUvg/Lumbre-Studio-%C2%B7-Gu%C3%ADa-de-estilos-%C2%B7-Xicotepec-bajo-la-niebla?node-id=0-1&t=2pv3G0tiynsRhwF0-1). El enlace sirve como referencia de diseño; no implica que haya un plugin local, láminas SVG, tokens o un paquete de importación dentro de esta carpeta.

Para implementar:

1. Mantener una sola fuente de verdad para colores y estilos tipográficos.
2. Replicar nombres/roles en los tokens CSS, `ThemeData` de Flutter y estilos o assets de Unity.
3. Verificar que cada app use las mismas versiones de color y familia; comprobar por separado tamaño, contraste y comportamiento de plataforma.
4. Revisar derechos de redistribución de las fuentes y la licencia de cualquier familia de iconos antes de incorporarlas.
5. Actualizar esta guía cuando se apruebe una modificación a colores, tipografía, iconos o marca.

## 9. Fuentes y referencias

- [Cinzel — Google Fonts](https://fonts.google.com/specimen/Cinzel)
- [Nunito Sans — Google Fonts](https://fonts.google.com/specimen/Nunito+Sans)
- [IBM Plex Mono — Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Mono)
- [Lucide](https://lucide.dev/) y [su licencia](https://lucide.dev/license)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) y [contraste mínimo](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [Guía de estilos en Figma](https://www.figma.com/design/ZJrPFdQ3jlpdhYKwOTaUvg/Lumbre-Studio-%C2%B7-Gu%C3%ADa-de-estilos-%C2%B7-Xicotepec-bajo-la-niebla?node-id=0-1&t=2pv3G0tiynsRhwF0-1)

---
*Lumbre Studio · Universidad Tecnológica de Xicotepec de Juárez*
