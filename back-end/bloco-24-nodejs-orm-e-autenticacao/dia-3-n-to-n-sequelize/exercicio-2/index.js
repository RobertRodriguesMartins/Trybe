const app = require('express')();
const bodyParser = require('body-parser');

const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use('/algo', (req, res, next) => {});

app.listen(PORT);