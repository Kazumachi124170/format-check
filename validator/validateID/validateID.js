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