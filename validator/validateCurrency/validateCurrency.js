import {validateError, validateCheck} from '../validator.js';

export class validateCurrency extends validateCheck{
  isExist(input){
    if(!input.hasOwnProperty('currency')){
      throw new validateError('Missing currency');
    }
  }
  isValid(input){
    if(!(typeof input.currency === 'string' || input.currency instanceof String)){
      throw new validateError('Invalid currency');
    }
  }
}