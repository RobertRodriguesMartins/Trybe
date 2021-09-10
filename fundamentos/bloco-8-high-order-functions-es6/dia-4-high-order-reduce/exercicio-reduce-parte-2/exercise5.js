const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(names) {
  const numeroDeA = names.reduce((acc, elemento) => {
    return (acc + (elemento.toLowerCase().split('a').length - 1));
  }, 0)

  return numeroDeA;
}

assert.deepStrictEqual(containsA(names), 20);