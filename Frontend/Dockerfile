FROM node:18-alpine

COPY . .

COPY package*.json ./
RUN npm run build
# Install a static server to serve the build
RUN npm install -g serve

EXPOSE 3000
CMD ["serve", "-s", "build"]
