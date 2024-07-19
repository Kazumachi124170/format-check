import should from 'should';
import {validateName} from '../validator/validateName/validateName.js';

describe('#validateName', () => {
  // If the the name does not exist
  it('If the the name does not exist, should return "Missing name"', done => {
    let input = {
      "id": "A0000001",
      "address": {
        "city": "taipei-city",
        "district": "da-an-district",
        "street": "fuxing-south-road"
      },
      "price": "2000",
      "currency": "TWD"
    };
    let testObj = new validateName();
    try {
      testObj.isExist(input);
    } catch (error) {
      error.message.should.equal('Missing name');
    }
    done();
  });

  // If the the name is not strings
  it('If the the name is not strings, should return "Invalid name"', done => {
    let input = {
      "id": "A0000001",
      "name": 4.2,
      "address": {
        "city": "taipei-city",
        "district": "da-an-district",
        "street": "fuxing-south-road"
      },
      "price": "2000",
      "currency": "TWD"
    };
    let testObj = new validateName();
    try {
      testObj.isValid(input);
    } catch (error) {
      error.message.should.equal('Invalid name');
    }
    done();
  });

  // If the the name exists and is a strings
  it('If the the name exists and is a strings, should pass', done => {
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
    let testObj = new validateName();
    try {
      testObj.isValid(input);
    } catch (error) {
      should.fail('You should not failed');
    }
    done();
  });
})