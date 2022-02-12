const { createInstance } = require('./base');
const bodyParser = require('body-parser')
const express = require('express');
const app = express();

const base = createInstance();

app.use(bodyParser.json())
app.get('/recipes', base.log, base.getAllRecipes);
app.get('/recipes/search', base.log, base.getRecipesByName);
app.post('/recipes/cadastro', base.log, base.postRecipe);
app.get('/recipes/:id', base.log, base.getRecipeById);
app.put('/recipes/:id', base.log, base.putRecipeById);
app.delete('/recipes/:id', base.log, base.deleteRecipeById);
app.get('/drinks', base.log, base.getAllDrinks);
app.get('/drinks/search', base.log, base.getDrinksByName);
app.post('/drinks/cadastro', base.log, base.postDrinks);
app.get('/drinks/:id', base.log, base.getDrinkById);

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});