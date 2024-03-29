#   use of shareReplay
```
//pipe(map(response => response._embedded.countries),shareReplay())

  getCountries(): Observable<Country[]> {

    return this.httpClient.get<GetResponseCountries>(this.countriesUrl).pipe(
      map(response => response._embedded.countries),shareReplay()
    );
```
<p>
In modern web development, Angular has emerged as a powerful and popular framework for building dynamic and responsive applications. One of the common challenges faced by Angular developers is managing duplicate HTTP requests triggered by multiple subscribers. These duplicate requests can result in inefficient network usage and unnecessary server load. Fortunately, the RxJS library, which is an integral part of Angular, provides a solution to this problem through the shareReplay operator. In this article, we will explore how the shareReplay operator can help us avoid duplicate HTTP requests in Angular applications
</p>


# To build image first create dist using ng build
```

cd angular-ecommerce/

docker run --rm \
-v ./:/app -w /app \
assaduzzaman/ng-build:node18ngcli16 \
npm install && ng version && ng build --aot --output-hashing=all
```
# Now build deployment image
```
docker build -t assaduzzaman/shopecom-ui -f min.Dockerfile .
```

# run with host and port
```
ng serve --host shopecom.com --port 80
```
# AngularEcommerce

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.18.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
