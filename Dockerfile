FROM node:18.18.0-alpine3.17

WORKDIR /client

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
