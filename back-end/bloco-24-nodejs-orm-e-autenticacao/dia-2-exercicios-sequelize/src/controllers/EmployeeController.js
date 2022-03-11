const { Employee, Address } = require('../models/index');

async function all(req, res, next) {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses', attributes: { exclude: ['employeeId'] } },
    });

    return res.status(200).json(employees);
  } catch (err) {
    next(err)
  }
}

module.exports = {
  all
}