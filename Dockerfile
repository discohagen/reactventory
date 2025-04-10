FROM node:22.14.0-alpine AS builder

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:latest

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html