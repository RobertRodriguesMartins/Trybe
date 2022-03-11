const app = require('express')();
const bodyParser = require('body-parser');
const EmployeeRouter = require('./src/controllers/EmployeeRouter');
const errHandler = require('./src/middlewares/errHandler');

const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use('/employees', EmployeeRouter);

app.use(errHandler);
app.listen(PORT);