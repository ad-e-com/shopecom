worker_processes  1;

events {
    worker_connections  1024;
}

http {
    server {
        listen 80;
        server_name  keycloak;



        gzip on;
        gzip_min_length 1000;
        gzip_proxied expired no-cache no-store private auth;
        gzip_types text/plain text/css application/json application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript;
        
        add_header Access-Control-Allow-Origin *;

        location / {

            proxy_pass       http://keycloak:8080/;
            autoindex off;
            server_tokens off;
            proxy_next_upstream error timeout invalid_header http_500 http_502 http_503 http_504;

            ### Set headers ####
            proxy_set_header        Accept-Encoding   "";
            proxy_set_header        Host            $host;
            proxy_set_header        X-Real-IP       $remote_addr;
            proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;


            #Pass protocol http or https to X-Forwarded-Proto header##
            proxy_set_header        X-Forwarded-Proto $scheme;
            add_header              Front-End-Https   on;


            ### By default we don't want to redirect it ####
            proxy_redirect     off;

                    ### For big url request
            proxy_busy_buffers_size   512k;
            proxy_buffers   4 512k;
            proxy_buffer_size   256k;

        } 
    }    
    server {
        listen 80;
        server_name  shopecom-service;

        root   /usr/share/nginx/html;
        index  index.html index.htm;
        include /etc/nginx/mime.types;

        gzip on;
        gzip_min_length 1000;
        gzip_proxied expired no-cache no-store private auth;
        gzip_types text/plain text/css application/json application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript;
        
        add_header Access-Control-Allow-Origin *;

        location / {
        try_files $uri $uri/ /index.html;
        } 
    }
}
