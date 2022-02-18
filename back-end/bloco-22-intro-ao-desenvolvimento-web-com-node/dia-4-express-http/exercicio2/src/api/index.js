const fs = require('fs').promises;

class ApiFunctions {
  log(req, res, next) {
    console.log(`recebi uma requisição em ${req.path}`)
    next();
  }
  getPing(req, res) {
    try {
      return res.status(200).json({message: 'pong'})
    } catch (err) {
      res.status(500).end();
    }
  }
  postHello(req, res) {
    try {
      const { name } = req.body;
      if (!name) return res.status(404).end();
      return res.status(201).json({ message: `hello, ${name}` }); 
    } catch (err) {
      res.status(500).end();
    }
  }

  postGreetings (req, res) {
    try {
      const { name, age } = req.body;
      if (name) {
        if (age > 17 && !isNaN(age)) {
          return res.status(200).json({message: `hello, ${name}`});
        }
      }
      return res.status(401).json({message: 'unauthorized'});
    } catch (err) {
      return res.status(500).end();
    }
  }

  editUser (req, res) {
    try {
      const { name, age } = req.params;
      const result = name && !isNaN(age)
      if (result) {
        return res.status(200).json({ 
          message: `Seu nome é ${name} e você tem ${age} anos de idade`
        });
      }
      return res.status(404).json({message: 'informe os dados corretamente!'})
    } catch (err) {
      return res.status(500).end();
    }
  }

  getAllSimpsons(req, res) {
    fs.readFile('./src/data/simpson.json', {
      encoding: 'utf-8'
    })
    .then((content) => {
      return res.status(200).json({ data: content })
    })
    .catch((err) => console.log(err))
  }

  getSimpsonById(req, res) {
    const { id } = req.params;
    fs.readFile('./src/data/simpson.json', {
      encoding: 'utf-8'
    })
    .then((res) => JSON.parse(res).find((s) => s.id === id))
    .then((simpson) => {
      if (simpson) {
        return res.status(200).json({message: simpson});
      }
      return res.status(404).json({message: 'simpson não encontrado!'})
    })
    .catch((err) => res.status(500).json({message: err}));
  }

  createNewSimpson(req, res) {
    const { id, name } = req.body;
    fs.readFile('./src/data/simpson.json', {
      encoding: 'utf-8'
    })
      .then((content) => JSON.parse(content))
      .then((value) => {
        const newSimpson = {id, name};
        const result = JSON.stringify(value.push(newSimpson));
        return fs.writeFile('./src/data/simpson.json', result)
      })
      .then(() => res.status(201).json({message: 'criado com sucesso!'}))
      .catch((err) => res.status(500).json({message: `ERRO: ${err}`}))
  }

}

function createInstance() {
  return new ApiFunctions;
}

module.exports = createInstance;