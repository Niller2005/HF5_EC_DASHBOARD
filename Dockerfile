FROM node:14-alpine

WORKDIR /usr/src/app

RUN npm install --global http-server

COPY ./src ./src
COPY ./public ./public

EXPOSE 5000

CMD [ "http-server", "./public", "-p 5000" ]