FROM ubuntu:20.04
COPY . .
RUN  apt-get update -y
RUN  apt-get upgrade -y
RUN  apt-get install nodejs -y
RUN  apt-get install npm -y
CMD ["node","server.js"]