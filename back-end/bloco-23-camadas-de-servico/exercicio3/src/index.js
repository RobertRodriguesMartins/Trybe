const express = require('express');
const bodyParser = require('body-parser');
const cepRouter = require('./controllers/Cep');
const cepError = require('./controllers/middlewares/Cep');
const pingRouter = require('./controllers/Ping');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use('/cep', cepRouter);

app.use('/ping', pingRouter)

app.use(cepError.err);

app.listen(PORT, () =>  console.log(`api rodando na porta ${PORT}`));
