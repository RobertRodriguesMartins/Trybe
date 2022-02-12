const fs = require('fs');

const isApproved = (media) => {
  return media >= 7 ? 'aprovado': 'reprovado';
};

const soma = (valorA, valorB) => valorA + valorB;


const readFile = (file) => {
  try {
    const result = fs.readFileSync(file, {
      encoding: 'utf-8'
    })
    return result;
  } catch (err) {
    return (err)
  }
}

module.exports = {
  isApproved,
  soma,
  readFile
};