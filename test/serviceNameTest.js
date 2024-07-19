import should from 'should';
import {serviceName} from '../service/serviceName/serviceName.js';

describe('#serviceName', () => {
  // If the name contains non-English characters
  it('If the name contains non-English characters, should return "Name contains non-English characters" ', done => {
    let input = {
      "id": "A0000001",
      "name": "1Melody Holiday Inn",
      "address": {
        "city": "taipei-city",
        "district": "da-an-district",
        "street": "fuxing-south-road"
      },
      "price": "2000",
      "currency": "USD"
    };
    let testObj = new serviceName();
    try {
      testObj.service(input);
    } catch (error) {
      error.message.should.equal('Name contains non-English characters');
    }
    done();
  });
  // If the name is not capitalized
  it('If the name is not capitalized, should return "Name is not capitalized"', done => {
    let input = {
      "id": "A0000001",
      "name": "Melody holiday Inn",
      "address": {
        "city": "taipei-city",
        "district": "da-an-district",
        "street": "fuxing-south-road"
      },
      "price": "2000",
      "currency": "TWD"
    };
    let testObj = new serviceName();
    try {
      testObj.service(input);
    } catch (error) {
      error.message.should.equal('Name is not capitalized');
    }
    done();
  })
  // If the name does not contain non-English characters and is capitalized (Success)
  it('If the name does not contain non-English characters and is capitalized, should pass', done => {
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
    let testObj = new serviceName();
    try {
      testObj.service(input);
    } catch (error) {
      should.fail('You should not failed');
    }
    done();
  })
})