# Xicotepec bajo la niebla — Sketches navegables

Abre `index.html` directamente en un navegador moderno. El archivo integra CSS, JavaScript, dibujos a lápiz y el flujo generado con Archify; no necesita backend ni conexión a Internet.

## Github Pages

[Link al diagrama de secuencia](https://heidrihen52.github.io/Xicotepec_bajo_la_niebla/DiagramaDeSecuencia/)

## Recorridos

- **Flutter:** Splash de Lumbre Studio → Progreso con logo de Xicotepec → Iniciar sesión → Inicio → Historial → Detalle. La barra inferior abre Inicio, Historial, Estadísticas y Perfil. Mis logros se abre desde Inicio.
- **PWA:** Splash de Lumbre Studio → Progreso con logo de Xicotepec → Inicio → Lugares → Ficha cultural; Personajes → Ficha; Ranking → Acceso → Mi posición. Usa “Ver adaptación móvil” en Inicio o Ficha cultural para comparar tamaños. La instalación solo se explica; no se instala la PWA.
- **Unity:** Splash de Lumbre Studio → Progreso con logo de Xicotepec → Presentación → Menú → Nueva partida → Introducción → Tutorial. Selecciona Balam y “Usar habilidad”, después Rayo y “Usar habilidad”, y después Kiro y “Usar habilidad”. Se habilita “Salir del tutorial”. Las teclas 1, 2 y 3 cambian de personaje sin abrir otra pantalla; Escape alterna tutorial y pausa en modo prototipo.

## Cuenta y estados de demostración

No introduzcas credenciales reales. Usa `demo@ejemplo.test`, contraseña `demo1234`, alias `NieblaDemo`, o el botón **Abrir sesión demo**. También puedes usar Google, Apple o Facebook: los tres botones abren únicamente la sesión local de demostración. No se crea ni autentica una cuenta real ni se usa OAuth.

El selector permite ensayar carga, lista vacía, credenciales incorrectas y error de consulta. **Reintentar** restablece el estado normal. En error de credenciales, selecciona Normal antes de volver a entrar. Cerrar sesión elimina las copias privadas y la cola pendiente asociada a la cuenta de demostración; el ranking sigue siendo público.

## Sin conexión y sincronización

1. Abre la sesión demo.
2. Cambia a **Sin conexión**.
3. Completa el tutorial: Unity conserva el resultado pendiente.
4. Flutter muestra su última copia descargada y PWA el ranking público guardado.
5. Recupera **Con conexión**: se simula el envío del mismo ID `XBN-UTXJ-001`, sin duplicarlo.
6. Actualiza Flutter y PWA por separado para ensayar consultas independientes.

Las estadísticas son un ejemplo fijo compartido, no una medición en tiempo real del sketch. La API simulada se inicializa con un registro de demostración; reenviarlo conserva un único ID. La cola pendiente se guarda en `localStorage` cuando el navegador lo permite y contiene únicamente datos ficticios. No se conservan contraseñas. El punto de control solo permanece en memoria durante esta sesión; no guarda toda la campaña. Si `localStorage` está restringido al abrir archivos locales, el recorrido funciona en memoria.

## Navegación y accesibilidad

Las miniaturas seleccionan el sketch. El mapa muestra una flecha por vez; su listado permite ver todas las salidas y abrir destinos. Puedes ampliar y desplazar tanto el mapa como el sketch. Usa Tab y Enter; las pestañas también admiten las flechas izquierda y derecha. Las secciones de detalle son acordeones nativos.

En móviles, Unity mantiene el formato horizontal legible y permite desplazamiento dentro del marco; la PWA tiene una adaptación de ancho móvil. Los sketches de las interfaces se muestran exclusivamente en blanco, negro y grises. La página, los controles y los paneles conservan una identidad en tonos de bosque, niebla y acentos dorados.

## Publicación

Copia `index.html` a la raíz de un repositorio para publicarlo con GitHub Pages u otro alojamiento estático. No requiere compilación ni archivos externos para abrir el HTML; las imágenes también están integradas en index.html. La carpeta recursos conserva los originales y las versiones a lápiz como referencia. No contiene service worker ni realiza una instalación real.

## Correcciones del docente

31 pantallas: Flutter 10, PWA 10 y Unity 11. Splash de empresa y Progreso son pantallas distintas en las tres aplicaciones. El splash muestra solo Lumbre Studio; la pantalla de carga utiliza el logo de Xicotepec bajo la niebla y una barra de progreso. Pulsa el logo de empresa para abrir Progreso; usa Simular avance dos veces y Continúa. Todas las interfaces tienen ilustraciones de grafito, líneas superpuestas, sombreado con rayado y textos manuscritos. La página exterior conserva su identidad a color.

Los logos a lápiz y las ilustraciones se generaron con ImageGen a partir de los archivos compartidos y del contexto ficticio. Los logos originales se conservan sin cambios. Los métodos externos de acceso son simulaciones sin proveedores reales.

## Alcance cultural y futuro

Las fichas culturales muestran contenido pendiente de investigación y revisión. No se atribuye realidad histórica a la magia. Solo el tutorial UTXJ está incluido en la simulación jugable. Centro, Cruz Celestial y La Xochipila son ampliaciones futuras.
