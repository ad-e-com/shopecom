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
    MYSQL_PASSWORD: userpass
    MYSQL_DATABASE: myimage_db
  volumes:
   - ./database/db-dump:/docker-entrypoint-initdb.d
```

```
docker run --rm \
                    -v $PROJECT_LOCATION:/app \
                    -v $M2_REPO:/root/.m2/ -w /app \
                    maven:3.8.6-eclipse-temurin-19-alpine \
                    mvn clean package -B \
                    -Dmaven.test.skip=true \
                    -Dactive.profile=$DEPLOYMENT_ENV

docker run -rm \
-v ./:/app -w /app \
assaduzzaman/ng-build:node18ngcli16 \
npm install && ng version && ng build --aot --output-hashing=all

```