FROM node:17-alpine

RUN npm install -g nodemon

RUN apk add --no-cache mysql-client

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

COPY wait-mysql.sh /wait-mysql.sh

RUN chmod +x /wait-mysql.sh

CMD ["/wait-mysql.sh", "nodemon", "-L", "app.js"]