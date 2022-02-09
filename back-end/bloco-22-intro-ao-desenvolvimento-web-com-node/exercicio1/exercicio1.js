function exercicio1 (a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      return reject('Informe apenas números');
    }
    const result = ((a + b) * c);
    return result > 50 ? resolve(result) :  reject('Valor muito baixo');
  })
}

module.exports = exercicio1;