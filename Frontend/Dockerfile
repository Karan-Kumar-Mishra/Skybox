FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
COPY .env /.env
COPY public ./public
COPY src ./src
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
