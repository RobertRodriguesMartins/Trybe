const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

class Requests {
  log(req, _res, next) {
    console.log("nova requisição em: "+req.path)
    next();
  }
  
  getAllRecipes(req, res) {
    try {
      const ascResult = recipes.sort((a, b) => a.name - b.name);
      res.status(200).json(ascResult);
    } catch (err) {
      res.status(500).json({message: err.message, status: 500})
    }
  }
  
  getRecipeById(req, res) {
    try {
      const id = parseInt(req.params.id, 10);
      const recipe = recipes.find((el) => el.id === id);
      if (recipe) {
        return res.status(200).json(recipe);
      }
      return res.status(404).json({message: 'Receita não disponível'})
    } catch (err) {
      return res.status(500).json({ message: "Ocorreu algum erro aqui durante a operação :/" })
    }
  }
  
  getRecipesByName(req, res) {
    try {
      const { name='', maxPrice = 100} = req.query;
      const filteredRecipes = recipes.filter((r) => {
        const recipe = r.name.toLowerCase();
        console.log(maxPrice)
        return (recipe.includes(name.toLowerCase()) && r.price < parseInt(maxPrice));
      });
      return res.status(200).json(filteredRecipes);
    } catch (err) {
      return res.status(500).json({message: 'Ocorreu um erro aqui durante a operação :/'})
    }
  }
  // ...
  postRecipe(req, res) {
    try {
      const { id, name, price } = req.body;
      recipes.push({ id, name, price});
      return res.status(201).json({ message: 'POST: Recipe created successfully!'});
    } catch (err) {
      return res.status(500).end();      
    }
  };

  putRecipeById(req, res) {
    try {
      const { id } = req.params;
      const { name, price } = req.body;
      const findIndex = recipes.findIndex((el) => el.id === parseInt(id));
      if (!findIndex) return res.status(404).json({ message: 'Receita não encontrada' })
      recipes[findIndex] = {...recipes[findIndex], name, price};
      return res.status(204).end();
    } catch (err) {
      return res.status(500).end();
    }
  }

  deleteRecipeById(req, res) {
    try {
      const { id } = req.params;
      const newData = recipes.filter((el) => el.id !== parseInt(id));
      if (newData.length > 0) {
        recipes.length = 0
        recipes.push(newData) ;
        return res.status(204).end();
      }
    } catch (err) {
      return res.status(500).end();
    }
  }

  /*
      Drink handler methods below this block
  */
  getAllDrinks(req, res) {
    try {
      const ascResult = drinks.sort((a, b) => new Intl.Collator('pt-BR', { sensitivity: 'base' }).compare(a.name, b.name));
      res.status(200).json(ascResult);
    } catch (err) {
      res.status(500).json({ message: "ocorreu algum erro aqui durante a operação :/" })
    }
  }
  
  getDrinkById(req, res) {
    try {
      const id = parseInt(req.params.id, 10);
      const result = drinks.find((el) => el.id === id);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ message: "ocorreu algum erro aqui durante a operação :/" })
    }
  }
  
  getDrinksByName(req, res) {
    try {
      const { name = '', maxPrice = 100 } = req.query;
      const filteredDrink = drinks.filter((d) => {
        const drink = d.name.toLowerCase();
        return (drink.includes(name.toLowerCase()) && d.price <= maxPrice)
      });
      if (filteredDrink) {
        return res.status(200).json(filteredDrink);
      }
      return res.status(404).json(filteredDrink);
    } catch (err) {
      return res.status(500).json({ message: 'Ocorreu algum erro aqui durante a operação :/' })
    }
  }
  
  postDrinks(req, res) {
    try {
      const { id, name, price } = req.body;
      drinks.push({id, name, price})
      return res.status(201).json({ message: 'Drink cadastrado com sucesso!!' });
    } catch (err) {
      return res.status(500).end();
    }
  }
}

function createInstance() {
  return new Requests();
}

module.exports = { createInstance };