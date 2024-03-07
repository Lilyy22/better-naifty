FROM node:18.12.1-alpine

WORKDIR /naifty

COPY package.json .

COPY package-lock.json .

COPY . .

RUN npm ci

EXPOSE 3000

CMD ["npm", "run", "start"]