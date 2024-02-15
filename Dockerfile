FROM node:20

WORKDIR /app_docker

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node","index.js"]