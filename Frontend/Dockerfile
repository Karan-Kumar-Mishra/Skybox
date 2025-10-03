FROM node:18-alpine



COPY package*.json ./
COPY .env ./.env
COPY public ./public
COPY src ./src

RUN npm install
RUN npm run build

# Install a static server to serve the build
RUN npm install -g serve

EXPOSE 3000
CMD ["serve", "-s", "build"]
