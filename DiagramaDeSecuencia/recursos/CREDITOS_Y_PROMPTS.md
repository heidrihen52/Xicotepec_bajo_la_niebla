# Recursos de identidad y dibujo a lápiz

Los tres logos originales fueron proporcionados por el usuario. Se conservaron sin modificaciones:

- `lumbre-original-claro.png`
- `lumbre-original-oscuro.png`
- `xicotepec-original.png`

Las cuatro imágenes de grafito se generaron con la herramienta integrada **ImageGen**; no se utilizó el modo CLI. Las dos versiones de Lumbre fueron referencias de una misma identidad. El logo del videojuego fue referencia del amuleto, montañas, niebla y texto.

- `lumbre-lapiz.png`: logo de empresa utilizado en los splash de Flutter, PWA y Unity.
- `xicotepec-lapiz.png`: logo de aplicación utilizado en sus pantallas de progreso.
- `paisaje-lapiz.png`: escenario conceptual ficticio, no representación documental de la UTXJ ni de Xicotepec.
- `estudiantes-lapiz.png`: ilustraciones conceptuales de Balam, Rayo y Kiro; no fotografías de personas reales.

Las imágenes se integran en `index.html`. La carpeta conserva copias para referencia. Dentro de las interfaces se muestran en escala de grises; las referencias originales y la página exterior conservan color. Los contornos de interfaz, hachurados y papel se dibujan mediante SVG/CSS; los controles siguen siendo funcionales.

## Prompts finales de ImageGen

### Lumbre Studio

Use case: style-transfer. Asset type: company logo for pencil-drawn splash screen. Images 1 and 2 show the SAME company identity in two treatments; preserve the flame's distinctive L shape and exact text LUMBRE STUDIO. Recreate that identity as a hand-drawn graphite pencil sketch on clean WHITE paper: visible soft pencil grain, overlapping irregular contour strokes, diagonal crosshatching in the flame and letters, construction strokes, no color, no glow, no dark background, no photorealistic render, no vector-perfect curves. Center entire logo with readable text and generous white margins. One company logo only, not a contact sheet. Black and grayscale only. Keep recognizable shape and wording. This will be used within an academic sketch UI.

### Xicotepec bajo la niebla

Use case: style-transfer. Asset type: application logo for pencil-drawn progress/loading screen. Preserve the identity from the reference: round amulet with diamond compass points, mountain landscape, winding trail, mist, and exact words XICOTEPEC / BAJO LA NIEBLA. Redraw it as a convincingly HAND-DRAWN GRAPHITE PENCIL study on WHITE paper: multiple loose pencil contours, subtle construction circles, graphite grain, visibly hand-shaded mountains and amulet, rough diagonal hatching, readable hand-lettered title. Black, white and grays only. No gold, green, teal, glow, black background, clean vector rendering or 3D. Include entire logo centered with white margins. Single application logo, no interface or extra labels.

### Paisaje

Use case: illustration-story. Asset: wide hand-drawn graphite background for academic UI sketches of a fictional 2D game inspired by Xicotepec. White sketchbook paper, black and neutral gray pencil only. Draw misty mountain ridges, trees and a modest fictional university campus building on the LEFT, open path and vegetation across the lower edge, distant mountains extending to the right. Convincing actual pencil texture with loose overlapping contours, erased construction marks, crosshatching and soft smudged graphite shadows; no clean vector lines. Landscape composition, lots of white paper sky. No text, no real historical claims, no people, no modern digital UI. This is concept art, not a documentary depiction of UTXJ. Keep visual content readable at thumbnail size.

### Estudiantes

Use case: illustration-story. Asset: one horizontal character reference sheet, three equal-width panels on white paper. Three full-length FICTIONAL Mexican university students for a 2D adventure, convincingly sketched by hand with GRAPHITE PENCIL only. LEFT: Balam, strong build, backpack, sturdy stance, clenched fists; CENTER: Rayo, slim energetic student with a small slingshot in one hand, poised to jump; RIGHT: Kiro, student carrying a controller with a small hovering quadcopter drone above shoulder. Everyday student clothes, age around 20, no uniforms, no stereotypes. Soft loose pencil strokes, construction lines, hand crosshatching in clothes, pale shadow at feet. Black/gray on white, no color, no vector outlines, no perfect smooth fills, no 3D. Put each character centered in one third, no overlap between thirds, large empty white margins at sides, entire feet and heads visible. No letters, titles, labels or panel borders. A single coherent three-character reference illustration.
