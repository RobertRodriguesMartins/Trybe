const express = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');
const service = require('./service/useCases/index');

const app = express();
const PORT = 3001

app.use(bodyParser.json());

app.get('/user', rescue(async (req, res) => {
  const result = await service.getAllUsers();
  const status = result.status;
  const message = result.response;
  return res.status(status).json(message);
}))
app.post('/user', rescue(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const values = [firstName, lastName, email, password];
  const result = await service.checkInputs(values);
  const status = result.status;
  const message= result.response;
  return res.status(status).json(message)
}));

//error handler below
app.use((err, req, res, next) => {
  return res.status(500).json({message: err.message});
})

app.listen(PORT, () => console.log('online'));
