# To run single service from docker-compose file
```
docker-compose -f docker-compose.yaml up mysqldb -d
# access the application

http://shopecom-service
Test credit card number: https://stripe.com/docs/testing

# login user credentials
user: user
password: user


# copy file from docker container to host
docker cp keycloak:/tmp/export.json export.json
```
# To export full realm
```

keycloak$ docker exec -it keycloak  ./opt/keycloak/bin/kc.sh export --realm dev --file /tmp/dev.json
#  ----or-----
keycloak$ docker exec keycloak  ./opt/keycloak/bin/kc.sh export --realm dev --file /tmp/dev.json

# for windows --tty needs to add
docker exec -it keycloak --tty ./opt/keycloak/bin/kc.sh export --realm dev --file /tmp/dev.json

docker cp keycloak:/tmp/dev.json .


```

# To access keycloak admin to import client
```
http://shopecom-service/admin/master/console

user: admin
password: admin


# Build backend:
```

# Build backend

```
cd spring-boot-ecommerce/


# with out installing jdk and mavne
docker run --rm \
  -v ./:/app \
  -v $(cd ~/.m2 && pwd):/root/.m2/ -w /app \
  maven:3.8.8-eclipse-temurin-17-alpine \
  mvn clean package -B \
  -Dmaven.test.skip=true \
  -Dactive.profile=docker

#------ or installing jdk and maven-----------------
mvn clean package -B \
-Dmaven.test.skip=true \
-Dactive.profile=docker

# To build backend image
docker build -t assaduzzaman/shopecom-api .
# or with docker file name
docker build -t assaduzzaman/shopecom-api -f Dockerfile .

```
# Build Frontend
```
cd angular-ecommerce/

docker run --rm \
-v ./:/app -w /app \
assaduzzaman/ng-build:node18ngcli16 \
npm install && ng version && ng build --aot --output-hashing=all

docker build -t assaduzzaman/shopecom-ui -f min.Dockerfile .
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