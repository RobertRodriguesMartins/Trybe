const express = require('express');
const rescue = require('express-rescue');
const Ping = require('../services/Ping');

const router = express.Router();

router.get('/', rescue(async (req, res) => {
  const result = await Ping.getPing();
  return res.status(200).json(result);
}));

module.exports = router;