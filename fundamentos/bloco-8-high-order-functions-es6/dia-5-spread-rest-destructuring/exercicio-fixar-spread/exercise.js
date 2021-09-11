// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maça', 'abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['uva', 'morango', 'pêra'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));