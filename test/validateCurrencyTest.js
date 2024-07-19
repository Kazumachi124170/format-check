import should from 'should';
import {validateCurrency} from '../validator/validateCurrency/validateCurrency.js';

describe('#validateCurrency', () => {
  // If the the currency does not exist
  it('If the the currency does not exist, should return "Missing currency" ', done => {
    let input = {
      "id": "A0000001",
      "name": "Melody Holiday Inn",
      "address": {
        "city": "taipei-city",
        "district": "da-an-district",
        "street": "fuxing-south-road"
      },
      "price": "2000",
    };
    let testObj = new validateCurrency();
    try {
      testObj.isExist(input);
    } catch (error) {
      error.message.should.equal('Missing currency');
    }
    done();
  });

  // If the the currency is not a string
  it('If the the currency is not a string, should return "Invalid currency"', done => {
    let input = {
      "id": "A0000001",
      "name": "Melody Holiday Inn",
      "address": {
        "city": "taipei-city",
        "district": "da-an-district",
        "street": "fuxing-south-road"
      },
      "price": "2000",
      "currency": true
    };
    let testObj = new validateCurrency();
    try {
      testObj.isValid(input);
    } catch (error) {
      error.message.should.equal('Invalid currency');
    }
    done();
  });

   // If the the currency exists, and is a string
   it('If the the currency exists, and is a string, should pass', done => {
    let input = {
      "id": "A0000001",
      "name": "Melody Holiday Inn",
      "address": {
        "city": "taipei-city",
        "district": "da-an-district",
        "street": "fuxing-south-road"
      },
      "price": "2000",
      "currency": "TWD"
    };
    let testObj = new validateCurrency();
    try {
      testObj.isValid(input);
    } catch (error) {
      should.fail('You should not failed');
    }
    done();
  });
})