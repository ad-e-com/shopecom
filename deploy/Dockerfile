### STAGE 1: Build ###
FROM node:18.16 AS build
RUN npm install -g @angular/cli@16
WORKDIR /angular-ecommerce
COPY ../package.json package-lock.json ./
RUN npm install
COPY . .
RUN ng version
RUN ng build --aot --output-hashing=all

FROM nginx:1.23.3
# COPY ./nginx.config.tm /etc/nginx/nginx.conf
COPY ./nginx.kyecloak.config /etc/nginx/nginx.conf

