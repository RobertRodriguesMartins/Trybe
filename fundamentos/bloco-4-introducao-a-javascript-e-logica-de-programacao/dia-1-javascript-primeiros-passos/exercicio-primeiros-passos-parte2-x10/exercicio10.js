// [custo, valor de venda]
const prodA = [2,5];
const prodB = [1300, 3500];
let imposto = 20;
let quantidade = 1000;

prodA[0] += (prodA[0] * imposto)/100;
prodB[0] += (prodB[0] * imposto)/100;

console.log("Custo produto A: ", prodA[0] * quantidade, " Valor de venda total: ", prodA[1] * quantidade);
console.log("Lucro produto A: ", (prodA[1] * quantidade) -(prodA[0] * quantidade));
console.log("////////////////////");
console.log("Custo produto B: ", prodB[0] * quantidade, " Valor de venda total: ", prodB[1] * quantidade);
console.log("Lucro produto B: ", (prodB[1] * quantidade) -(prodB[0] * quantidade));