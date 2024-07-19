import {validateFactory} from './validator/validateFactory.js';
import {serviceFactory} from './service/serviceFactory.js';

import express from 'express';
import bodyParser from 'body-parser'
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Reply to request with "Hello World!"
app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.post('/api/orders', validateInput, function(req, res) {
  let input = req.body;
  // Create the services via serviceFactory
  const serviceItems = ['name', 'price', 'currency'];
  let services = serviceFactory.createService(serviceItems);
  // Implement services
  for(let i=0; i<services.length; i++){
    try {
      services[i].service(input);
    } catch (error) {
      res.status(400).send("400 - " + error.message);
      return;
    }
  }
  res.status(200).send(req.body);
});

// == A middleware for input validation ==
// Check if required fields are filled, and datatype.
// Suppose all data are required fields, and the datatype should all be strings.
function validateInput(req, res, next){
  let input = req.body;
  let errorCode = "400 - Missing or invalid properties:";
  let flag = true;
  // Create the validators via validateFactory
  const validateItems = ['id', 'name', 'address', 'price', 'currency'];
  let validators = validateFactory.createValidator(validateItems);
  // Implement validators to check if the required fields exist(isExist) and the value type (isValid)
  for(let i=0; i<validators.length; i++){
    try {
      validators[i].isExist(input);
    } catch (error) {
      res.status(400).send("400 - " + error.message);
      return;
    }
    try {
      validators[i].isValid(input);
    } catch (error) {
      res.status(400).send("400 - " + error.message);
      return;
    }
  }
  next();
}

// Start a server on port 8080
const server = app.listen(8080, () => {
  const port = server.address().port
  console.log('[Server]: Server started! At http://localhost:' + port);
})