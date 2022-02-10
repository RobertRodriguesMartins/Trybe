//promisseAll - retorna uma promisse tendo como args um array N
const fs = require('fs').promises;

function createNewPromises(tamanho) {
  const values = [
  'Finalmente',
  'estou',
  'usando',
  'Promise.all',
  '!!!'
];
  const promises = [];
  for (let i = 0; i < tamanho; i++) {
    promises.push(fs.writeFile(`file${i+1}.txt`, values[i]))
  }
  return promises;
}

async function readFiles(tamanho) {
  let promises = [];
  for (let i = 0; i < tamanho; i++) {
    promises.push(fs.readFile(`file${i+1}.txt`, { encoding: 'utf-8' }));
  }
  return promises;
}

async function writeManyFiles() {
  const promises = await createNewPromises(5)
  await Promise.all(promises)
  const files = await readFiles(5)
  Promise.all(files)
    .then((content) => {
      const data = content.join(' ');
      fs.writeFile('fileAll.txt', data)
    })
  .catch((err) => console.log(err))
}

module.exports = {
  writeManyFiles
}