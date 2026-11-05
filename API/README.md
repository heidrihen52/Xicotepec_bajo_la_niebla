# API de Xicotepec versión 0.1.0

API de demostración para el proyecto académico. Permite crear una cuenta, iniciar sesión, enviar partidas con ID único, consultar historial y estadísticas y mostrar un ranking público. La ruta `/health` permite verificar el servicio y el commit publicado. Esta versión no incluye contenido cultural, recuperación de contraseña, roles administrativos ni integración real con Unity, Flutter o la PWA.

## Diferencias y límites importantes

La documentación previa plantea Express y PostgreSQL. Este prototipo usa exclusivamente Node.js 24 y SQLite (`node:sqlite`) para ser ejecutable sin instalar paquetes externos. En Render gratuito el archivo de `/tmp` es efímero: las cuentas y partidas pueden perderse en reinicios o despliegues. No usar datos reales ni afirmar persistencia en la nube. Para conservar datos se requiere un disco persistente compatible o migrar a PostgreSQL; antes de producción también deben incorporarse limitación de intentos, políticas de contraseñas y sesiones, recuperación de cuenta, controles de acceso y revisión de seguridad. La autenticación implementada es propia, no Keycloak. El rendimiento o la disponibilidad aún no se han medido.

## Ejecutar y probar

Requisito: Node.js 24.22.0. En esta carpeta:

```bash
npm ci
npm test
npm run build
npm start
```

Abrir `http://localhost:3000/health`. El archivo `xicotepec.sqlite` se crea localmente y se excluye de Git. Cambiar `PORT` y `DB_PATH` con variables de entorno. Nunca subir el archivo de datos o credenciales. Las contraseñas se derivan con scrypt y los tokens aleatorios se guardan como hash, con vencimiento de 24 horas. El alias del ranking es público.

## Contrato mínimo

| Método y ruta | Uso |
|---|---|
| GET /health | Estado de la base, versión y commit de Render |
| POST /v1/auth/register | `{"alias":"Jugador1","password":"contraseña-de-prueba"}` |
| POST /v1/auth/login | Mismos campos; devuelve token temporal |
| GET /v1/me | Cuenta actual, requiere token |
| POST /v1/games | Guarda partida, requiere token |
| GET /v1/games | Hasta 100 partidas de la cuenta |
| GET /v1/stats | Cantidad, mejor puntuación y tiempo acumulado |
| GET /v1/leaderboard | Los 20 mejores alias y puntuaciones |

Las rutas privadas requieren cabecera `Authorization: Bearer TOKEN`. Ejemplo de partida (cambien el UUID por uno generado por el cliente):

```json
{"id":"8f703c25-65d8-441b-98f4-a141390fb59d","score":1200,"duration_seconds":300,"defeats":1,"character":"Balam"}
```

Los personajes válidos son Balam, Rayo y Kiro. Un reenvío idéntico del mismo ID devuelve 200 con `duplicate: true`; un ID existente con datos diferentes u otro dueño devuelve 409. No se debe incluir el token en capturas ni logs.

## Preparar GitHub y Render

1. Crear un repositorio GitHub para esta carpeta y subir el código con `main` como rama principal. No subir `.env`, bases SQLite ni datos de prueba.
2. Crear un Web Service en Render conectado al repositorio; Node 24.22.0, build `npm ci && npm run build`, start `node dist/src/server.js`, ruta de salud `/health`. `render.yaml` contiene esos parámetros como propuesta. Desactivar auto-deploy para que solo se publique tras pasar las pruebas. El plan gratuito utiliza `/tmp` efímero.
3. En la configuración del servicio copiar el deploy hook y guardarlo en GitHub Actions como **secret** `RENDER_DEPLOY_HOOK_URL`; guardar la URL pública sin barra final como **variable** `API_BASE_URL`. No compartir el hook.
4. El workflow [`.github/workflows/api.yml`](../.github/workflows/api.yml) se ejecuta en cambios de `API` sobre `main` o manualmente. Debe generar `dist`, pasar pruebas, guardar el artefacto, solicitar a Render el commit exacto y esperar hasta que `/health` informe ese commit. Configurar `RENDER_DEPLOY_HOOK_URL` como secreto y `API_BASE_URL` como variable del repositorio. Render vuelve a construir desde el commit; el artefacto de Actions sirve como evidencia y no se transfiere a Render. La primera creación del servicio puede requerir un despliegue inicial desde el panel.
5. Guardar enlace a la ejecución, capturas de pasos, versión, URL, resultado de `/health`, logs y una prueba funcional. Registrar métricas reales con su periodo. Si no coinciden los commits, o falla la comprobación, la entrega no está validada.

El hook de un commit concreto puede modificar la configuración de despliegue automático en Render. El workflow necesita que la URL del hook ya contenga su cadena de consulta `?key=...` (formato proporcionado por Render); añade `&ref=SHA`. Nunca registrar el hook en logs.

## Recuperación

En el historial de Deploys de Render, volver a publicar el último commit estable y verificar `/health` y una operación. El archivo SQLite efímero puede perderse durante la reversión; esta versión no ofrece recuperación de datos. Con un almacenamiento persistente y respaldo, verificar compatibilidad antes de restaurar. Documentar hora, versión, resultado y causa.
