const modelUsers = require('../../model/Users');
const test1 = require('./user/firstName');
const test2 = require('./user/lastName');
const test3 = require('./user/email');
const test4 = require('./user/password');

function returnTests([firstName, lastName, email, password]) {
  return ({
    firstname: test1(firstName),
    lastName: test2(lastName),
    email: test3(email),
    password: test4(password)
  })
}

async function callUserModel(values) {
  const result = await modelUsers.add(values);

  return result
}

async function checkInputs(values) {
  const test = Object.values(returnTests(values));
  //by error i mean false bool, true if its ok.
  const errors = test.find((test) => test !== true);
  // if there are errors then return error 
  if (errors) {
    return errors;
  }
  //if its ok, it should call model and bring result to express
  const result = await callUserModel(values);
  return result;
}

module.exports = {
  checkInputs
};
