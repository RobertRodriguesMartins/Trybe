const express = require("express");
const bodyParser = require('body-parser');
const Author = require('./models/tables/Authors');
const Books = require('./models/tables/Books');
const rescue = require('express-rescue');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log(`recebi uma requisição em: ${req.path}`)
  next();
})

app.get('/authors', rescue(async (req, res) => {
  const result = await Author.getAll();

  res.status(200).json(result);
}))

app.get('/authors/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const result = await Author.getAuthorById(id);
  
  res.status(200).json(result);
}))

app.get('/books', rescue(async (req, res) => {
  const { author_id } = req.query; 
  const result = await Books.getByAuthorId(author_id);
  
  res.status(200).json(result);
}));

app.get('/books/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const result = await Books.getById(id);
  
  res.status(200).json(result);
}));

app.use((err, req, res, next) => {
  res.status(500).json({message: err.message});
})

app.listen(PORT, () => console.log('servidor iniciado!'));
