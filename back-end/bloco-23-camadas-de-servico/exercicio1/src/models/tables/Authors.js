const connection = require('../connection');

function fullName(normalized) {
  return {
    ...normalized,
    fullName: `${normalized.Nome} ${normalized.Sobrenome}`
  }
}

function serialize(data) {
  return {
    id: data.id,
    Nome: data.Nome,
    NomeDoMeio: data.Nome_do_meio,
    Sobrenome: data.Sobrenome,
    DataDeNascimento: data.Data_de_nascimento,
    Nacionalidade: data.Nacionalidade
  }
}

async function getAll() {
  const query = 'SELECT id, Nome, Nome_do_meio, Sobrenome, Data_de_nascimento, Nacionalidade FROM authors';
  const [Authors] = await connection.execute(query);
  
  return Authors.map((data) => fullName(serialize(data)));
}

async function getAuthorById(id) {
  const query = 'SELECT Nome, Nome_do_meio, Sobrenome, Data_de_nascimento, Nacionalidade FROM authors WHERE id = ?';
  const [result] = await connection.execute(query, [id]);
  
  const res = {
    ...result.map(serialize)[0],
    id
  }
  return res;
}

module.exports = {
  getAll,
  getAuthorById
}