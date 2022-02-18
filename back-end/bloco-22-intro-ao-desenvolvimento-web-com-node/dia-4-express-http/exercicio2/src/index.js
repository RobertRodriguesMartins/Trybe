const express = require('express');
const bodyParser = require('body-parser');
const createInstance = require('./api/index');

const api = createInstance();

const app = express();

app.use(bodyParser.json());
app.get('/ping', api.log, api.getPing);
app.get('/simpsons/:id',api.log, api.getSimpsonById);
app.get('/simpsons',api.log, api.getAllSimpsons);
app.post('/simpsons',api.log, api.createNewSimpson)
app.post('/hello', api.log, api.postHello);
app.post('/greetings', api.log, api.postGreetings);
app.put('/users/:name/:age', api.log, api.editUser);

app.listen(3001, () => console.log('aplicação ouvindo na porta 3001'));
