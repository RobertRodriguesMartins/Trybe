const express = require('express');
const rescue = require('express-rescue');
const Cep = require('../services/Cep');

const router = express.Router();

router.get('/', rescue(async (req, res) => {
  const result = await Cep.getAll();
  
  return res.status(200).json(result);
}));

router.get('/:cep', rescue(async (req, res) => {
  const { cep } = req.params;
  const result = await Cep.getAddress(cep);

  return res.status(200).json(result);
}));

router.post('/', rescue(async (req, res) => {
  const values = req.body;
  const result = await Cep.addAddress(values);

  return res.status(201).json(result);
}));

module.exports = router;
