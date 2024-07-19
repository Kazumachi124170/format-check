# AsiaYo's pre test
## Description
A simple code for an API that provides order format checking and conversion.
## Environment
* docker v27.0.3
* node v20.15.1
* express v4.19.2
* mocha v10.6.0
* should v13.2.3

## How to run the code
### Method 1. via npm
1. Clone the repositary to your pc
2. Switch to the root of the repositary
3. Run `npm install` on command line
4. Start the server by running `node inedex.js` 
5. Run test cases on the command line by curl  
    You can custimize your testing cases by curl like:
    ```
    $ curl --request POST \
      --url http://localhost:8080/api/orders \
      --header 'content-type: application/json' \
      --data '{
        "id": "A0000001",
        "name": "Melody Holiday Inn",
        "address": {
          "city": "taipei-city",
          "district": "da-an-district",
          "street": "fuxing-south-road"
        },
        "price": "2000",
        "currency": "USD"
      }'
    ```
### Method 2. via Docker
1. Pull the image by `docker pull kazuma124170/format-check`
2. Run the server by `docker run -p 8000:8080 kazuma124170/format-check`  
If you want to run the server with detached mode: `docker run -d -p 8000:8000 node-docker`
3. Run test cases on the command line by curl  
    You can custimize your testing cases by curl like:
    ```
    $ curl --request POST \
      --url http://localhost:8080/api/orders \
      --header 'content-type: application/json' \
      --data '{
        "id": "A0000001",
        "name": "Melody Holiday Inn",
        "address": {
          "city": "taipei-city",
          "district": "da-an-district",
          "street": "fuxing-south-road"
        },
        "price": "2000",
        "currency": "USD"
      }'
    ```
## How to run the unit tests
Our unit test is base on mocha and use should for the conditon testing.

Just simply type `mocha` on command in the root of the repositary:
```
$ mocha
```

### Some testing examples
* serviceCurrency  
    ✔ If the currency is USD, should modify price and change the currency to TWD  
    ✔ If the currency is TWD, Input should stay the same  
    ✔ If the currency is not TWD or USD, should return "Currency format is wrong"  
* serviceName  
    ✔ If the name contains non-English characters, should return "Name contains non-English characters"  
    ✔ If the name is not capitalized, should return "Name is not capitalized"  
    ✔ If the name does not contain non-English characters and is capitalized, should pass  

* servicePrice  
    ✔ If the the price is more than 2000, should return "Price is over 2000"  
    ✔ If the price is less than 2000, should pass  
    ✔ If the price is euqal to 2000, should pass  

## SOLID and Design pattern
Follow the SRP, OCP, DIP in SOLID, and the factory design pattern.
* Single Responsibility Principle: Classes have only one responsibility.  
    For example:  
    In `./validator/validateID/validateID.js`, class validateID is only for checking the id property.
`./validator/validateID/validateID.js`:
    ``` js
    import {validateError, validateCheck} from '../validator.js';

    export class validateID extends validateCheck{
      isExist(input){
        if(!input.hasOwnProperty('id')){
          throw new validateError('Missing id');
        }
      }
      isValid(input){
        if(!(typeof input.id === 'string' || input.id instanceof String)){
          throw new validateError('Invalid id');
        }
      }
    }
    ```
* Open/Closed Principle: Entities should be open for extension but closed for modification.  
    If you want to add another property to the input which need checkings, you just have to extend the class from the interface like`validateCheck` in `./validateor/validator.js` or `serviceImplement` in `./service/service.js`, and implement the checking schema. When using the class, you can follow the factory design pattern.
    `validateCheck` in `./validateor/validator.js`: 
    ```js
    // An interface for validation functions
    export class validateCheck{
      isExist(){}
      isValid(){}
    }
    ```
    `serviceImplement` in `./service/service.js`: 
    ```js
    // An interface for service functions
    export class serviceImplement{
      service(){}
    }
    ```
    
* Dependency Inversion Principle: High-level modules should not depend on low-level modules. Both should depend on abstractions.  
    For example: `index.js` doesn't directly depend on all validator classes and service classes such as `validateAddress` in `./valdator/validateAddress/validateAddress.js` and `serviceCurrency` in  `./service/serviceCurrency/serviceCurrency.js`
    
    
* Factory Design Pattern:  
`./validate/validateFactory` and `./service/serviceFactory` provide an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.  
`validateFactory`:
    ``` js
    // A Factory for creating and return validators
    export class validateFactory{
      static createValidator(validateItems){
        let validators = [];
        validateItems.forEach(function(value){
          switch(value){
            case 'id':
              validators.push(new validateID());
              break;
            case 'name':
              validators.push(new validateName());
              break;
            case 'address':
              validators.push(new validateAddress());
              break;
            case 'price':
              validators.push(new validatePrice());
              break;
            case 'currency':
              validators.push(new validateCurrency());
              break;
          }
        });
        return validators;
      }
    }
    ```

    `serviceFactory`:

    ```js
    // A Factory for creating and return services
    export class serviceFactory{
      static createService(serviceItems){
        let services = [];
        serviceItems.forEach(function(value){
          switch(value){
            case 'name':
              services.push(new serviceName());
              break;
            case 'price':
              services.push(new servicePrice());
              break;
            case 'currency':
              services.push(new serviceCurrency());
              break;
          }
        });
        return services;
      }
    }
    ```
    

## Link to docker hub
[Dockerhub: kazuma124170/format-check](https://hub.docker.com/repository/docker/kazuma124170/format-check/general)
