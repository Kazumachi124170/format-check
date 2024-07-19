import should from 'should';
import {validateID} from '../validator/validateID/validateID.js';

describe('#validateID', () => {
  // If the the ID does not exist
  it('If the the ID does not exist, should return "Missing id"', done => {
    let input = {
      "name": "Melody Holiday Inn",
      "address": {
        "city": "taipei-city",
        "district": "da-an-district",
        "street": "fuxing-south-road"
      },
      "price": "2000",
      "currency": "TWD"
    };
    let testObj = new validateID();
    try {
      testObj.isExist(input);
    } catch (error) {
      error.message.should.equal('Missing id');
    }
    done();
  });

  // If the the ID is not a string
  it('If the the ID is not a string, should return "Invalid id"', done => {
    let input = {
      "id": NaN,
      "name": "Melody Holiday Inn",
      "address": {
        "city": "taipei-city",
        "district": "da-an-district",
        "street": "fuxing-south-road"
      },
      "price": "2000",
      "currency": "TWD"
    };
    let testObj = new validateID();
    try {
      testObj.isValid(input);
    } catch (error) {
      error.message.should.equal('Invalid id');
    }
    done();
  });

  // If the the ID exists and ID is a string
  it('If the the ID exists and ID is a string, should pass"', done => {
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
    let testObj = new validateID();
    try {
      testObj.isValid(input);
    } catch (error) {
      should.fail('You should not failed');
    }
    done();
  });
})