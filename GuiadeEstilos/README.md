<<<<<<< HEAD
# Guía de estilos de Lumbre Studio y Xicotepec bajo la niebla

**Identidad visual del proyecto integrador · Versión 1.0**

## Guía de estilos
[Ver Guía de Estilos en Figma](https://www.figma.com/design/ZJrPFdQ3jlpdhYKwOTaUvg/Lumbre-Studio-%C2%B7-Gu%C3%ADa-de-estilos-%C2%B7-Xicotepec-bajo-la-niebla?node-id=0-1&t=2pv3G0tiynsRhwF0-1)

Esta guía reúne las reglas de marca, color, tipografía e iconografía del proyecto. Conserva el lenguaje visual usado en el Canvas, el Gantt y el organigrama: verdes profundos, superficies crema, detalles dorados y bordes cobrizos.

La identidad se aplica al videojuego en **Unity**, a la **PWA cultural** y a la **aplicación Flutter**. Cada producto cumple una función distinta, pero mantiene una apariencia reconocible.

> La entrega incluye seis láminas SVG y un importador local que construye capas nativas en Figma. No es un archivo `.fig` ni un diseño publicado en una cuenta de Figma. La ejecución dentro de Figma requiere importar o ejecutar los recursos en el editor.

## Contenido del paquete

| Recurso | Contenido |
| :--- | :--- |
| `boards/01_Identidad.svg` | Contexto de las dos marcas y relación entre plataformas. |
| `boards/02_Color.svg` | Doce colores con HEX, RGB, HSL y CMYK orientativo. |
| `boards/03_Tipografia.svg` | Familias libres, jerarquía y tamaños web y móvil. |
| `boards/04_Marcas.svg` | Imagotipos e isotipos simplificados, variantes y reglas de uso. |
| `boards/05_Iconografia.svg` | Veintiún iconos agrupados por función. |
| `boards/06_Componentes.svg` | Ejemplos de interfaz y combinaciones de contraste. |
| `figma/code.js` | Importador que genera las láminas, estilos y componentes nativos. |
| `figma/manifest.settings.json` | Configuración de referencia; no contiene un ID registrado de plugin. |
| `figma/guide.scene.json` | Datos del diseño que usa el importador. No necesita importarse manualmente. |
| `assets/` | Logos originales y seis isotipos vectoriales simplificados. |
| `fonts/` | Tres fuentes variables originales y sus licencias. |
| `icons/` | SVG de Lucide y licencia original. |
| `tokens.json` | Valores de color, familias y escala de espaciado. |
| `tokens.css` | Variables y estilos de referencia para la PWA. |
| `Vista_general.png` | Vista de conjunto de las seis láminas. |

## 1 Identidad de marca

### Lumbre Studio

Es la identidad del equipo de desarrollo. La llama comunica creación y energía; la letra **L** mantiene una relación con el nombre. Las tres formas del símbolo provienen del concepto inicial del logo y se conservan como recurso gráfico; no representan el número actual de integrantes.

### Xicotepec bajo la niebla

Es la marca del videojuego y de su ecosistema. Las montañas, la niebla y el amuleto conectan con la exploración y con el relato fantástico. El dorado señala la luz y el progreso de la aventura.

### Personalidad y voz

- **Curiosa:** invita a descubrir lugares y conocer su contexto.
- **Cercana:** utiliza mensajes breves y claros en español.
- **Aventurera:** expresa misterio mediante escenarios y narrativa.
- **Cuidadosa con el contenido:** diferencia los datos investigados de la ficción.

Las fichas culturales necesitan fuentes y revisión. El hechicero, los poderes y los sucesos fantásticos no se presentan como descripciones de prácticas reales de la comunidad.

## 2 Paleta y codificaciones

La referencia digital es **sRGB**. Los valores HEX y RGB representan los mismos colores; HSL ofrece una forma alternativa de definirlos en interfaces.

| Color | HEX | RGB 0–255 | HSL | CMYK % C / M / Y / K |
| :--- | :--- | :--- | :--- | :--- |
| Bosque | `#112F28` | `17, 47, 40` | `166°, 47%, 13%` | `64 / 0 / 15 / 82` |
| Jade | `#285A49` | `40, 90, 73` | `160°, 38%, 25%` | `56 / 0 / 19 / 65` |
| Marfil | `#EFE8CE` | `239, 232, 206` | `47°, 51%, 87%` | `0 / 3 / 14 / 6` |
| Niebla | `#C6D3C4` | `198, 211, 196` | `112°, 15%, 80%` | `6 / 0 / 7 / 17` |
| Papel | `#DCE3D4` | `220, 227, 212` | `88°, 21%, 86%` | `3 / 0 / 7 / 11` |
| Oro | `#E6AE52` | `230, 174, 82` | `37°, 75%, 61%` | `0 / 24 / 64 / 10` |
| Cobre | `#8F6642` | `143, 102, 66` | `28°, 37%, 41%` | `0 / 29 / 54 / 44` |
| Fuego | `#F57C00` | `245, 124, 0` | `30°, 100%, 48%` | `0 / 49 / 100 / 4` |
| Éxito | `#1E6B4E` | `30, 107, 78` | `157°, 56%, 27%` | `72 / 0 / 27 / 58` |
| Aviso | `#875719` | `135, 87, 25` | `34°, 69%, 31%` | `0 / 36 / 81 / 47` |
| Error | `#A93636` | `169, 54, 54` | `0°, 52%, 44%` | `0 / 68 / 68 / 34` |
| Info | `#246388` | `36, 99, 136` | `202°, 58%, 34%` | `74 / 27 / 0 / 47` |

Los valores CMYK se calcularon con una conversión matemática básica y redondeo. **No son equivalencias de imprenta calibradas**: la salida depende del papel, la tinta y el perfil ICC. No se asignan códigos Pantone sin una comparación física.

### Función de cada color

| Color | Función |
| :--- | :--- |
| Bosque | Fondo principal, navegación y texto sobre superficies claras. |
| Jade | Superficies elevadas, botones secundarios y bordes funcionales en claro. |
| Marfil | Texto principal en oscuro y áreas de lectura. |
| Niebla | Texto secundario sobre fondos oscuros. |
| Papel | Tarjetas, tablas y formularios claros. |
| Oro | Botón principal, foco, hitos y detalles destacados. |
| Cobre | Contornos y decoración; no usar para texto pequeño sobre Marfil. |
| Fuego | Identidad de Lumbre Studio y acentos puntuales de su símbolo. |
| Éxito | Confirmaciones acompañadas de icono y mensaje. |
| Aviso | Advertencias o sincronización pendiente. |
| Error | Validación incorrecta o acciones que fallaron. |
| Info | Ayuda e información contextual. |

Los colores de estado se aplican como texto e icono sobre Marfil o Papel, o como fondos sólidos con texto Marfil después de revisar su contraste. No trasladarlos directamente como texto pequeño sobre Bosque.

### Psicología y justificación del color

Estas son **asociaciones buscadas por el equipo**, no efectos psicológicos universales ni resultados medidos con usuarios.

| Grupo | Asociación buscada | Justificación de diseño |
| :--- | :--- | :--- |
| Bosque y Jade | Naturaleza, exploración y estabilidad. | Relacionan la interfaz con los paisajes que inspiran los escenarios y permiten destacar información clara. |
| Marfil y Papel | Lectura, calma y contexto editorial. | Ofrecen superficies para fichas culturales, tablas y documentación; equilibran la oscuridad de la aventura. |
| Oro | Luz, descubrimiento y avance. | Retoma el amuleto y concentra la atención en acciones principales y metas. |
| Cobre | Materialidad y detalle artesanal. | Da continuidad a los marcos del Canvas y las piezas de presentación sin competir con el contenido. |
| Fuego | Creación y energía del estudio. | Mantiene la relación con la llama de Lumbre Studio; se usa con moderación para no convertir toda la interfaz en naranja. |
| Estados | Comunicación funcional. | Cada color tiene una etiqueta y un icono; el significado no depende exclusivamente de verlo. |

### Variantes de interfaz permitidas

**Modo oscuro**

- Fondo: Bosque.
- Superficie elevada: Jade.
- Texto principal: Marfil.
- Texto secundario: Niebla.
- Acción principal: Oro con texto Bosque.
- Aro de foco sobre fondo oscuro: Oro.

**Modo claro**

- Fondo: Marfil.
- Tarjetas: Papel.
- Texto principal: Bosque.
- Texto secundario: Jade.
- Acción principal: Bosque con texto Marfil, o Oro con texto Bosque.
- Aro de foco sobre superficie clara: Bosque.

**Monocromo**

Usar una sola tinta Bosque, negro o Marfil según el soporte. Mantener siluetas, proporciones y área de protección. No aplicar un filtro a los archivos originales para generar variantes: utilizar las versiones planas vectoriales.

**Decoración**

Las líneas de cuadrícula son tenues y se reservan a fondos o presentaciones. No atraviesan textos ni sustituyen los bordes necesarios para identificar campos. El cobre puede decorar un marco; un borde funcional requiere contraste suficiente por sí mismo.

## 3 Contraste y legibilidad

Se calculó la relación entre luminancias relativas de colores sRGB opacos. Los siguientes valores se redondean para presentación; no se redondea una medición para aprobar una combinación que queda bajo el umbral.

| Texto / fondo | Contraste | Uso |
| :--- | :---: | :--- |
| Marfil / Bosque | 11.71:1 | Permitido en texto normal. |
| Niebla / Bosque | 9.25:1 | Permitido en texto secundario normal. |
| Bosque / Oro | 7.21:1 | Permitido en botones y etiquetas. |
| Marfil / Jade | 6.46:1 | Permitido en texto normal. |
| Cobre / Marfil | 4.12:1 | Evitar texto normal; reservar a decoración o texto grande revisado. |
| Oro / Marfil | 1.62:1 | No usar para texto ni iconos funcionales. |

La referencia es WCAG 2.2 AA: texto normal de al menos **4.5:1**; texto grande, **3:1**; controles e iconos informativos, **3:1** respecto al fondo adyacente. Texto grande corresponde a 18 pt normal o 14 pt en negrita, aproximadamente 24 px o 18.7 px en CSS.

Las mediciones no certifican toda la aplicación. Fotografías, transparencias, sombras, texto sobre el escenario y estados hover deben comprobarse por separado.

Reglas adicionales:

- Acompañar errores, éxitos y conexión con icono y mensaje.
- Mantener etiquetas visibles en los formularios; el placeholder no reemplaza la etiqueta.
- Mostrar foco de teclado, sin ocultarlo por estética.
- Objetivo interno de área táctil: **48 × 48 unidades lógicas**; el icono visual puede ser menor.
- Respetar la ampliación del sistema y el zoom; permitir salto de línea.
- En Unity, colocar el HUD sobre una base que controle el contraste frente al escenario.
- Respetar reducción de movimiento en efectos no esenciales; evitar parpadeos.

## 4 Tipografía de uso libre

| Familia | Rol | Justificación |
| :--- | :--- | :--- |
| **Lora** | Títulos y encabezados culturales. | Su estructura serif conserva el carácter editorial de las referencias y da identidad a la narrativa. |
| **Source Sans 3** | Párrafos, controles, navegación y HUD. | Sus formas abiertas favorecen la lectura y mantienen una apariencia de interfaz contemporánea. |
| **Source Code Pro** | Estadísticas, tiempos, identificadores y pequeñas etiquetas. | El ancho fijo alinea números y datos; debe usarse con moderación. |

Las tres familias se distribuyen con **SIL Open Font License 1.1**. Se incluyen los archivos originales y sus avisos. Conservar las licencias al redistribuir las fuentes. Los logotipos conservan su dibujo: no se reconstruye el logo original escribiendo su nombre con estas familias.

### Escala tipográfica

Los pares representan tamaño / interlínea. En web se expresan en px de referencia y se implementan preferentemente con `rem`. En Flutter se traducen a unidades lógicas con escalado del sistema; en Unity se ajustan al Canvas y al dispositivo de prueba.

| Rol | Familia y peso | Escritorio | Móvil |
| :--- | :--- | :---: | :---: |
| Título principal | Lora 700 | 48 / 56 | 32 / 40 |
| Título de sección | Lora 600 | 32 / 40 | 28 / 36 |
| Subtítulo | Source Sans 3 600 | 24 / 32 | 22 / 30 |
| Lectura | Source Sans 3 400 | 18 / 28 | 16 / 24 |
| Botón o etiqueta | Source Sans 3 600 | 16 / 24 | 16 / 24 |
| Metadatos | Source Code Pro 400 | 14 / 20 | 14 / 20 |

### Flexibilidad y compatibilidad

- Mantener pesos 400, 600 y 700; no simular negritas.
- Los archivos incluidos son variables. Si un entorno necesita fuentes estáticas, obtener las instancias oficiales equivalentes y conservar su licencia.
- Las cursivas no están incluidas en el paquete; incorporarlas antes de utilizarlas.
- Comprobar `Ññ`, acentos, `¿?`, `¡!`, signos de puntuación y dígitos en los tres productos.
- Lectura: alineación a la izquierda; evitar párrafos justificados y mayúsculas sostenidas extensas.
- Usar mayúsculas y espaciado adicional solo en etiquetas breves.
- Fallback web: `Georgia, serif`; `system-ui, sans-serif`; `monospace`, respectivamente.
- La fuente debe cargarse antes de medir el texto y de revisar cortes o desbordamientos.

## 5 Imagotipo e isotipo

### Definiciones

- **Imagotipo:** símbolo y nombre que pueden utilizarse juntos o separados.
- **Isotipo:** símbolo sin texto.
- **Logotipo:** representación tipográfica del nombre.

### Marcas del sistema

| Marca | Imagotipo | Isotipo |
| :--- | :--- | :--- |
| Lumbre Studio | Llama y nombre del estudio. | Llama con referencia a la letra L. |
| Xicotepec bajo la niebla | Emblema y nombre del videojuego. | Amuleto con montaña y recorrido. |

Los logos originales se conservan sin retoques en `assets/logo-lumbre-original.png` y `assets/logo-xicotepec-original.png`. Las variantes SVG son **adaptaciones simplificadas propuestas**, no una vectorización exacta ni un reemplazo obligatorio de los originales.

### Variantes permitidas

| Variante | Fondo | Tratamiento |
| :--- | :--- | :--- |
| Original a color | Superficie sólida apropiada. | Utilizar el archivo completo sin alterar proporciones. El logo del estudio original mantiene su soporte claro. |
| Positiva plana | Marfil, Papel o blanco. | Símbolo y nombre Bosque. |
| Negativa plana | Bosque o Jade. | Símbolo y nombre Marfil. |
| Color simplificada | Bosque. | Oro; Lumbre puede combinar Oro y Fuego en el símbolo. |
| Monocroma | Según contraste. | Una tinta Bosque, negro o Marfil. |

### Protección y tamaños

- Definir `x` como **1/4 de la altura visible del isotipo**.
- Mantener al menos `x` libre alrededor de la marca completa.
- Isotipo: mínimo propuesto **32 px**; verificar su lectura en la salida real.
- Imagotipo vectorial: mínimo propuesto **180 px** de ancho.
- Logo ilustrado del juego: mínimo propuesto **320 px** de ancho; por debajo, preferir la versión simple.
- No aplicar esos tamaños como especificación de impresión: definir una prueba física independiente.
- En iconos Android/iOS respetar además las máscaras, zonas seguras y recursos que exija cada plataforma. El isotipo no sustituye por sí solo la generación del paquete de iconos.

### Usos incorrectos

No estirar, inclinar, recortar el nombre, cambiar proporciones internas, modificar los títulos, añadir brillos nuevos ni situar la marca sobre una imagen que impida leerla. En gameplay o fotografía se añade una base sólida con espacio de protección.

## 6 Iconografía

Se utiliza **Lucide** con SVG locales. Su licencia upstream se incluye completa en `icons/LICENSE`, con los avisos ISC y los avisos heredados de Feather que aparecen en ese archivo.

Reglas de dibujo:

- Retícula base: **24 × 24**.
- Trazo base: **2 unidades** y extremos redondeados.
- Tamaños habituales: **20, 24 y 32 px**, escalados de forma coherente.
- Mantener una sola familia; no combinar con emojis, iconos 3D o estilos de otro grosor.
- Usar texto de apoyo en navegación inicial o acciones que puedan resultar ambiguas.
- Los controles de solo icono necesitan nombre accesible y una descripción cuando sea útil.

| Grupo | Icono SVG | Uso en español |
| :--- | :--- | :--- |
| Navegación | `house` | Inicio. |
| Navegación | `compass` | Explorar. |
| Navegación | `map` | Lugares. |
| Navegación | `trophy` | Ranking. |
| Navegación | `user-round` | Perfil. |
| Acción | `search` | Buscar. |
| Acción | `download` | Descargar. |
| Acción | `refresh-cw` | Sincronizar o actualizar. |
| Acción | `log-out` | Cerrar sesión. |
| Acción | `arrow-right` | Continuar. |
| Estado | `circle-check` | Completado. |
| Estado | `triangle-alert` | Pendiente o advertencia. |
| Estado | `circle-x` | Error. |
| Estado | `wifi-off` | Sin conexión. |
| Estado | `loader-circle` | Cargando; acompañar con mensaje. |
| Juego | `play` | Jugar. |
| Juego | `pause` | Pausa. |
| Juego | `settings` | Opciones. |
| Juego | `heart` | Salud. |
| Juego | `zap` | Estamina. |
| Juego | `flag` | Punto de control. |

El rayo se reserva a estamina cuando forma parte del HUD, para evitar confundirlo con otra acción. Los símbolos propios de las habilidades de Balam, Rayo y Kiro se diseñarán como una familia adicional cuando se definan sus recursos finales.

## 7 Componentes y consistencia visual

### Espaciado y formas

Escala: **4, 8, 12, 16, 24, 32, 48 y 64**. Usar 16–24 de relleno en tarjetas y 8–12 entre elementos relacionados. Los marcos editoriales tienen esquinas rectas; botones y campos pueden usar radio de 4 px. Evitar una mezcla arbitraria de radios, sombras y estilos.

### Estados de los controles

| Estado | Regla |
| :--- | :--- |
| Normal | Texto y fondo con contraste suficiente; etiqueta breve. |
| Hover | Cambio visible de superficie o contorno, conservando contraste. |
| Presionado | Desplazamiento visual mínimo o cambio de superficie; sin afectar el área activa. |
| Foco | Aro de 2 px separado 2 px; Bosque en claro y Oro en oscuro. |
| Deshabilitado | Señal visual y semántica de indisponibilidad; explicar la causa cuando sea necesaria. |
| Cargando | Mensaje y estado de progreso; evitar envíos repetidos de la misma acción. |
| Error | Icono, texto y relación con el campo afectado; conservar la información escrita. |

### Aplicación por producto

- **Unity:** Source Sans 3 en HUD y controles; Lora en títulos. Cargar los caracteres necesarios con TextMeshPro y probar la escala del Canvas. No colocar texto directamente sobre una zona cambiante sin una base de contraste.
- **PWA:** cargar fuentes locales, aplicar tokens CSS, respetar foco y jerarquía de encabezados. Las fichas y rankings tienen navegación clara.
- **Flutter:** declarar fuentes locales o una estrategia equivalente, mantener escalado de texto y etiquetas semánticas. Las estadísticas no deben depender únicamente del color.

## 8 Uso en Figma

### Ruta recomendada para texto y capas editables

Se utiliza un plugin **local de desarrollo**; no requiere una clave de API ni un servicio externo.

1. Descomprimir el paquete.
2. Instalar las fuentes de `fonts/` si Figma no las ofrece con los pesos necesarios; reiniciar Figma si lo solicita.
3. En **Figma de escritorio**, abrir un archivo de diseño con permiso de edición.
4. Crear un plugin local desde **Plugins → Development → New plugin**, para Figma Design, de ejecución única sin interfaz. El editor genera su propia carpeta y un manifiesto con un ID válido.
5. Reemplazar el archivo `code.js` de esa carpeta por el incluido en `figma/code.js`.
6. Conservar el ID asignado por Figma. Si es necesario revisar campos de configuración, usar `figma/manifest.settings.json` como referencia; no sustituir el ID del manifiesto generado.
7. Ejecutar el plugin desde **Plugins → Development**.

El importador está diseñado para crear una página nueva con:

- Seis láminas con textos y formas editables.
- Doce estilos locales de color y cinco estilos tipográficos.
- Una séptima lámina con dos botones y veintiún iconos como componentes reutilizables.
- Los logos originales como capas de imagen; sus píxeles no se convierten en vectores.

No modifica las páginas existentes. Cada nueva ejecución crea una página nueva. No crea automáticamente una biblioteca publicada, Auto Layout o variables con modos; los colores y tipos se guardan como estilos locales.

**Verificación realizada:** sintaxis del código, simulación local de construcción y revisión visual de las seis láminas SVG. La ejecución y el resultado dentro de Figma quedan pendientes hasta disponer del editor conectado o ejecutar el importador localmente.

### Ruta rápida con SVG

Arrastrar los seis archivos de `boards/` al lienzo de Figma. Esta ruta permite trabajar con formas vectoriales, pero el editor puede transformar textos en contornos o sustituir fuentes. Si se necesita editar los párrafos como texto, utilizar el importador nativo.

## 9 Archivos para implementación

`tokens.json` conserva los valores base sin depender de un plugin de tokens. `tokens.css` incluye familias, colores, ejemplo de tema claro y estados de foco para la PWA.

En Flutter, por ejemplo, Bosque se expresa como `Color(0xFF112F28)`; el prefijo `FF` corresponde a opacidad completa. En Unity, el mismo color puede representarse con `new Color32(17, 47, 40, 255)`. La gestión de color del motor y la iluminación del escenario se deben comprobar en la interfaz real.

## 10 Equipo y mantenimiento

| Integrante | Revisión propuesta de la guía |
| :--- | :--- |
| Adrián Pérez Jiménez | Coordinación e identidad visual. |
| Jesús Domínguez Ramírez | Aplicación de estilos y legibilidad en Unity. |
| Luis Daniel Suárez Escamilla | Documentación, pruebas y revisión de contenido. |
| Jonathan Emmanuel Lopez Morales | Coherencia de estados de datos, errores y sincronización. |
| Sayurid Bautista Cruz | Aplicación en Flutter y experiencia móvil. |

Cualquier cambio de color, tipografía o icono debe actualizar primero los tokens y la guía, y después las interfaces. Las adaptaciones simplificadas de los logos se revisarán con el equipo antes de adoptarlas como sustitución definitiva en producción.

## Fuentes y licencias

- [Lora y licencia OFL](https://github.com/google/fonts/tree/main/ofl/lora).
- [Source Sans 3](https://github.com/adobe-fonts/source-sans) y su licencia OFL incluida.
- [Source Code Pro](https://github.com/adobe-fonts/source-code-pro) y su licencia OFL incluida.
- [Lucide y licencia](https://lucide.dev/license).
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) y [contraste mínimo](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).
- [API de plugins de Figma](https://developers.figma.com/docs/plugins/api/figma/) y [creación de plugins de desarrollo](https://help.figma.com/hc/en-us/articles/360042786733-Create-a-classic-plugin-for-development).

=======
# Guía de estilos visuales e identidad

**Xicotepec bajo la niebla** · Lumbre Studio  
Documento de referencia para el videojuego Unity, la PWA cultural en React y la aplicación móvil en Flutter.

> Esta guía normaliza el uso del sistema visual entre plataformas. Los colores y tipografías son tokens de diseño; las medidas son valores iniciales que deben contrastarse en las interfaces y ajustarse sin alterar su jerarquía.

## Identidad del proyecto

La experiencia combina aventura, niebla y naturaleza con una lectura clara y accesible. La identidad debe sentirse cálida y arraigada al entorno, pero conservar contraste suficiente para HUD, navegación, textos largos y datos. Mantén consistencia entre las aplicaciones sin forzar que una interfaz cultural y una interfaz de combate tengan la misma densidad visual.

El proyecto distingue explícitamente la historia ficticia del juego de la información cultural investigada. Los recursos gráficos de ficción no deben presentarse como evidencia histórica ni sustituir las fuentes de las fichas.

## Paleta oficial

Los valores RGB y HEX son exactos. HSL y CMYK están redondeados al entero más cercano; CMYK es una conversión orientativa de pantalla y puede variar según el perfil de impresión.

| Token | HEX | RGB | HSL | CMYK aprox. | Uso y asociación psicológica |
|---|---|---|---|---|---|
| **Azul niebla** | `#173E56` | `23, 62, 86` | `203°, 58%, 21%` | `73%, 28%, 0%, 66%` | Color institucional y de estructura. Evoca profundidad, confianza y el ambiente brumoso; úsalo en navegación, encabezados y superficies oscuras. |
| **Oro sendero** | `#DA8B26` | `218, 139, 38` | `34°, 71%, 50%` | `0%, 36%, 83%, 15%` | Acento de energía y orientación. Su calidez sugiere luz, descubrimiento y avance; resérvalo para llamadas a la acción, selección y progreso. |
| **Verde bosque** | `#49796B` | `73, 121, 107` | `162°, 25%, 38%` | `40%, 0%, 12%, 53%` | Color de naturaleza y equilibrio. Comunica calma y continuidad; apropiado para estados positivos y superficies secundarias. |
| **Marfil niebla** | `#F5F4ED` | `245, 244, 237` | `53°, 29%, 95%` | `0%, 0%, 3%, 4%` | Fondo cálido de lectura. Reduce la dureza del blanco puro y ayuda a que las interfaces informativas se sientan serenas. |
| **Tierra** | `#7B4B34` | `123, 75, 52` | `19°, 41%, 34%` | `0%, 39%, 58%, 52%` | Acento terroso que vincula la identidad con caminos, madera y suelo. Úsalo en detalles, ilustraciones y delimitadores, no como texto pequeño sobre fondos oscuros. |
| **Verde profundo** | `#173E36` | `23, 62, 54` | `168°, 46%, 17%` | `63%, 0%, 13%, 76%` | Fondo oscuro de inmersión y contraste. Evoca vegetación densa y misterio; úsalo en marcos, navegación oscura y escenas de juego. |

Las asociaciones psicológicas son criterios de dirección de arte, no efectos universales: la percepción depende del contexto, la cultura, la combinación y el contraste.

### Reglas de aplicación y accesibilidad

- Mantén los seis colores como base compartida. No inventes nuevos colores de marca sin documentar el motivo y su uso.
- En una pantalla informativa, usa **Marfil niebla** como superficie principal y **Azul niebla** o **Verde profundo** para texto de alto contraste. En una escena de juego, el fondo puede ser oscuro y el texto claro.
- Reserva **Oro sendero** para acentos; evita bloques extensos en ese color y texto pequeño blanco sobre oro.
- Comprueba contraste de texto, foco, iconos y estados en cada tamaño. Como referencia, busca WCAG AA: 4.5:1 para texto normal y 3:1 para texto grande y componentes gráficos esenciales. No des por aprobado un par de colores sin medirlo en su contexto real.
- El color no es el único indicador: acompaña estados con etiqueta, forma, patrón o icono, y verifica la legibilidad en escala de grises.
- Para impresión, solicita una prueba con el perfil CMYK de destino. La conversión de la tabla no reemplaza una prueba de color.

## Tipografía

| Familia | Función | Jerarquía recomendada | Pesos |
|---|---|---|---|
| **Cinzel** | Títulos de marca, portadas y encabezados narrativos breves. | H1 y títulos de sección; evitar párrafos, instrucciones de HUD y texto pequeño. | Regular para títulos; Bold solo en énfasis breve. |
| **Nunito Sans** | Tipografía principal de interfaz y lectura. | Cuerpo, navegación, botones, fichas, diálogos, formularios y mensajes. | Regular para lectura; SemiBold/Bold para controles y jerarquía. |
| **IBM Plex Mono** | Datos técnicos y valores compactos. | Temporizadores, puntuación, IDs de partida, métricas y coordenadas. | Regular; Medium para valores destacados. |

### Escala inicial

La escala se ajusta al dispositivo y al lienzo, manteniendo los niveles relativos:

| Nivel | Web y móvil | Unity / HUD |
|---|---:|---|
| Título principal | 32–40 px | 32–40 unidades de diseño |
| Título de sección | 24–30 px | 24–30 unidades de diseño |
| Subtítulo | 18–22 px | 18–22 unidades de diseño |
| Texto de lectura | 16–18 px | 16–18 unidades de diseño |
| Etiqueta y dato secundario | 12–14 px; no bajar de 12 px sin una prueba de legibilidad | 14 unidades de diseño como mínimo recomendado para HUD |

Usa Nunito Sans en controles e instrucciones para que las formas se lean rápido; limita Cinzel a encabezados cortos; alinea valores IBM Plex Mono cuando se comparen números. No uses mayúsculas sostenidas en párrafos. Respeta ampliación de texto, reflujo y escalado de interfaz.

### Integración técnica por plataforma

**Unity — TextMeshPro**

1. Añade los archivos de fuente y sus licencias al proyecto; crea un `TMP_FontAsset` por familia y peso necesario desde TextMeshPro Font Asset Creator.
2. Asigna Cinzel a títulos, Nunito Sans a texto de interfaz y diálogos, e IBM Plex Mono a cifras, temporizadores e identificadores mediante estilos o referencias de fuente serializadas.
3. Configura atlas con los caracteres latinos usados por el proyecto (incluidas vocales acentuadas y `ñ`) y contempla fallback para caracteres no incluidos. Prueba en la plataforma de destino para evitar glifos faltantes.
4. Usa tamaños y márgenes escalables con Canvas Scaler y el modo de ajuste del componente TMP. No reduzcas automáticamente el texto hasta volverlo ilegible: permite ajuste de línea y aumenta el espacio cuando sea necesario.
5. Comprueba kerning, contraste, legibilidad a distancia de juego y comportamiento del HUD con los fondos más claros y más oscuros.

**React — PWA**

- Aloja los archivos de fuente localmente para que la interfaz esencial no dependa de una conexión de terceros. Declara pesos reales con `@font-face`, `font-display: swap` y fallbacks del sistema; configura la caché/offline de fuentes conforme a la política de la PWA.
- Define tokens CSS y roles tipográficos en una única hoja compartida. Ejemplo de familias: `Cinzel, Georgia, serif`; `Nunito Sans, Arial, sans-serif`; `IBM Plex Mono, Consolas, monospace`.
- Asigna cada familia según la tabla de funciones, no por componente aislado. Usa `rem` para escala adaptable, permite zoom y prueba el reflujo en móvil y con texto ampliado.
- No declares como disponibles pesos que no se hayan incluido; un peso sintético puede cambiar la apariencia y el ancho del texto.

**Flutter**

- Incluye los archivos de fuente y sus pesos en `assets/fonts/` y decláralos bajo `flutter: fonts:` en `pubspec.yaml`, con los nombres de familia coincidentes con el tema.
- Crea un `ThemeData`/`TextTheme` con roles para títulos (Cinzel), texto y controles (Nunito Sans) y datos (IBM Plex Mono). Reutiliza el tema para que historial, estadísticas y formularios conserven la misma jerarquía.
- Respeta `TextScaler` del sistema, evita alturas fijas que recorten texto y prueba idiomas, acentos, pantallas pequeñas y tamaños de accesibilidad.
- Verifica licencias y distribución de fuentes antes de incluirlas en builds o paquetes públicos.

> Los archivos de fuente no están inventariados en la carpeta actual de la guía. La integración queda especificada; antes de implementarla, el equipo debe incorporar las fuentes con sus licencias y validar el renderizado real en cada plataforma.

## Variantes de color

Las asignaciones siguientes son reglas de identidad de interfaz para distinguir personajes y estados; no restringen el color de piel, vestuario ilustrado ni la dirección de arte narrativa.

### Personajes

| Personaje | Color identificador | Apoyo permitido | Aplicación |
|---|---|---|---|
| **Balam** | Tierra `#7B4B34` | Oro sendero `#DA8B26` | Fichas de personaje, indicador de selección, habilidad de fuerza y Ground Slam. |
| **Rayo** | Azul niebla `#173E56` | Oro sendero `#DA8B26` | Fichas, selección, doble salto y resortera. En fondos oscuros, acompaña el azul con borde o superficie clara. |
| **Kiro** | Verde bosque `#49796B` | Verde profundo `#173E36` | Fichas, selección, dron, paneles y efectos tecnológicos. Usa el verde profundo como contorno/fondo, no como sustituto de contraste. |

Aplica el color del personaje al icono, marco, etiqueta o acento del HUD; mantén neutral la información compartida. La selección siempre debe incluir nombre o símbolo además del color. No uses un color de identidad como color de daño/estado si eso puede confundir al jugador.

### Estados globales del videojuego

Salud, estamina y `UltimateGauge` son recursos compartidos por los tres protagonistas; el valor no cambia al alternar Balam, Rayo o Kiro.

| Estado | Color base | Variaciones permitidas | Reglas de presentación |
|---|---|---|---|
| **Salud** | Verde bosque `#49796B` | Verde profundo `#173E36` para borde/fondo; marfil `#F5F4ED` para texto o tramo vacío. | Representa el valor actual y el máximo con segmentos o barra. El daño puede usar destello/animación adicional; no cambies a rojo como único código. Incluye proporción o señal no cromática si el contexto lo requiere. |
| **Estamina** | Oro sendero `#DA8B26` | Tierra `#7B4B34` como contorno o acento; marfil para texto y fondo vacío. | Diferénciala de salud por icono/etiqueta y patrón; muestra gasto y recuperación claramente. |
| **Ultimate** | Azul niebla `#173E56` | Oro sendero cuando esté disponible; verde profundo como soporte en fondos oscuros; marfil para contorno/estado inactivo. | Muestra carga y disponibilidad en el mismo lugar. El estado listo usa color más señal visual (brillo, pulso, icono o etiqueta); no disponible debe seguir siendo legible sin color. |

Los colores describen los indicadores de interfaz, no efectos cromáticos obligatorios para poderes ni animaciones. Conserva contraste con el escenario y ofrece un modo de lectura distinguible sin color.

## Imagotipo e isotipo

- **Imagotipo:** composición de identidad de “Xicotepec bajo la niebla” con su símbolo y el nombre legible; puede acompañarse de la firma de Lumbre Studio en aperturas o créditos. El nombre del proyecto no debe separarse del símbolo de forma que cambie su lectura o proporción.
- **Isotipo:** símbolo gráfico del proyecto usado sin el nombre, por ejemplo en favicon, avatar, indicador de carga o marca compacta. Debe ser reconocible a tamaño reducido y no confundirse con iconos de navegación o del juego.
- Mantén la proporción, alineación y relación entre símbolo y palabra del arte maestro. No recolorees, deformes, inclines, traces ni añadas efectos al logo original. Sobre fondos oscuros, utiliza únicamente una variante oficial que conserve legibilidad.
- Usa `images/xicotepec_bajo_la_niebla.png` y los originales del proyecto como referencia; la carpeta de guía no contiene artes vectoriales ni medidas de construcción que permitan certificar geometría o área de seguridad del original.

### Zonas de protección y tamaños

Hasta contar con el manual geométrico del arte maestro, aplica esta regla de producción: define **X** como la altura de las mayúsculas del nombre del proyecto en el archivo de logo. Deja al menos **0.5X** de espacio libre por cada lado de imagotipo e isotipo. Ningún texto, borde, fotografía, ilustración o control interactivo debe invadir esa zona. Si la proporción del arte dificulta medir la altura de letra, usa como referencia **1/4 de la altura total del bloque de logo**.

No reduzcas el imagotipo por debajo de **160 px de ancho en interfaz web** ni de **32 px de alto en interfaz móvil** sin una prueba de lectura. Para aplicaciones que necesiten un icono más pequeño, usa el isotipo y valida una exportación óptica específica; no reduzcas el imagotipo completo hasta hacerlo ilegible. La guía no reemplaza medidas oficiales pendientes del archivo maestro.

## Iconografía

Usa un sistema coherente de iconos de trazo sencillo, silueta reconocible y grosor consistente. Prioriza SVG/vectorial en PWA y Flutter; en Unity utiliza sprites nítidos con resolución suficiente para la escala del Canvas. Evita mezclar pictogramas de estilos distintos.

| Categoría | Elementos | Criterio |
|---|---|---|
| **Navegación** | Inicio, volver, cerrar, menú, explorar mapa/sitios, perfil, historial y ajustes. | Mantén forma y posición previsibles. Añade etiqueta accesible o texto visible cuando el significado no sea inequívoco. |
| **Estado / HUD** | Salud, estamina, Ultimate, personaje activo, objetivo, punto de control, conexión/sincronización y pausa. | Acompaña cada indicador con texto, forma, número o animación; conserva estados lleno, parcial, vacío, disponible, bloqueado y error. No dependas solo del color. |
| **Acción** | Ataque, habilidad, salto, interacción, activar panel, confirmar, reintentar y continuar. | Diferencia acción primaria de secundaria; muestra el control asociado cuando aporte claridad (J, E, R, 1/2/3). Usa estados presionado, deshabilitado y foco/selección. |

En todas las categorías, conserva un área táctil mínima de **44 × 44 CSS px** en PWA y móvil. Usa texto alternativo/semántica accesible en web y etiquetas semánticas en Flutter; en Unity acompaña iconos esenciales con señal legible. Prueba tamaño, contraste, foco por teclado y legibilidad en monocromo.

## Lista de comprobación de implementación

- [ ] Confirmar los archivos y licencias de Cinzel, Nunito Sans e IBM Plex Mono.
- [ ] Definir tokens de color y escala tipográfica por plataforma con los mismos nombres y roles.
- [ ] Verificar contraste de estados, texto, iconos y botones en los fondos reales.
- [ ] Comprobar acentos, `ñ`, fallback de glifos, escalado y reflujo de texto.
- [ ] Validar la zona de protección y las variantes aprobadas con los archivos maestros de marca.
- [ ] Revisar las interfaces Unity, Flutter y PWA en tamaño reducido, monocromo y con ajustes de accesibilidad.

## Referencias del proyecto

- [README principal](../README.md)
- [Wireframes navegables](../AvanceWireframes/index.html)
- [Diagrama de secuencia y prototipos](../DiagramaDeSecuencia/README.md)
- [Guía de estilos interactiva en Figma](https://www.figma.com/design/ZJrPFdQ3jlpdhYKwOTaUvg/Lumbre-Studio-%C2%B7-Gu%C3%ADa-de-estilos-%C2%B7-Xicotepec-bajo-la-niebla?node-id=0-1&t=2pv3G0tiynsRhwF0-1)

---
*Lumbre Studio · Universidad Tecnológica de Xicotepec de Juárez*
>>>>>>> 3afc330 (Readme)
