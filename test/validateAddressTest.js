import should from 'should';
import {validateAddress} from '../validator/validateAddress/validateAddress.js';

describe('#validateAddress', () => {
  // If the the address does not exist
  it('If the the address does not exist, should return "Missing address"', done => {
    let input = {
      "id": "A0000001",
      "name": "Melody Holiday Inn",
      "price": "2000",
      "currency": "USD"
    };
    let testObj = new validateAddress();
    try {
      testObj.isExist(input);
    } catch (error) {
      error.message.should.equal('Missing address');
    }
    done();
  });

  // If any of the properties in the address does not exist
  it('If any of the properties in address does not exist, should return "Invalid address"', done => {
    let input = {
      "id": "A0000001",
      "name": "Melody Holiday Inn",
      "address": {
        "district": "da-an-district",
        "street": "fuxing-south-road"
      },
      "price": "2000",
      "currency": "TWD"
    };
    let testObj = new validateAddress();
    try {
      testObj.isValid(input);
    } catch (error) {
      error.message.should.equal('Invalid address');
    }
    done();
  });

  // If any of the properties in the address is not a string
  it('If any of the properties in address is not a string, should return "Invalid address"', done => {
    let input = {
      "id": "A0000001",
      "name": "Melody Holiday Inn",
      "address": {
        "city": 123,
        "district": "da-an-district",
        "street": "fuxing-south-road"
      },
      "price": "2000",
      "currency": "TWD"
    };
    let testObj = new validateAddress();
    try {
      testObj.isValid(input);
    } catch (error) {
      error.message.should.equal('Invalid address');
    }
    done();
  });

  // If address exists and all the properties in the address are exist and are strings
  it('If address exists and all the properties in the address are exist and are strings, should pass"', done => {
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
    let testObj = new validateAddress();
    try {
      testObj.isValid(input);
    } catch (error) {
      should.fail('You should not failed');
    }
    done();
  });
})