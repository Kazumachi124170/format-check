import {validateError, validateCheck} from '../validator.js';

export class validateName extends validateCheck{
  isExist(input){
    if(!input.hasOwnProperty('name')){
      throw new validateError('Missing name');
    }
  }
  isValid(input){
    if(!(typeof input.name === 'string' || input.name instanceof String)){
      throw new validateError('Invalid name');
    }
  }
}