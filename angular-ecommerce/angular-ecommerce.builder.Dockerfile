FROM node:18.16 AS build
RUN npm install -g @angular/cli@16
WORKDIR /app