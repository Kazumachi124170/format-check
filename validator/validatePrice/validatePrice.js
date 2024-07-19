import {validateError, validateCheck} from '../validator.js';

export class validatePrice extends validateCheck{
  isExist(input){
    if(!input.hasOwnProperty('price')){
      throw new validateError('Missing price');
    }
  }
  isValid(input){
    if(!(typeof input.price === 'string' || input.price instanceof String)){
      throw new validateError('Invalid price');
    }
  }
}
