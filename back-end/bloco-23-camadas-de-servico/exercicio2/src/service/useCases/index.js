const modelUsers = require('../../model/Users');
const util = require('./user/helper/util');

async function callUserModel(values) {
  const result = await modelUsers.add(values);

  return result;
}

async function checkInputs(values) {
  const test = Object.values(util.returnTests(values));
  //by error i mean false bool, true if its ok.
  const errors = test.find((test) => test !== true);
  // if there are errors then return error 
  if (errors) {
    return ({
      status: 500,
      response: {
        error: true,
        message: errors
      }
    });
  }
  //if its ok, it should call model and bring result to express
  const result = await callUserModel(values);
  return ({
    status: 201,
    response: result
  });
}

async function getAllUsers() {
  const result = await modelUsers.getAll()

  if(result.length < 1) {
    return ({
      status: 200,
      response: []
    })
  };
  return ({
    status: 200,
    response: result
  })
}

module.exports = {
  checkInputs,
  getAllUsers
};
