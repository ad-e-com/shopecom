# To access keycloak admin
```
http://shopecom-service/admin/master/console
```

# Mysql with init data
```
mysql:
  image: mysql
  ports:
   - "3306:3306"
  environment:
    MYSQL_ROOT_PASSWORD: rootpass
    MYSQL_USER: dbuser
    MYSQL_PASSWORD: ecommerceapp
    MYSQL_DATABASE: ecommerceapp
  volumes:
   - ./database/db-dump:/docker-entrypoint-initdb.d
```
# To build backend application which will generate jar file
```
docker run --rm \
  -v ./:/app \
  -v $(cd ~/.m2 && pwd):/root/.m2/ -w /app \
  maven:3.8.8-eclipse-temurin-17-alpine \
  mvn clean package -B \
  -Dmaven.test.skip=true \
  -Dactive.profile=docker

```
# To build frontend application which will generate dist folder
```
docker run --rm \
-v ./:/app -w /app \
assaduzzaman/ng-build:node18ngcli16 \
npm install && ng version && ng build --aot --output-hashing=all

```