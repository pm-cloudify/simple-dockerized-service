# used to build the app
FROM node:22.18.0-slim AS builder

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm ci

COPY . .

RUN npm run build

# used to create a web server for app
FROM node:22.18.0-alpine

WORKDIR /opt/nodejs-server/

COPY --from=builder /app/dist/ .

RUN node bundle.js
