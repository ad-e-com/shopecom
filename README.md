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