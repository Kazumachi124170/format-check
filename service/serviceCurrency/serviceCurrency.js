import {serviceError, serviceImplement} from '../service.js';

export class serviceCurrency extends serviceImplement{
  service(input){
    // TWD/USD
    if(input.currency!='TWD' && input.currency!='USD'){
      throw new serviceError('Currency format is wrong');
    }
    // USD -> *31 to TWD
    if(input.currency=='USD'){
      input.price = (input.price*31).toString();
      input.currency = 'TWD';
    }
  }
}
