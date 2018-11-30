FROM node:latest

RUN mkdir -p /src/app
WORKDIR /src/app

COPY . /src/app

RUN npm run react

EXPOSE 3000

CMD ["nodemon", "server.js"]