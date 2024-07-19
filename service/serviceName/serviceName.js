import {serviceError, serviceImplement} from '../service.js';

export class serviceName extends serviceImplement{
  service(input){
    // English characters
    let CharactersCheck = /^[a-zA-Z ]+$/;
    if(!CharactersCheck.test(input.name)){
      throw new serviceError('Name contains non-English characters');
    }
    // Capital first letter on all words
    let words = input.name.split(' ');
    words.forEach(function(value){
    if(!(value[0]===value[0].toUpperCase())){
      throw new serviceError('Name is not capitalized');
    }
    });
  }
}

