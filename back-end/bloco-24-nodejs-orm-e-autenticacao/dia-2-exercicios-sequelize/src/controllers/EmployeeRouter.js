const router = require('express').Router();
const EmployeeController = require('./EmployeeController');

router.get('/', EmployeeController.all);

module.exports = router;
