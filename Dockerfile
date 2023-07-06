FROM node:lts-hydrogen
MAINTAINER Venant-Valery Damien

WORKDIR /app

COPY ./assets assets
COPY ./app.json .
COPY ./babel.config.js .
COPY ./package.json .
COPY ./package-lock.json .
COPY ./tsconfig.json .

RUN npm install

COPY ./src src
COPY ./App.tsx .

ENTRYPOINT ["npx"]
CMD ["expo", "start"]
