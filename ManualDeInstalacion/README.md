# Instalación y Configuración de un Entorno de Desarrollo con Flutter
[📄 Descargar Manual de Flutter](<Manual de Flutter.pdf>)

[Ver carpeta docker](Docker/)
## Integrantes

- Adrián Pérez Jiménez
- Luis Daniel Suárez Escamilla
- Jonathan Emmanuel Lopez Morales
- Sayurid Bautista Cruz
- Jesús Domínguez Ramírez

## Objetivos

### Objetivo general

Instalar, configurar y verificar un entorno de desarrollo móvil y backend, asegurando la conectividad entre una aplicación Flutter y los servicios ejecutados mediante Docker.

### Objetivos específicos

- Configurar WSL2 con Ubuntu y Visual Studio Code con las extensiones necesarias para desarrollar aplicaciones con Flutter y Dart.
- Instalar el SDK de Flutter y Android Studio, configurar las variables de entorno y crear un emulador Android.
- Verificar el entorno móvil mediante `flutter doctor -v` y `flutter devices`.
- Configurar Git y GitHub para el control de versiones y el trabajo colaborativo.
- Desplegar PostgreSQL, MongoDB, Keycloak, FastAPI y Express mediante Docker Compose.
- Comprobar el funcionamiento de las bases de datos y las APIs utilizando la terminal, Postman y Swagger UI.
- Configurar un cliente OIDC en Keycloak y preparar la conexión entre Flutter y los servicios backend.

## Conclusiones

- La configuración de un entorno común permite que los integrantes del equipo trabajen con las mismas herramientas y reduce los problemas de compatibilidad.
- La distribución de herramientas entre Windows y WSL2 facilita el desarrollo móvil y la administración de los servicios backend.
- Docker Compose simplifica el despliegue de la infraestructura al reunir sus servicios en un solo archivo de configuración.
- Las pruebas de diagnóstico y conexión permiten comprobar que las herramientas están listas para iniciar el desarrollo.
- La configuración de Keycloak y el direccionamiento de red del emulador Android son fundamentales para integrar la aplicación Flutter con los servicios locales.

---

[📄 Descargar Manual de Flutter](<Manual de Flutter.pdf>)


## Docker

La carpeta `docker` contiene el archivo `compose.yaml`, que permite iniciar PostgreSQL, MongoDB, Keycloak, FastAPI y un servidor HTTP de Node.js.

```text
docker/
└── compose.yaml
```

Con Docker Desktop abierto, ejecuta desde la carpeta principal del proyecto:

```bash
docker compose -f docker/compose.yaml up -d
```

[Ver carpeta docker](Docker/)