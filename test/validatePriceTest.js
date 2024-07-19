import should from 'should';
import {validatePrice} from '../validator/validatePrice/validatePrice.js';

describe('#validatePrice', () => {
  // Check if the price is exist
  it('If the the price does not exist, should return "Missing price"', done => {
    let input = {
      "id": "A0000001",
      "name": "Melody Holiday Inn",
      "address": {
        "city": "taipei-city",
        "district": "da-an-district",
        "street": "fuxing-south-road"
      },
      "currency": "TWD"
    };
    let testObj = new validatePrice();
    try {
      testObj.isExist(input);
    } catch (error) {
      error.message.should.equal('Missing price');
    }
    done();
  });

  // If the the price is not a string
  it('If the the price is not a string, should return "Invalid price"', done => {
    let input = {
      "id": "A0000001",
      "name": "Melody Holiday Inn",
      "address": {
        "city": "taipei-city",
        "district": "da-an-district",
        "street": "fuxing-south-road"
      },
      "price": 222,
      "currency": "TWD"
    };
    let testObj = new validatePrice();
    try {
      testObj.isValid(input);
    } catch (error) {
      error.message.should.equal('Invalid price');
    }
    done();
  });

  // If the the price exists and is a string
  it('If the the price is not a string, should pass"', done => {
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
    let testObj = new validatePrice();
    try {
      testObj.isValid(input);
    } catch (error) {
      should.fail('You should not failed');
    }
    done();
  });
})