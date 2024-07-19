import {serviceError, serviceImplement} from '../service.js';

export class servicePrice extends serviceImplement{
  service(input){
    // >2000
    if(!Number.isNaN(input.price)){
      if(parseInt(input.price, 10)>2000){
        throw new serviceError('Price is over 2000');
      }
    }
  }
}