import should from 'should';
import {servicePrice} from '../service/servicePrice/servicePrice.js';

describe('#servicePrice', () => {
  // If the price is more than 2000
  it('If the the price is more than 2000, should return "Price is over 2000"', done => {
    let input = {
      "id": "A0000001",
      "name": "Melody Holiday Inn",
      "address": {
        "city": "taipei-city",
        "district": "da-an-district",
        "street": "fuxing-south-road"
      },
      "price": "2001",
      "currency": "USD"
    };
    let testObj = new servicePrice();
    try {
      testObj.service(input);
    } catch (error) {
      error.message.should.equal('Price is over 2000');
    }
    done();
  });
  // If the price is less or euqal to 2000
  it('If the price is less than 2000, should pass', done => {
    let input = {
      "id": "A0000001",
      "name": "Melody Holiday Inn",
      "address": {
        "city": "taipei-city",
        "district": "da-an-district",
        "street": "fuxing-south-road"
      },
      "price": "1000",
      "currency": "USD"
    };
    let testObj = new servicePrice();
    try {
      testObj.service(input);
    } catch (error) {
      should.fail('You should not failed')
    }
    done();
  });
  it('If the price is euqal to 2000, should pass', done => {
    let input = {
      "id": "A0000001",
      "name": "Melody Holiday Inn",
      "address": {
        "city": "taipei-city",
        "district": "da-an-district",
        "street": "fuxing-south-road"
      },
      "price": "2000",
      "currency": "USD"
    };
    let testObj = new servicePrice();
    try {
      testObj.service(input);
    } catch (error) {
      should.fail('You should not failed');
    }
    done();
  });
})