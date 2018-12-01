FROM node:latest

RUN mkdir -p /src/app
WORKDIR /src/app

COPY . /src/app

EXPOSE 3000

CMD ["npm", "run", "reactx"]