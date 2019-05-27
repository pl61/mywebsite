FROM node:11

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY /public ./public
COPY /server ./server

RUN npm install --production

EXPOSE 3000

CMD ["npm", "start"]