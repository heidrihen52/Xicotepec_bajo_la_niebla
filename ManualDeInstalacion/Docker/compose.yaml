services:
  postgres:
    image: postgres:15
    container_name: manual_postgres
    environment:
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: password123
      POSTGRES_DB: dev_db
    ports:
      - "5432:5432"

  mongo:
    image: mongo:latest
    container_name: manual_mongo
    ports:
      - "27017:27017"

  keycloak:
    image: quay.io/keycloak/keycloak:latest
    container_name: manual_keycloak
    command: start-dev
    environment:
      KEYCLOAK_ADMIN: admin
      KEYCLOAK_ADMIN_PASSWORD: admin
    ports:
      - "8080:8080"

  fastapi_app:
    image: tiangolo/uvicorn-gunicorn-fastapi:python3.10
    container_name: manual_fastapi
    ports:
      - "8000:8000"

  express_app:
    image: node:18-alpine
    container_name: manual_express
    command: node -e "require('http').createServer((_, r) => r.end('Hello World desde Express Backend')).listen(3000)"
    ports:
      - "3000:3000"
