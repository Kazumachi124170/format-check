import should from 'should';
import {serviceCurrency} from '../service/serviceCurrency/serviceCurrency.js';

describe('#serviceCurrency', () => {
  // If the currency is 'USD'
  it('If the currency is USD, should modify price and change the currency to TWD', done => {
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
    let testObj = new serviceCurrency();
    testObj.service(input);
    let output = {
      "id": "A0000001",
      "name": "Melody Holiday Inn",
      "address": {
        "city": "taipei-city",
        "district": "da-an-district",
        "street": "fuxing-south-road"
      },
      "price": "62000",
      "currency": "TWD"
    };
    should(input).eql(output);

    done();
  });
  // If the currency is 'TWD'
  it('If the currency is TWD, Input should stay the same', done => {
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
    let testObj = new serviceCurrency();
    testObj.service(input);
    let output = {
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
    should(input).eql(output);
    done();
  })
  // If the currency is not'TWD' or 'USD'
  it('If the currency is not TWD or USD, should return "Currency format is wrong"', done => {
    let input = {
      "id": "A0000001",
      "name": "Melody Holiday Inn",
      "address": {
        "city": "taipei-city",
        "district": "da-an-district",
        "street": "fuxing-south-road"
      },
      "price": "2000",
      "currency": "AAA"
    };
    let testObj = new serviceCurrency();
    try {
      testObj.service(input);
    } catch (error) {
      error.message.should.equal('Currency format is wrong');
    }
    done();
  })
})