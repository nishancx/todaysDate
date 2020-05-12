# builder image
FROM node:12-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install --production

COPY public ./public
COPY src ./src
COPY views ./views

CMD ["npm", "run", "start"]
