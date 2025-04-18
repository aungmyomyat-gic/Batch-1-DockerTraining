FROM node:17-alpine

RUN npm install -g nodemon

RUN apk add --no-cache mysql-client

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD ["nodemon", "-L", "app.js"]