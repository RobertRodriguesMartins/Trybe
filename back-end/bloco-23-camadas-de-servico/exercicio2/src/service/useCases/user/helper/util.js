const test1 = require('../firstName');
const test2 = require('../lastName');
const test3 = require('../email');
const test4 = require('../password');

function returnTests([firstName, lastName, email, password]) {
  return ({
    firstname: test1(firstName),
    lastName: test2(lastName),
    email: test3(email),
    password: test4(password)
  })
}

module.exports = {
  returnTests,
}