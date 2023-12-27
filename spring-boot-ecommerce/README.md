```angular2html

mvn clean package -B \
-Dmaven.test.skip=true \
-Dactive.profile=docker

docker build -t shopecom:backend .
docker run --detach --name=mysql_5_7 --restart=always --volume=/Volumes/vm/dockerdata/mysql-data:/var/lib/mysql -p 3306:3306  --env="MYSQL_ROOT_PASSWORD=123456" mysql:5.7


CREATE USER 'ecommerceapp'@'%' IDENTIFIED BY 'ecommerceapp';
GRANT ALL PRIVILEGES ON * . * TO 'ecommerceapp'@'%';

ALTER USER 'ecommerceapp'@'%' IDENTIFIED WITH mysql_native_password BY 'ecommerceapp';
```

HEADS UP FOR SPRING BOOT 3 AND OKTA 3
HEADS UP FOR SPRING BOOT 3 AND OKTA 3

If you are using Spring Boot 3, then you need to make slight changes to the application

You will see these files in upcoming videos. Make note of these changes.



# 1. Replace okta starter with the below (in pom.xml)


```
<dependency>
    <groupId>com.okta.spring</groupId>
    <artifactId>okta-spring-boot-starter</artifactId>
    <version>3.0.2</version>
    <!--<version>3.0.6</version> -->
</dependency>

```


# 2. Replace SecurityConfiguration with below:

```

package com.luv2code.ecommerce.config;

import com.okta.spring.boot.oauth.Okta;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.web.accept.ContentNegotiationStrategy;
import org.springframework.web.accept.HeaderContentNegotiationStrategy;

@Configuration
public class SecurityConfiguration {

    @Bean
    protected SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
 
        //protect endpoint /api/orders
        http.authorizeHttpRequests(requests ->
                        requests
                                .requestMatchers("/api/orders/**")
                                .authenticated()
                                .anyRequest().permitAll())
                .oauth2ResourceServer(oauth2ResourceServer -> oauth2ResourceServer.jwt(Customizer.withDefaults()));
 
        // + CORS filters
        http.cors(Customizer.withDefaults());
 
        // + content negotiation strategy
        http.setSharedObject(ContentNegotiationStrategy.class, new HeaderContentNegotiationStrategy());
 
        // + non-empty response body for 401 (more friendly)
        Okta.configureResourceServer401ResponseBody(http);
 
        // we are not using Cookies for session tracking >> disable CSRF
        http.csrf(AbstractHttpConfigurer::disable);
 
        return http.build();
    }

}
```



# 3. You may encounter jakarta validation issue. Add the following dependencies in pom.xml

```

<dependency>
   <groupId>org.springdoc</groupId>
   <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
   <version>2.0.0</version>
</dependency>
<dependency>
   <groupId>org.springframework.boot</groupId>
   <artifactId>spring-boot-starter-validation</artifactId>
</dependency>


Be sure to reload your Maven pom.xml file.
```

```angular2html
echo "# backend" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:ad-e-com/spring-boot-ecommerce.git
git push -u origin main

```
# …or push an existing repository from the command line
```angular2html
git remote add origin git@github.com:ad-e-com/backend.git
git branch -M main
git push -u origin main

git merge origin/main --allow-unrelated-histories
```