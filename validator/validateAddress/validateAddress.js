import {validateError, validateCheck} from '../validator.js';

export class validateAddress extends validateCheck{
  isExist(input){
    if(!input.hasOwnProperty('address')){
      throw new validateError('Missing address');
    }
  }
  isValid(input){
    if(!input.address.hasOwnProperty('city')){
      throw new validateError('Invalid address');
    }else if(!(typeof input.address.city === 'string' || input.address.city instanceof String)){
      throw new validateError('Invalid address');
    }
    if(!input.address.hasOwnProperty('district')){
      throw new validateError('Invalid address');
    }else if(!(typeof input.address.district === 'string' || input.address.district instanceof String)){
      throw new validateError('Invalid address');
    }
    if(!input.address.hasOwnProperty('street')){
      throw new validateError('Invalid address');
    }else if(!(typeof input.address.street === 'string' || input.address.street instanceof String)){
      throw new validateError('Invalid address');
    }
  }
}