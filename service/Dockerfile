# used to build the app
FROM node:22-alpine AS builder

WORKDIR /app

# may need to use later
# RUN apk add --no-cache python3 make g++

COPY ./package*.json .
RUN npm ci

COPY . .
RUN npm run build

RUN npm prune --production

# used to create a web server for app
FROM node:22-alpine

WORKDIR /opt/nodejs-server/

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist/ .

#  may need to use later
# RUN apk add --no-cache libc6-compat

CMD [ "node", "bundle.js" ]
