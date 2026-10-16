# Cómo ejecutar los servicios con Docker Compose

El código es un archivo de **Docker Compose**: sirve para iniciar los cinco servicios juntos.

## Descargar archivo docker
[Ver  carpeta docker](compose.yaml)


## 1. Preparar el archivo

1. Instala y abre **Docker Desktop**.
2. Crea una carpeta y guarda el código en un archivo llamado **`compose.yaml`**.
3. Respeta la sangría y usa espacios normales, sin tabulaciones.

## 2. Aplicar los ajustes

En `fastapi_app`, cambia el puerto a lo siguiente, porque esa imagen escucha internamente en el puerto 80:

```yaml
    ports:
      - "8000:80"
```

[Referencia de la imagen de FastAPI](https://github.com/tiangolo/uvicorn-gunicorn-fastapi-docker#port).

En `keycloak`, utiliza las variables actuales para crear el administrador:

```yaml
    environment:
      KC_BOOTSTRAP_ADMIN_USERNAME: admin
      KC_BOOTSTRAP_ADMIN_PASSWORD: admin
```

[Documentación de Keycloak](https://www.keycloak.org/getting-started/getting-started-docker).

## 3. Iniciar los servicios

Abre una terminal dentro de la carpeta donde guardaste `compose.yaml` y ejecuta:

```bash
docker compose up -d
```

Docker descargará las imágenes e iniciará los contenedores en segundo plano. La primera vez puede tardar varios minutos.

[Documentación de Docker Compose](https://docs.docker.com/compose/gettingstarted/).

## 4. Comprobar el estado y consultar los registros

```bash
docker compose ps
docker compose logs -f
```

Presiona `Ctrl+C` para dejar de ver los registros; los servicios seguirán funcionando.

## 5. Acceder a los servicios

| Servicio | Dirección | Credenciales |
|---|---|---|
| Keycloak | [localhost:8080](http://localhost:8080) | `admin` / `admin` |
| FastAPI | [localhost:8000/docs](http://localhost:8000/docs) | — |
| Servidor Node | [localhost:3000](http://localhost:3000) | — |
| PostgreSQL | `localhost:5432`, base `dev_db` | `admin` / `password123` |
| MongoDB | `mongodb://localhost:27017` | Sin autenticación configurada |

PostgreSQL y MongoDB se usan mediante un cliente de base de datos, no desde el navegador.

## 6. Detener y quitar los contenedores

```bash
docker compose down
```

## Detalles del ejemplo

- `express_app` ejecuta un servidor HTTP básico de Node, aunque su nombre diga Express.
- El archivo no configura conexiones entre los backends, las bases de datos y Keycloak. Solo inicia los servicios.
