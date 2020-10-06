FROM node:14-alpine

WORKDIR /usr/src/app

COPY rollup.config.js ./
COPY package*.json ./

RUN npm install http-server

COPY ./src ./src
COPY ./public ./public

EXPOSE 5000

ENV HOST=0.0.0.0

CMD [ "http-server", "./public", "-p 5000" ]