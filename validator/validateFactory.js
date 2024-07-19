import {validateID} from './validateID/validateID.js';
import {validateName} from './validateName/validateName.js';
import {validateAddress} from './validateAddress/validateAddress.js';
import {validatePrice} from './validatePrice/validatePrice.js';
import {validateCurrency} from './validateCurrency/validateCurrency.js';

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