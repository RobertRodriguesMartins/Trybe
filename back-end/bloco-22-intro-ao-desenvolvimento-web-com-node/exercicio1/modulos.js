const fs = require('fs').promises;

async function readData()  {
  try {
    const result = await fs.readFile('simpson.json', {
      encoding: 'utf-8'
    });
    const newResult = JSON.parse(result);
    return newResult;
  } catch (err) {
    console.log(err);
  }
}

async function findPeople(id) {
  const parseId = id.toString();
    const result = await readData();
    let idExists = false;
    idExists = result.find((el) => el.id === parseId)
    if (idExists) {
      return idExists;
    }
  return 'id não encontrado';
}

async function removePeople(id1, id2) {
  const data = await readData();
  const result = data.filter((el) => el.id != id1 && el.id != id2);
  return result;
}

async function createNewFile() {
  const data = await readData();
  const result = data.slice(0, 4);
  let response;
  await fs.writeFile('simpsonFamily.json', JSON.stringify(result))
    .then(() => response ='Arquivo escrito com sucesso')
    .catch((err) => response = err);
  return response;
}

async function addAPerson(person) {
  const file = await fs.readFile('simpsonFamily.json', {
    encoding: 'utf-8'
  })
  const persons = JSON.parse(file);
  persons.push({ id: (persons.length + 1).toString(), name: person});
  await fs.writeFile('simpsonFamily.json', JSON.stringify(persons));
}

async function replaceAPerson(replace = '', newPerson = '') {
  const file = await fs.readFile('simpsonFamily.json', {
    encoding: 'utf-8'
  })
  const persons = JSON.parse(file);
  const newData = persons.map((el) => {
    if (el.name === replace) {
      el.name = newPerson
    }
    return el
  });
  await fs.writeFile('simpsonFamily.json', JSON.stringify(newData));
  console.log('escrito com sucesso!')
}

module.exports = {
  readData,
  findPeople,
  removePeople,
  createNewFile,
  addAPerson,
  replaceAPerson
};
