import {serviceName} from './serviceName/serviceName.js';
import {servicePrice} from './servicePrice/servicePrice.js';
import {serviceCurrency} from './serviceCurrency/serviceCurrency.js';

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