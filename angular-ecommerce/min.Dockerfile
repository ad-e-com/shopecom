### STAGE 2: Run ###
FROM nginx:1.23.3
COPY ./nginx.config /etc/nginx/nginx.conf
COPY ./dist/angular-ecommerce /usr/share/nginx/html