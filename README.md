# Ota

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3.

Developed on node version `16.13.1`

## Instructions

`npm i`

To start dev server  
`npm start`

To build a web component  
`npm run build:element`  
The command above will create a **public folder** and make sure to uncomment the script tag of the **wc-booking.js** in the _./public/index.html_

_./public/index.html_

```html
...
  <div>
    <wc-booking></wc-booking>
    <!-- <wc-booking class="item-hover"></wc-booking> -->
  </div>

  <!-- UNCOMMENT SCRIPT BELOW TO TEST THE WEB COMPONENT -->
  <!-- <script src="./ota/component/wc-booking.js">
  </script> -->
</body>

</html>

```

To test the web component build in local server  
`npm run start:element`

The web component accepts adding **item-hover** class to add hover styles on list items

To build as angular app  
`npm run build`

---

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
