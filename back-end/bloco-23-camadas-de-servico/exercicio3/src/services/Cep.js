const Cep = require('../models/Cep');
const Joi = require('joi');

function cepValidation(cep) {
  //the rule is xxxxx-xxx, also it have to be a number
  const rule = new RegExp(/\d{5}-?\d{3}/);

  return rule.test(cep);
}

function contentValidation(content) {
  //it should return a domain error if there are no results in db
  //remainder: errors are getting handler by Cep error middleware in controllers
  //the service layer just throw it to controller layer, wich handler the right response to client
  if (content.length === 0) throw ({ error: { code: "notFound", message: "CEP não encontrado" } })
  return content;
}

async function getAll() {
  //do not require any params, it should get all ceps posted in db
  const result = await Cep.getAll();
  
  return result;
}

async function getAddress(cep) {
  //validate cep
  const valid = cepValidation(cep);
  //if there's an error throw 'cep inválido' wich is a domain error. else continue execution
  if (!valid) throw ({ error: { code: "invalidData", message: "CEP inválido" } });

  const result = await Cep.getAddress(cep);
  const content = contentValidation(result);
  return content;
}

async function addAddress({ cep, logradouro, bairro, localidade, uf }) {
  const values = [cep, logradouro, bairro, localidade, uf];

  const { error } = Joi.object({
    cep: Joi.string().not().empty().required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required()
  })
  .validate({ cep, logradouro, bairro, localidade, uf });

  if (error) throw ({ error: { code: 'emptyField', message: error.details[0].message } });

  const result = await Cep.addAddress(values);
  
  return result;
}

module.exports = {
  getAll,
  getAddress,
  addAddress
}