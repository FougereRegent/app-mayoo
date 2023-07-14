FROM node:lts-hydrogen
MAINTAINER Venant-Valery Damien

WORKDIR /app

COPY ./app.json .
COPY ./babel.config.js .
COPY ./package.json .
COPY ./package-lock.json .
COPY ./tsconfig.json .

RUN npm install

COPY .env .
COPY ./assets assets
COPY ./src src
COPY ./App.tsx .

ENTRYPOINT ["npx"]
CMD ["expo", "start"]
